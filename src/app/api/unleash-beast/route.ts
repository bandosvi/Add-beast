import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      productName,
      price,
      description,
      audience,
      painPoint,
      socialProof,
      website,
      subreddits,
      platforms,
      frameworks,
    } = await request.json();

    // For demo, generate ads for selected platforms using Gemini
    const ads = [];

    const selectedPlatforms = platforms.filter((p: any) => p.selected);

    for (const platform of selectedPlatforms) {
      const framework = frameworks[Math.floor(Math.random() * frameworks.length)]; // Random framework for demo

      const prompt = `Generate a compelling ad for ${platform.name} using the ${framework} framework.

Product: ${productName}
Price: ${price}
Description: ${description}
Audience: ${audience}
Pain Point: ${painPoint}
Social Proof: ${socialProof || 'None provided'}
Website: ${website}
Target Subreddits: ${subreddits || 'General'}

Make it optimized for ${platform.name} posting. Keep it concise and engaging.`;

      const r = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307', // Use cheaper model for demo
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      });

      if (!r.ok) {
        throw new Error(`Gemini API error: ${r.status}`);
      }

      const message = await r.json();
      const adText = message.content[0].type === 'text' ? message.content[0].text : '';

      ads.push({
        platform: platform.name,
        mode: platform.mode,
        framework,
        text: adText,
        charCount: adText.length,
      });
    }

    return NextResponse.json({ ads });
  } catch (error) {
    console.error('Error generating ads:', error);
    return NextResponse.json({ error: 'Failed to generate ads' }, { status: 500 });
  }
}