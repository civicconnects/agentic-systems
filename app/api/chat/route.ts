import { NextResponse } from 'next/server';

// 🚀 CRITICAL: This line forces Cloudflare to treat this as an API Function
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nUrl) {
      return NextResponse.json({ error: 'Config Error: Missing Webhook URL' }, { status: 500 });
    }

    // Forward to N8N
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();

    try {
      // Return Clean JSON
      return NextResponse.json(JSON.parse(responseText));
    } catch (e) {
      // Return Safe Text
      return NextResponse.json({ output: responseText });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle GET requests (so you can test it in the browser)
export async function GET() {
  return NextResponse.json({ status: 'API Online' });
}