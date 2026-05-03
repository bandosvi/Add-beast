import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // TESTING MODE: Return demo response when no API key is set
      const demoResponse = {
        content: [{
          type: 'text',
          text: '🐺 AD BEAST is in testing mode! This is a demo response. To enable real AI generation:\n\n1. Get a FREE Gemini API key at: https://aistudio.google.com\n2. Set GEMINI_API_KEY environment variable\n3. Restart the development server\n\nNo credit card required for testing! ✨'
        }]
      };
      return NextResponse.json(demoResponse);
    }

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

    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiBody),
    });

    if (!r.ok) {
      throw new Error(`Gemini API error: ${r.status}`);
    }

    let data;
    try {
      data = await r.json();
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', parseError);
      return NextResponse.json({
        error: 'Invalid response from Gemini API. Check your API key.',
        details: 'Response was not valid JSON'
      }, { status: 500 });
    }

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