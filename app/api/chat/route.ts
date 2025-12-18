import { NextResponse } from 'next/server';

// 1. Allow for longer timeouts (up to 60s) on supported platforms
export const maxDuration = 60; 
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nUrl) {
      return NextResponse.json({ error: 'Server Config Error: Missing N8N URL.' }, { status: 500 });
    }

    // 2. Add an AbortController to manage timeouts manually if needed
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const rawText = await response.text();

    try {
      const data = JSON.parse(rawText);
      return NextResponse.json(data);
    } catch (e) {
      // If N8N returns plain text (common in errors), wrap it safely
      return NextResponse.json({ output: rawText });
    }

  } catch (error: any) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: 'The AI took too long to respond. Please try again.' }, { status: 504 });
  }
}