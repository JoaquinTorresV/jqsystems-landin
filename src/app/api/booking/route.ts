import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN!;
const AIRTABLE_BASE  = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE = 'Leads';

export async function POST(req: NextRequest) {
  const { name, phone, niche, budget } = await req.json();

  if (!name || !phone || !niche || !budget) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
  }

  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Nombre:      name,
          'Teléfono':  phone,
          Nicho:       niche,
          Presupuesto: budget,
          Fecha:       new Date().toISOString(),
          Fuente:      'landing',
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    console.error('Airtable error:', err);
    return NextResponse.json({ error: 'Error al guardar' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
