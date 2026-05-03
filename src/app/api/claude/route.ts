import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Convert Anthropic format to Gemini format
    const geminiBody = {
      contents: [{
        parts: [{
          text: body.messages[0].content
        }]
      }]
    };

    // Use gemini-2.0-flash-exp for free tier
    const model = 'gemini-2.0-flash-exp';

    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiBody),
    });

    if (!r.ok) {
      throw new Error(`Gemini API error: ${r.status}`);
    }

    const data = await r.json();

    // Convert Gemini response to Anthropic-like format for compatibility
    const anthropicResponse = {
      content: [{
        type: 'text',
        text: data.candidates[0].content.parts[0].text
      }]
    };

    return NextResponse.json(anthropicResponse);
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json({ error: 'Failed to call Gemini API' }, { status: 500 });
  }
}