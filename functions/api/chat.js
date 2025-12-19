// This file runs on Cloudflare's Edge Network
// It acts as the secure bridge between your website and N8N

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();

    // 1. Get N8N URL from Cloudflare Environment Variables
    const n8nUrl = env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nUrl) {
      return new Response(JSON.stringify({ error: 'Config Error: Missing N8N URL' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Forward the message to N8N
    const n8nResponse = await fetch(n8nUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const responseText = await n8nResponse.text();

    // 3. Return the answer to the website
    try {
      const data = JSON.parse(responseText);
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      // If N8N returns raw text, wrap it in JSON
      return new Response(JSON.stringify({ output: responseText }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}