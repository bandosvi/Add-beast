"use client";

import { useState } from "react";

export default function Home() {
  const [showCampaign, setShowCampaign] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#000', color: '#fff', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: animations }} />
      {/* Navigation */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'fadeIn 1s ease-in' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          🔥 AD <span style={{ color: '#ff4000' }}>BEAST</span> 🔥
        </div>
        <div>
          <button style={{ background: 'none', border: '1px solid #333', color: '#fff', padding: '8px 16px', borderRadius: '4px', marginRight: '10px', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowLogin(true)} onMouseOver={(e) => (e.target as HTMLElement).style.borderColor = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.borderColor = '#333'}>
            Login
          </button>
          <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '8px 16px', borderRadius: '4px', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowSignup(true)} onMouseOver={(e) => (e.target as HTMLElement).style.background = '#cc3300'} onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ff4000'}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '60px 20px', animation: 'fadeIn 1s ease-in 0.2s both' }}>
        <p style={{ fontFamily: 'var(--font-dancing-script)', fontSize: '1.5rem', color: '#ccc', marginBottom: '10px' }}>
          Leon-Link presents
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          AD <span style={{ color: '#ff4000' }}>BEAST</span> - Autonomous Ad Engine
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 30px' }}>
          Generate platform-optimized ads using proven frameworks. Scout the best subreddits intelligently. Post automatically or one-click.
        </p>
        <div>
          <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', marginRight: '10px', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => (e.target as HTMLElement).style.background = '#cc3300'} onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ff4000'}>
            Start Creating Ads
          </button>
          <button style={{ background: 'none', border: '1px solid #333', color: '#fff', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowCampaign(true)} onMouseOver={(e) => (e.target as HTMLElement).style.borderColor = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.borderColor = '#333'}>
            View Demo Campaign
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 20px', background: '#111', border: '2px solid #ff4000', animation: 'fadeIn 1s ease-in 0.4s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '30px' }}>Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-in 0.6s both', cursor: 'pointer' }} onClick={() => setExpandedFeature(expandedFeature === 'scout' ? null : 'scout')}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', textDecoration: expandedFeature === 'scout' ? 'underline' : 'none', color: expandedFeature === 'scout' ? '#ff4000' : '#fff' }}>Smart Subreddit Scouting</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>Analyzes subreddits for promo rules, fit score, and best posting times.</p>
              <p style={{ color: '#ff4000', fontSize: '0.8rem', marginTop: '5px' }}>Click to expand</p>
              {expandedFeature === 'scout' && (
                <div style={{ marginTop: '15px', padding: '15px', background: '#222', borderRadius: '4px' }}>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>
                    Benefits: Increases posting success by 300%, avoids bans, targets ideal audiences, saves hours of research.
                  </p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-in 0.8s both', cursor: 'pointer' }} onClick={() => setExpandedFeature(expandedFeature === 'optimize' ? null : 'optimize')}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎯</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', textDecoration: expandedFeature === 'optimize' ? 'underline' : 'none', color: expandedFeature === 'optimize' ? '#ff4000' : '#fff' }}>Platform Optimization</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>Tailored copy using PAS, AIDA, HSO, and BAB frameworks for each platform.</p>
              <p style={{ color: '#ff4000', fontSize: '0.8rem', marginTop: '5px' }}>Click to expand</p>
              {expandedFeature === 'optimize' && (
                <div style={{ marginTop: '15px', padding: '15px', background: '#222', borderRadius: '4px' }}>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>
                    Benefits: 5x higher engagement, platform-specific tone, proven copywriting frameworks, automated optimization.
                  </p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-in 1s both', cursor: 'pointer' }} onClick={() => setExpandedFeature(expandedFeature === 'auto' ? null : 'auto')}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🤖</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', textDecoration: expandedFeature === 'auto' ? 'underline' : 'none', color: expandedFeature === 'auto' ? '#ff4000' : '#fff' }}>Auto-Posting</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>One-click or fully autonomous posting to Reddit, Twitter, LinkedIn, and more.</p>
              <p style={{ color: '#ff4000', fontSize: '0.8rem', marginTop: '5px' }}>Click to expand</p>
              {expandedFeature === 'auto' && (
                <div style={{ marginTop: '15px', padding: '15px', background: '#222', borderRadius: '4px' }}>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>
                    Benefits: Saves 10+ hours/week, 24/7 posting, API integrations, zero manual work.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '60px 20px', border: '2px solid #ff4000', animation: 'fadeIn 1s ease-in 0.2s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '30px 20px', animation: 'fadeInUp 1s ease-in 0.4s both' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Free</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>$0</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc', fontSize: '0.9rem' }}>
                <li>✓ 2 campaigns/month</li>
                <li>✓ Basic platforms</li>
                <li>✓ Copy to clipboard</li>
                <li>✓ Reddit Scout (3 subs)</li>
              </ul>
              <button style={{ background: '#333', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px', marginTop: '20px', width: '100%', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => (e.target as HTMLElement).style.background = '#555'} onMouseOut={(e) => (e.target as HTMLElement).style.background = '#333'}>
                Get Started
              </button>
            </div>
            <div style={{ border: '1px solid #ff4000', borderRadius: '8px', padding: '30px 20px', background: '#ff400005', animation: 'fadeInUp 1s ease-in 0.6s both' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Pro</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>$19<span style={{ fontSize: '1rem' }}>/mo</span></p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc', fontSize: '0.9rem' }}>
                <li>✓ Unlimited campaigns</li>
                <li>✓ All 8 platforms</li>
                <li>✓ One-click posting</li>
                <li>✓ Advanced Scout Mode</li>
              </ul>
              <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '10px 20px', borderRadius: '4px', marginTop: '20px', width: '100%', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => (e.target as HTMLElement).style.background = '#cc3300'} onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ff4000'}>
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

      {/* Login Modal */}
      {showLogin && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '400px', width: '90%' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const email = formData.get('email') as string;
              const password = formData.get('password') as string;
              const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
              });
              const data = await res.json();
              if (res.ok) {
                alert('Login successful');
                setShowLogin(false);
                // Redirect or update state
              } else {
                alert(data.error);
              }
            }}>
              <input name="email" type="email" placeholder="Email" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <input name="password" type="password" placeholder="Password" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <button type="submit" style={{ width: '100%', padding: '10px', background: '#ff4000', border: 'none', borderRadius: '4px', color: '#000', cursor: 'pointer' }}>Login</button>
            </form>
            <button style={{ background: 'none', border: 'none', color: '#fff', marginTop: '10px', cursor: 'pointer' }} onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '400px', width: '90%' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Sign Up</h2>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get('name') as string;
              const email = formData.get('email') as string;
              const password = formData.get('password') as string;
              const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
              });
              const data = await res.json();
              if (res.ok) {
                alert('Signup successful, please login');
                setShowSignup(false);
              } else {
                alert(data.error);
              }
            }}>
              <input name="name" type="text" placeholder="Name" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <input name="email" type="email" placeholder="Email" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <input name="password" type="password" placeholder="Password" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <button type="submit" style={{ width: '100%', padding: '10px', background: '#ff4000', border: 'none', borderRadius: '4px', color: '#000', cursor: 'pointer' }}>Sign Up</button>
            </form>
            <button style={{ background: 'none', border: 'none', color: '#fff', marginTop: '10px', cursor: 'pointer' }} onClick={() => setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Demo Campaign Modal */}
      {showCampaign && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '20px' }}>Demo Campaign: Promote AD BEAST</h2>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>Here&apos;s a sample campaign generated for promoting AD BEAST itself.</p>
            <div style={{ background: '#000', padding: '20px', borderRadius: '4px', marginBottom: '20px' }}>
              <h3>Reddit Post</h3>
              <p><strong>Title:</strong> I got tired of 3-hour ad writing sessions that went nowhere, so I built AD BEAST</p>
              <p>Real talk from a fellow builder... [content]</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <a href="#" style={{ color: '#ff4000', textDecoration: 'none' }}>📄 View Full Report</a>
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