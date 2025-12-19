import { NextResponse } from 'next/server';

// 1. Force dynamic mode (Fixes static 405 errors)
export const dynamic = 'force-dynamic';

// 2. Handle OPTIONS (Preflight checks for browsers)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: { 'Allow': 'POST' } });
}

// 3. Handle GET (For easy testing in browser)
export async function GET() {
  return NextResponse.json({ status: 'Online', message: 'API Proxy is active. Send a POST request to chat.' });
}

// 4. Handle POST (The actual chat function)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nUrl) {
      return NextResponse.json({ error: 'Configuration Error: Missing Webhook URL.' }, { status: 500 });
    }

    console.log("🚀 Proxying to:", n8nUrl);

    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();

    try {
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (e) {
      // If N8N returns raw text, wrap it safely
      return NextResponse.json({ output: responseText || "Workflow completed." });
    }

  } catch (error: any) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}