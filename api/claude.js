// AD BEAST — Gemini Proxy
// Accepts Anthropic-style requests from the frontend,
// translates to Gemini format, returns Anthropic-style response.
// Frontend needs zero changes.
//
// FREE tier: gemini-1.5-flash
//   - 15 requests/minute
//   - 1,500 requests/day
//   - No credit card required
//
// Set GEMINI_API_KEY in Vercel → Settings → Environment Variables
// Get your free key at: aistudio.google.com

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // FREE FOREVER: Return mock response for testing without API key
    const mockResponse = {
      id: 'mock-' + Date.now(),
      type: 'message',
      role: 'assistant',
      content: [{
        type: 'text',
        text: '🐺 AD BEAST is ready! This is a demo response. To enable real AI generation:\n\n1. Get a FREE Gemini API key at: https://aistudio.google.com\n2. Add GEMINI_API_KEY to your Vercel environment variables\n3. Redeploy\n\nNo credit card required! ✨'
      }],
      model: 'gemini-1.5-flash',
      stop_reason: 'end_turn',
      usage: {
        input_tokens: 10,
        output_tokens: 50
      }
    };
    return res.status(200).json(mockResponse);
  }

  try {
    // ── Translate Anthropic request → Gemini format ──────────────────────────
    // Incoming body looks like:
    // { model: "...", max_tokens: 1000, messages: [{ role: "user", content: "..." }] }
    const { messages, max_tokens } = req.body;

    // Flatten messages into a single Gemini "contents" array
    const contents = (messages || []).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: typeof m.content === 'string' ? m.content : JSON.stringify(m.content) }]
    }));

    const geminiBody = {
      contents,
      generationConfig: {
        maxOutputTokens: max_tokens || 1000,
        temperature: 0.85
      }
    };

    // ── Call Gemini ──────────────────────────────────────────────────────────
    const model = 'gemini-1.5-flash'; // Free, fast, capable
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody)
    });

    let geminiData;
    try {
      geminiData = await geminiRes.json();
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', parseError);
      return res.status(500).json({
        error: 'Invalid response from Gemini API. Check your API key.',
        details: 'Response was not valid JSON'
      });
    }

    if (!geminiRes.ok) {
      console.error('Gemini error:', geminiData);
      return res.status(geminiRes.status).json({
        error: geminiData?.error?.message || 'Gemini API error',
        details: geminiData
      });
    }

    // ── Translate Gemini response → Anthropic format ─────────────────────────
    // Gemini returns:
    // { candidates: [{ content: { parts: [{ text: "..." }] } }] }
    //
    // Frontend expects:
    // { content: [{ type: "text", text: "..." }] }

    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    const anthropicStyleResponse = {
      id: 'gemini-' + Date.now(),
      type: 'message',
      role: 'assistant',
      content: [{ type: 'text', text }],
      model: model,
      stop_reason: 'end_turn',
      usage: {
        input_tokens: geminiData?.usageMetadata?.promptTokenCount || 0,
        output_tokens: geminiData?.usageMetadata?.candidatesTokenCount || 0
      }
    };

    return res.status(200).json(anthropicStyleResponse);

  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: err.message });
  }
}