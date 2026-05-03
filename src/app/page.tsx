"use client";

import { useState } from "react";

export default function Home() {
  const [showCampaign, setShowCampaign] = useState(false);

  const mobileStyles = `
    @media (max-width: 768px) {
      .hero h1 { font-size: clamp(2rem, 10vw, 4rem) !important; }
      .section-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
      .pricing-cards { flex-direction: column !important; align-items: center !important; }
      .pricing-card { width: 100% !important; max-width: 300px !important; }
      .campaign-buttons { flex-direction: column !important; gap: 10px !important; }
      .campaign-buttons button { width: 100% !important; max-width: 250px !important; }
    }
    @media (max-width: 480px) {
      body { padding: 10px !important; }
      .hero h1 { font-size: clamp(1.8rem, 12vw, 3rem) !important; }
      .hero p { font-size: 1rem !important; }
      .section h2 { font-size: 1.8rem !important; }
      .pricing-card { padding: 15px !important; }
      .upgrade-btn { padding: 12px 20px !important; font-size: 1rem !important; }
    }
  `;

  return (
    <div style={{ fontFamily: 'Barlow, sans-serif', background: '#07070a', color: '#c4c4d4', minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: 'clamp(20px, 5vw, 40px)' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 7.5vw, 5rem)', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>
          AD <span style={{ color: '#ff4000' }}>BEAST</span> — Autonomous Ad Engine
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', color: '#c4c4d4', maxWidth: '600px', margin: '0 auto' }}>
          Stop wasting hours writing ads. Start getting eyes on your product.
        </p>
        <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: '#888', marginTop: '10px' }}>
          AI that turns one product description into a full multi-platform campaign — in seconds.
        </p>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: 'clamp(0.9rem, 3vw, 1rem)', lineHeight: '1.8' }}>
          <li>• Smart subreddit scouting (checks promo rules + fit score + best day)</li>
          <li>• Platform-optimized copy using proven frameworks (PAS, AIDA, HSO, BAB)</li>
          <li>• One-click or auto-post to Reddit, X/Twitter, LinkedIn, Facebook, Instagram, TikTok & cold email</li>
          <li>• Powered by Claude</li>
        </ul>
        <p style={{ marginTop: '20px', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', color: '#888' }}>
          Free tier available • Pro: $19/mo (unlimited campaigns + advanced scouting)
        </p>
        <p style={{ marginTop: '20px', fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: '#22c55e' }}>
          💚 10% of every revenue dollar goes to GiveDirectly.org — direct cash to people in extreme poverty (GiveWell #1 charity).
        </p>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          UNLEASH THE BEAST!
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: '#0f0f13', padding: '20px', borderRadius: '8px', border: '1px solid #1c1c24' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>The Problem</h3>
            <p style={{ color: '#c4c4d4', lineHeight: '1.6' }}>
              You built something great.<br />
              Now the hard part: telling people it exists.<br />
              Writing ads feels like a second job. Different rules per platform. Subreddits ban you for bad promo. Inconsistent effort = zero traction.
            </p>
          </div>
          <div style={{ background: '#0f0f13', padding: '20px', borderRadius: '8px', border: '1px solid #1c1c24' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>The Solution</h3>
            <p style={{ color: '#c4c4d4', lineHeight: '1.6' }}>
              Describe your product once.<br />
              AD BEAST handles the rest:
              <br />• Finds communities that actually allow promotion
              <br />• Generates tailored, high-converting copy for every platform
              <br />• Lets you post with one click or go fully autonomous
            </p>
            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>
              Built by a founder who was tired of the same pain.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          🔥 Ready Campaigns
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <button style={{ background: '#ff4000', color: '#000', border: 'none', padding: 'clamp(10px, 3vw, 12px) clamp(20px, 5vw, 24px)', borderRadius: '4px', fontSize: 'clamp(0.9rem, 3vw, 1rem)', cursor: 'pointer', width: '100%', maxWidth: '250px' }} onClick={() => setShowCampaign(true)}>
            Load "Promote AD BEAST" Campaign
          </button>
          <button style={{ background: '#4a9eff', color: '#000', border: 'none', padding: 'clamp(10px, 3vw, 12px) clamp(20px, 5vw, 24px)', borderRadius: '4px', fontSize: 'clamp(0.9rem, 3vw, 1rem)', cursor: 'pointer', width: '100%', maxWidth: '250px' }}>
            Create New Campaign
          </button>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          Pricing
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ background: '#0f0f13', padding: '20px', borderRadius: '8px', border: '1px solid #1c1c24', width: 'clamp(150px, 40vw, 200px)', minWidth: '150px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Free</h3>
            <p style={{ color: '#c4c4d4', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>2 campaigns/month + basic platforms</p>
          </div>
          <div style={{ background: '#0f0f13', padding: '20px', borderRadius: '8px', border: '1px solid #f5c518', width: 'clamp(150px, 40vw, 200px)', minWidth: '150px' }}>
            <h3 style={{ color: '#f5c518', marginBottom: '10px', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Pro — $19/month</h3>
            <p style={{ color: '#c4c4d4', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>Unlimited campaigns, full auto-post, advanced Scout Mode, priority support</p>
          </div>
        </div>
        <button style={{ background: '#ff4000', color: '#000', border: 'none', padding: 'clamp(10px, 3vw, 14px) clamp(20px, 5vw, 28px)', borderRadius: '4px', fontSize: 'clamp(1rem, 3vw, 1.2rem)', cursor: 'pointer', marginTop: '20px', width: '100%', maxWidth: '200px' }}>
          Upgrade
        </button>
      </section>

      {showCampaign && (
        <section style={{ maxWidth: 'clamp(300px, 90vw, 1000px)', margin: '0 auto clamp(20px, 5vw, 40px)', padding: 'clamp(10px, 3vw, 20px)', background: '#0f0f13', borderRadius: '8px', border: '1px solid #1c1c24' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 'bold', color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
            🔥 PROMOTE AD BEAST CAMPAIGN (Upgraded)
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#ff4000', marginBottom: '10px' }}>🔴 REDDIT — r/indiehackers (Top Target)</h3>
            <p style={{ fontWeight: 'bold', color: '#fff' }}>Title: I got tired of 3-hour ad writing sessions that went nowhere, so I built AD BEAST</p>
            <p style={{ color: '#c4c4d4', lineHeight: '1.6', marginTop: '10px' }}>
              Real talk from a fellow builder:<br />
              I could ship products but marketing was painful. Different tone for every platform, subreddit rules I kept violating, and zero consistency.<br />
              So I built AD BEAST — an autonomous ad engine.<br />
              Paste your product → Scout finds the best subreddits (with promo rules checked) → Generates tailored copy across Reddit, X threads, LinkedIn, cold emails, TikTok scripts — all at once. One-click to post.<br />
              Free tier gives you real campaigns to test. Pro is $19/mo.<br />
              Still early. Brutal feedback welcome — what's missing?<br />
              Link: https://add-beast.vercel.app/
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#4a9eff', marginBottom: '10px' }}>🧵 X/TWITTER THREAD (HSO)</h3>
            <ol style={{ color: '#c4c4d4', lineHeight: '1.6' }}>
              <li>1/ Most indie makers build in public.<br />Very few market in public consistently.<br />I fixed that problem in ~30 seconds. Thread 🧵</li>
              <li>2/ Writing ads used to kill my momentum. Different formats, tones, and rules for every platform. I'd do one or two and call it a day.</li>
              <li>3/ AD BEAST changes the game: One product description → Smart scouting of subreddits → Perfectly tailored copy for every major platform simultaneously.</li>
              <li>4/ One-click posting. Or go autonomous.<br />Free tier available. Pro $19/mo.<br />10% of revenue goes to GiveDirectly (extreme poverty relief).<br />Try it → https://add-beast.vercel.app/</li>
            </ol>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0077b5', marginBottom: '10px' }}>💼 LINKEDIN</h3>
            <p style={{ color: '#c4c4d4', lineHeight: '1.6' }}>
              Six months ago I was manually rewriting the same offer for Reddit, Twitter, LinkedIn, and email every single week. Burnout was real. Traction was minimal.<br />
              Today I run full campaigns in under a minute.<br />
              AD BEAST lets you input your product once and outputs high-quality, platform-specific marketing assets across every channel — with intelligent subreddit targeting that respects community rules.<br />
              Built for founders who want to spend more time building, less time marketing.<br />
              10% of revenue donated to GiveDirectly.org.<br />
              What's your biggest marketing bottleneck right now?
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#888', marginBottom: '10px' }}>📧 COLD EMAIL</h3>
            <p style={{ fontWeight: 'bold', color: '#fff' }}>Subject: Stop doing marketing the hard way</p>
            <p style={{ color: '#c4c4d4', lineHeight: '1.6', marginTop: '10px' }}>
              Most founders spend months building and minutes "marketing."<br />
              AD BEAST fixes the imbalance.<br />
              One description → full campaign across Reddit, X, LinkedIn, email & TikTok. Smart scouting included.<br />
              Free to try. $19/mo for unlimited.<br />
              https://add-beast.vercel.app/<br />
              10% → GiveDirectly.org
            </p>
          </div>
        </section>
      )}

      <section style={{ maxWidth: '800px', margin: '0 auto clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          Social Proof Section (add later)
        </h2>
        <blockquote style={{ color: '#c4c4d4', fontStyle: 'italic', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
          "Finally consistent marketing without the burnout" — Early User
        </blockquote>
      </section>

      <footer style={{ textAlign: 'center', marginTop: 'clamp(20px, 5vw, 40px)', color: '#888', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>
        <p>Built with ❤️ for indie hackers, solopreneurs & side hustlers.</p>
        <p>10% → GiveDirectly.org</p>
      </footer>
    </div>
  );
}