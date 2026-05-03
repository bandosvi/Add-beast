"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showCampaign, setShowCampaign] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
        // Not logged in
      }
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    setUser(null);
    window.location.reload();
  };

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
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #000 0%, #111 100%)', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: animations + `
        @keyframes monsterPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .monster { animation: monsterPulse 2s infinite, float 3s ease-in-out infinite; }
        .hero-bg { background: radial-gradient(ellipse at center, rgba(255,64,0,0.1) 0%, transparent 70%); animation: pulse 4s ease-in-out infinite; }
        @media (max-width: 768px) {
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 30px !important; }
          .nav-buttons { flex-direction: column !important; gap: 10px !important; }
          .feature-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; gap: 20px !important; max-width: 100% !important; }
          .hero-title { font-size: 3rem !important; }
          .hero-subtitle { font-size: 1rem !important; }
          .section-padding { padding: 40px 15px !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 0.9rem !important; }
          .nav { padding: 10px 15px !important; }
          .monster { font-size: 2rem !important; }
        }
      ` }} />
      <nav className="nav" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="monster" style={{ fontSize: '3rem', cursor: 'pointer' }}>
          🦑
        </div>
        <div className="nav-buttons" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button style={{ background: 'none', border: '1px solid #333', color: '#fff', padding: '8px 16px', borderRadius: '4px', marginRight: '10px', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowLogin(true)} onMouseOver={(e) => (e.target as HTMLElement).style.borderColor = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.borderColor = '#333'}>
                Login
              </button>
              <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '8px 16px', borderRadius: '4px', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowSignup(true)} onMouseOver={(e) => (e.target as HTMLElement).style.background = '#cc3300'} onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ff4000'}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg" style={{ textAlign: 'center', padding: '20px 20px 60px', position: 'relative', animation: 'fadeIn 1s ease-in 0.2s both' }}>
        <p style={{ fontFamily: 'var(--font-dancing-script)', fontSize: '1.5rem', color: '#ff4000', marginBottom: '10px', animation: 'fadeInUp 1s ease-in 0.5s both' }}>
          Leon-Link presents
        </p>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: '900', marginBottom: '20px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'fadeInUp 1s ease-in 0.7s both' }}>
          AD BEAST
        </h1>
        <p className="hero-subtitle" style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.6', animation: 'fadeInUp 1s ease-in 0.9s both' }}>
          Autonomous Ad Engine — Generate platform-optimized ads using proven frameworks. Scout the best subreddits intelligently. Post automatically or one-click.
        </p>
        <div className="hero-buttons" style={{ animation: 'fadeInUp 1s ease-in 1.1s both' }}>
          <div style={{ marginBottom: '10px' }}>
            <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', marginRight: '10px', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)' }} onClick={() => alert('App access coming soon!')} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
              Try AD BEAST
            </button>
            <small style={{ color: '#888', display: 'block', marginTop: '5px' }}>Access the full ad creation tool</small>
          </div>
          <div>
            <button style={{ background: 'none', border: '2px solid #ff4000', color: '#ff4000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onClick={async () => {
              setIsGenerating(true);
              setTimeout(() => {
                setIsGenerating(false);
                setShowCampaign(true);
              }, 3000);
            }} onMouseOver={(e) => { (e.target as HTMLElement).style.background = '#ff4000'; (e.target as HTMLElement).style.color = '#000'; }} onMouseOut={(e) => { (e.target as HTMLElement).style.background = 'none'; (e.target as HTMLElement).style.color = '#ff4000'; }}>
              Generate Demo Ads
            </button>
            <small style={{ color: '#888', display: 'block', marginTop: '5px' }}>See sample ads for your product</small>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section style={{ padding: '60px 20px', background: '#000', animation: 'fadeIn 1s ease-in 0.3s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Who is this for?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,64,0,0.2)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Freelancers & Solo Entrepreneurs</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                You're great at your craft but marketing eats up your time. AD BEAST handles the ad creation so you can focus on what you love.
              </p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,64,0,0.2)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Social Media Advertisers</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                Tired of writing the same ad in 8 different ways? Get perfectly optimized copy for every platform with one click.
              </p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,64,0,0.2)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Reddit Power Users</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                Stop wasting hours finding subreddits and getting banned. Our AI scouts safe communities and generates subreddit-specific ads that convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #111 0%, #222 100%)', borderTop: '2px solid #ff4000', borderBottom: '2px solid #ff4000', animation: 'fadeIn 1s ease-in 0.4s both' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Powerful Features</h2>
          <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '40px 20px', borderRadius: '12px', border: '1px solid rgba(255,64,0,0.3)', transition: 'all 0.3s', cursor: 'pointer', animation: 'fadeInUp 1s ease-in 0.6s both' }} onClick={() => setExpandedFeature(expandedFeature === 'scout' ? null : 'scout')} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-5px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🪖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: expandedFeature === 'scout' ? '#ff4000' : '#fff' }}>Smart Subreddit Scouting</h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>Like a ninja finding the best hideouts, we scout Reddit for promo-friendly subs. Avoids bans like a pro — no more getting shadowbanned for bad vibes!</p>
              <p style={{ color: '#ff4000', fontSize: '0.9rem', marginTop: '10px', fontWeight: 'bold' }}>Click to expand</p>
              {expandedFeature === 'scout' && (
                <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,64,0,0.1)', borderRadius: '8px', border: '1px solid #ff4000' }}>
                  <p style={{ color: '#fff', fontSize: '1rem' }}>
                    Technical: Analyzes subreddit cultures using AI to assess self-promotion policies, fit scores, and optimal posting times. Increases success by 300%, avoids bans, targets ideal audiences, saves hours of research.
                  </p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '40px 20px', borderRadius: '12px', border: '1px solid rgba(255,64,0,0.3)', transition: 'all 0.3s', cursor: 'pointer', animation: 'fadeInUp 1s ease-in 0.8s both' }} onClick={() => setExpandedFeature(expandedFeature === 'optimize' ? null : 'optimize')} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-5px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: expandedFeature === 'optimize' ? '#ff4000' : '#fff' }}>Platform Optimization</h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>Turns your ad into a chameleon — blends perfectly on Twitter threads, LinkedIn posts, or Reddit. Speaks the local lingo like a native!</p>
              <p style={{ color: '#ff4000', fontSize: '0.9rem', marginTop: '10px', fontWeight: 'bold' }}>Click to expand</p>
              {expandedFeature === 'optimize' && (
                <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,64,0,0.1)', borderRadius: '8px', border: '1px solid #ff4000' }}>
                  <p style={{ color: '#fff', fontSize: '1rem' }}>
                    Technical: Tailored copy using PAS (Problem-Agitate-Solve), AIDA (Attention-Interest-Desire-Action), HSO (Hook-Story-Offer), and BAB (Before-After-Bridge) frameworks for each platform. Benefits: 5x higher engagement, platform-specific tone, proven copywriting frameworks, automated optimization.
                  </p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '40px 20px', borderRadius: '12px', border: '1px solid rgba(255,64,0,0.3)', transition: 'all 0.3s', cursor: 'pointer', animation: 'fadeInUp 1s ease-in 1s both' }} onClick={() => setExpandedFeature(expandedFeature === 'auto' ? null : 'auto')} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-5px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: expandedFeature === 'auto' ? '#ff4000' : '#fff' }}>Auto-Posting</h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>Hit send once, and watch your ads deploy like a swarm of bees to every platform. Sleep soundly while the beast does the heavy lifting!</p>
              <p style={{ color: '#ff4000', fontSize: '0.9rem', marginTop: '10px', fontWeight: 'bold' }}>Click to expand</p>
              {expandedFeature === 'auto' && (
                <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,64,0,0.1)', borderRadius: '8px', border: '1px solid #ff4000' }}>
                  <p style={{ color: '#fff', fontSize: '1rem' }}>
                    Technical: One-click or fully autonomous posting via APIs to Reddit, Twitter, LinkedIn, Facebook, Instagram, TikTok, and email. Benefits: Saves 10+ hours/week, 24/7 posting, API integrations, zero manual work.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding" style={{ padding: '80px 20px', background: '#000', borderTop: '2px solid #ff4000', animation: 'fadeIn 1s ease-in 0.2s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Choose Your Plan</h2>
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ border: '2px solid #333', borderRadius: '16px', padding: '50px 30px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', backdropFilter: 'blur(10px)', animation: 'fadeInUp 1s ease-in 0.4s both' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#fff' }}>Free</h3>
              <p style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '30px', color: '#fff' }}>$0</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc', fontSize: '1rem', lineHeight: '2' }}>
                <li>✓ 2 campaigns/month</li>
                <li>✓ Basic platforms</li>
                <li>✓ Copy to clipboard</li>
                <li>✓ Reddit Scout (3 subs)</li>
              </ul>
              <button style={{ background: 'linear-gradient(45deg, #333, #555)', border: 'none', color: '#fff', padding: '15px 30px', borderRadius: '8px', marginTop: '30px', width: '100%', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
                Get Started Free
              </button>
            </div>
            <div style={{ border: '2px solid #ff4000', borderRadius: '16px', padding: '50px 30px', background: 'linear-gradient(135deg, rgba(255,64,0,0.1) 0%, rgba(255,64,0,0.05) 100%)', position: 'relative', animation: 'fadeInUp 1s ease-in 0.6s both' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#ff4000', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#fff' }}>Pro Monthly</h3>
              <p style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>$19<span style={{ fontSize: '1.5rem', color: '#ccc' }}>/mo</span></p>
              <p style={{ fontSize: '1rem', color: '#888', marginBottom: '20px' }}>or $180/year (save $48)</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc', fontSize: '1rem', lineHeight: '2' }}>
                <li>✓ Unlimited campaigns</li>
                <li>✓ All 8 platforms</li>
                <li>✓ One-click posting</li>
                <li>✓ Advanced Scout Mode</li>
                <li>✓ Priority support</li>
              </ul>
              <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '15px 30px', borderRadius: '8px', marginTop: '30px', width: '100%', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)' }} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
                Upgrade to Pro
              </button>
            </div>
            <div style={{ border: '2px solid #4a9eff', borderRadius: '16px', padding: '50px 30px', background: 'linear-gradient(135deg, rgba(74,158,255,0.1) 0%, rgba(74,158,255,0.05) 100%)', animation: 'fadeInUp 1s ease-in 0.8s both' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#fff' }}>Pro Yearly</h3>
              <p style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>$180<span style={{ fontSize: '1.5rem', color: '#ccc' }}>/year</span></p>
              <p style={{ fontSize: '1rem', color: '#4a9eff', marginBottom: '20px', fontWeight: 'bold' }}>Save $48 vs monthly!</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc', fontSize: '1rem', lineHeight: '2' }}>
                <li>✓ Everything in Pro Monthly</li>
                <li>✓ 2 months free annually</li>
                <li>✓ Priority support</li>
              </ul>
              <button style={{ background: 'linear-gradient(45deg, #4a9eff, #6bb6ff)', border: 'none', color: '#000', padding: '15px 30px', borderRadius: '8px', marginTop: '30px', width: '100%', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(74,158,255,0.3)' }} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
                Get Yearly Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #111 0%, #000 100%)', color: '#ccc', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Built with ❤️ for indie hackers, solopreneurs & side hustlers.</p>
          <p style={{ color: '#ff4000', fontSize: '1rem' }}>10% of revenue goes to GiveDirectly.org — direct cash to people in extreme poverty.</p>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#ccc'}>Privacy</a>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#ccc'}>Terms</a>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#ccc'}>Support</a>
          </div>
        </div>
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
              const confirmPassword = formData.get('confirmPassword') as string;
              if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
              }
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
              <input name="password" type="password" placeholder="Password" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', background: '#222', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} required />
              <button type="submit" style={{ width: '100%', padding: '10px', background: '#ff4000', border: 'none', borderRadius: '4px', color: '#000', cursor: 'pointer' }}>Sign Up</button>
            </form>
            <button style={{ background: 'none', border: 'none', color: '#fff', marginTop: '10px', cursor: 'pointer' }} onClick={() => setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Generating Modal */}
      {isGenerating && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '60px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 0 50px rgba(255,64,0,0.5)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px', animation: 'spin 2s linear infinite' }}>🦑</div>
            <h2 style={{ marginBottom: '20px', color: '#ff4000' }}>Unleashing the Beast...</h2>
            <p style={{ color: '#ccc' }}>Generating your multi-platform ad campaign...</p>
            <div style={{ marginTop: '20px', width: '200px', height: '4px', background: '#333', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #ff4000, #ff7733)', animation: 'pulse 1.5s ease-in-out infinite' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Campaign Report Modal */}
      {showCampaign && !isGenerating && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '700px', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 0 50px rgba(255,64,0,0.3)' }}>
            <h2 style={{ marginBottom: '20px', color: '#ff4000' }}>🔥 Campaign Report Generated</h2>
            <p style={{ color: '#ccc', marginBottom: '30px' }}>The Beast has analyzed your product and generated optimized ads for multiple platforms.</p>
            <div style={{ background: '#000', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #ff4000' }}>
              <h3 style={{ color: '#ff4000', marginBottom: '15px' }}>📍 Reddit — r/indiehackers</h3>
              <p style={{ fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>Title: I got tired of 3-hour ad writing sessions that went nowhere, so I built AD BEAST</p>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                Real talk from a fellow builder: I could ship products but marketing was painful. Different tone for every platform, subreddit rules I kept violating, and zero consistency.<br />
                So I built AD BEAST — an autonomous ad engine. Paste your product → Scout finds the best subreddits (with promo rules checked) → Generates tailored copy across Reddit, X threads, LinkedIn, cold emails, TikTok scripts — all at once. One-click to post.<br />
                Free tier gives you real campaigns to test. Pro is $19/mo.<br />
                Still early. Brutal feedback welcome — what's missing?<br />
                Link: https://add-beast.vercel.app/
              </p>
            </div>
            <div style={{ background: '#000', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #4a9eff' }}>
              <h3 style={{ color: '#4a9eff', marginBottom: '15px' }}>🧵 Twitter Thread</h3>
              <ol style={{ color: '#ccc', lineHeight: '1.6' }}>
                <li>1/ Most indie makers build in public. Very few market in public consistently. I fixed that problem in ~30 seconds. Thread 🧵</li>
                <li>2/ Writing ads used to kill my momentum. Different formats, tones, and rules for every platform. I'd do one or two and call it a day.</li>
                <li>3/ AD BEAST changes the game: One product description → Smart scouting of subreddits → Perfectly tailored copy for every major platform simultaneously.</li>
                <li>4/ One-click posting. Or go autonomous. Free tier available. Pro $19/mo. 10% of revenue goes to GiveDirectly (extreme poverty relief). Try it → https://add-beast.vercel.app/</li>
              </ol>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <a href="#" style={{ color: '#ff4000', textDecoration: 'none', fontWeight: 'bold' }}>📄 View Full Report</a>
            </div>
            <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setShowCampaign(false)}>
              Close Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}