import { NextResponse } from 'next/server';

// 1. Force this route to be dynamic (Fixes 405 Static Errors)
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // 2. Parse the incoming message
    const body = await request.json();
    
    // 3. Check for the N8N URL
    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nUrl) {
      console.error("❌ Config Error: NEXT_PUBLIC_N8N_WEBHOOK_URL is missing.");
      return NextResponse.json({ error: 'Server Configuration Error: Missing Webhook URL.' }, { status: 500 });
    }

    console.log("🚀 Proxying to N8N:", n8nUrl);

    // 4. Send to N8N
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // 5. Read the response safely
    const responseText = await response.text();
    
    try {
      // Try to parse JSON
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (e) {
      // If N8N returns text/html, wrap it in JSON so the frontend doesn't crash
      console.warn("⚠️ Non-JSON response from N8N:", responseText);
      return NextResponse.json({ output: responseText });
    }

  } catch (error: any) {
    console.error('❌ Proxy Fatal Error:', error);
    return NextResponse.json({ error: `Connection Failed: ${error.message}` }, { status: 500 });
  }
}