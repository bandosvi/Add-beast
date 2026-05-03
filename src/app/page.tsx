"use client";

import { useState } from "react";

export default function Home() {
  const [showCampaign, setShowCampaign] = useState(false);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          AD <span style={{ color: '#ff4000' }}>BEAST</span>
        </div>
        <div>
          <button style={{ background: 'none', border: '1px solid #333', color: '#fff', padding: '8px 16px', borderRadius: '4px', marginRight: '10px' }}>
            Login
          </button>
          <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '8px 16px', borderRadius: '4px' }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Autonomous Ad Engine
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 40px' }}>
          Generate platform-optimized ads using proven frameworks. Scout the best subreddits intelligently. Post automatically or one-click.
        </p>
        <div>
          <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '15px 30px', borderRadius: '4px', fontSize: '1rem', marginRight: '10px' }}>
            Start Creating Ads
          </button>
          <button style={{ background: 'none', border: '1px solid #333', color: '#fff', padding: '15px 30px', borderRadius: '4px', fontSize: '1rem' }} onClick={() => setShowCampaign(true)}>
            View Demo Campaign
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 20px', background: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Smart Subreddit Scouting</h3>
              <p style={{ color: '#ccc' }}>Analyzes subreddits for promo rules, fit score, and best posting times.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Platform Optimization</h3>
              <p style={{ color: '#ccc' }}>Tailored copy using PAS, AIDA, HSO, and BAB frameworks for each platform.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Auto-Posting</h3>
              <p style={{ color: '#ccc' }}>One-click or fully autonomous posting to Reddit, Twitter, LinkedIn, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '40px 20px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Free</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>$0</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc' }}>
                <li>✓ 2 campaigns/month</li>
                <li>✓ Basic platforms</li>
                <li>✓ Copy to clipboard</li>
                <li>✓ Reddit Scout (3 subs)</li>
              </ul>
              <button style={{ background: '#333', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px', marginTop: '20px', width: '100%' }}>
                Get Started
              </button>
            </div>
            <div style={{ border: '1px solid #ff4000', borderRadius: '8px', padding: '40px 20px', background: '#ff400005' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Pro</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>$19<span style={{ fontSize: '1rem' }}>/mo</span></p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc' }}>
                <li>✓ Unlimited campaigns</li>
                <li>✓ All 8 platforms</li>
                <li>✓ One-click posting</li>
                <li>✓ Advanced Scout Mode</li>
              </ul>
              <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '10px 20px', borderRadius: '4px', marginTop: '20px', width: '100%' }}>
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', background: '#111', color: '#ccc' }}>
        <p>Built with ❤️ for indie hackers. 10% of revenue goes to GiveDirectly.org.</p>
      </footer>

      {/* Demo Campaign Modal */}
      {showCampaign && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '20px' }}>Demo Campaign: Promote AD BEAST</h2>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>Here's a sample campaign generated for promoting AD BEAST itself.</p>
            <div style={{ background: '#000', padding: '20px', borderRadius: '4px', marginBottom: '20px' }}>
              <h3>Reddit Post</h3>
              <p><strong>Title:</strong> I got tired of 3-hour ad writing sessions that went nowhere, so I built AD BEAST</p>
              <p>Real talk from a fellow builder... [content]</p>
            </div>
            <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '10px 20px', borderRadius: '4px' }} onClick={() => setShowCampaign(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}