import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Optional: Makes it faster on Cloudflare

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nUrl) {
      return NextResponse.json({ error: 'Configuration Error: No N8N URL set on server.' }, { status: 500 });
    }

    console.log("1. Forwarding to N8N:", n8nUrl);

    // Forward to N8N
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // 2. READ RAW TEXT FIRST (This prevents the JSON crash)
    const rawText = await response.text();
    console.log("2. N8N Raw Response:", rawText);

    // 3. Try to parse it as JSON
    try {
      const data = JSON.parse(rawText);
      return NextResponse.json(data);
    } catch (e) {
      // If N8N returned text (like "Workflow started"), wrap it in JSON so frontend doesn't break
      return NextResponse.json({ output: rawText || "Workflow completed with no output." });
    }

  } catch (error: any) {
    console.error('Proxy Fatal Error:', error);
    return NextResponse.json({ error: `Server Error: ${error.message}` }, { status: 500 });
  }
}