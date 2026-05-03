"use client";

import { useState } from "react";

export default function Landing() {
  const [showCampaign, setShowCampaign] = useState(false);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#000 !important', minHeight: '100vh', lineHeight: '1.6' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes monsterPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .monster { animation: monsterPulse 2s infinite, float 3s ease-in-out infinite; }
        .hero-bg { background: radial-gradient(ellipse at center, rgba(255,64,0,0.1) 0%, transparent 70%); animation: pulse 4s ease-in-out infinite; }
        @media (max-width: 768px) {
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 20px !important; }
        }
      ` }} />
      <nav className="nav" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="monster" style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 20px rgba(255,64,0,0.8))' }}>
          🐺
        </div>
      </nav>

      <section className="hero-bg" style={{ textAlign: 'center', padding: '20px 20px 60px', position: 'relative', animation: 'fadeIn 1s ease-in 0.2s both' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: '900', marginBottom: '20px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'fadeInUp 1s ease-in 0.7s both' }}>
          AD BEAST — Autonomous Ad Engine
        </h1>
        <p className="hero-subtitle" style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6', animation: 'fadeInUp 1s ease-in 0.9s both' }}>
          Marketing shouldn&apos;t feel like pulling teeth. From Grandma scaling her famous chocolate chip cookie business, to OnlyFans creators growing their fanbase tastefully, indie hackers shipping tools, fitness coaches, Etsy artists, consultants, and local businesses — if you make something worth buying or following, AD BEAST makes sure the right people see it.
        </p>
        <p style={{ fontSize: '1.2rem', color: '#ff4000', marginBottom: '30px', animation: 'fadeInUp 1s ease-in 1s both' }}>
          <strong>One description → Full multi-platform campaigns in seconds.</strong> Smart subreddit scouting, platform-optimized copy, one-click or auto-post.
        </p>
        <div className="hero-buttons" style={{ animation: 'fadeInUp 1s ease-in 1.1s both' }}>
          <div style={{ marginBottom: '10px' }}>
            <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', marginRight: '10px', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)' }} onClick={() => window.location.href = '/'} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
              Try AD BEAST
            </button>
            <small style={{ color: '#888', display: 'block', marginTop: '5px' }}>Free Tier Available • Powered by Claude • Pro $19/mo</small>
          </div>
          <div>
            <button style={{ background: 'none', border: '2px solid #ff4000', color: '#ff4000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowCampaign(true)} onMouseOver={(e) => { (e.target as HTMLElement).style.background = '#ff4000'; (e.target as HTMLElement).style.color = '#000'; }} onMouseOut={(e) => { (e.target as HTMLElement).style.background = 'none'; (e.target as HTMLElement).style.color = '#ff4000'; }}>
              Demo Campaign
            </button>
            <small style={{ color: '#888', display: 'block', marginTop: '5px' }}>See sample ads for your product</small>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#000', animation: 'fadeIn 1s ease-in 0.3s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UNLEASH THE BEAST (The Friendly Way)</h2>
          <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            Stop wasting Sundays writing 17 versions of the same ad.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#fff', maxWidth: '900px', margin: '0 auto 30px', lineHeight: '1.7' }}>
            <strong>AD BEAST</strong> handles the pain:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', color: '#fff', lineHeight: '2', textAlign: 'left', maxWidth: '800px', margin: '0 auto 30px' }}>
            <li>• Intelligent Scout finds communities that allow promotion + scores fit + suggests best days</li>
            <li>• Generates sharp, tailored copy using proven frameworks (PAS, AIDA, HSO, BAB)</li>
            <li>• One-click posting or fully autonomous mode across Reddit, X/Twitter, Threads, Facebook, Instagram, LinkedIn, TikTok, and Cold Email</li>
          </ul>
          <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            <strong>Built for real humans</strong> — cookie grandmas, content creators, side hustlers, SaaS founders, and everyone in between.
          </p>
          <blockquote style={{ fontSize: '1rem', color: '#ff4000', fontStyle: 'italic', maxWidth: '900px', margin: '0 auto' }}>
            My honest take as Grok: This is the practical marketing tool most builders actually need. It removes the soul-crushing manual work so you can spend more time creating and less time copy-pasting.
          </blockquote>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #111 0%, #222 100%)', borderTop: '2px solid #ff4000', borderBottom: '2px solid #ff4000', animation: 'fadeIn 1s ease-in 0.4s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>💚 Doing Good</h2>
          <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            10% of all revenue goes directly to <strong>GiveDirectly.org</strong> — cash transfers to people in extreme poverty (GiveWell #1 rated charity).
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#000', animation: 'fadeIn 1s ease-in 0.5s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Quick Start</h2>
          <div style={{ marginBottom: '30px' }}>
            <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)', marginRight: '10px' }} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}}>
              Load Promote AD BEAST Demo Campaign
            </button>
            <button style={{ background: 'none', border: '2px solid #ff4000', color: '#ff4000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { (e.target as HTMLElement).style.background = '#ff4000'; (e.target as HTMLElement).style.color = '#000'; }} onMouseOut={(e) => { (e.target as HTMLElement).style.background = 'none'; (e.target as HTMLElement).style.color = '#ff4000'; }}>
              Create Your First Campaign
            </button>
          </div>
          <p style={{ fontSize: '1rem', color: '#fff' }}>
            <strong>Current Free Campaigns:</strong> 0 / 2
          </p>
          <p style={{ fontSize: '1rem', color: '#fff', marginTop: '20px' }}>
            <strong>Supported Platforms:</strong> 🔴 Reddit • 𝕏 Twitter/X • 🧵 Threads • 📘 Facebook • 📸 Instagram • 💼 LinkedIn • 🎵 TikTok • 📧 Cold Email
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#000', borderTop: '2px solid #ff4000', animation: 'fadeIn 1s ease-in 0.2s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pricing</h2>
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ border: '2px solid #333', borderRadius: '16px', padding: '50px 30px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', backdropFilter: 'blur(10px)', animation: 'fadeInUp 1s ease-in 0.4s both' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#fff' }}>Free Tier</h3>
              <p style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '30px', color: '#fff' }}>$0</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ccc', fontSize: '1rem', lineHeight: '2' }}>
                <li>• Login required</li>
                <li>• 2 campaigns/month (great for testing)</li>
                <li>• Powered by Claude</li>
              </ul>
              <button style={{ background: 'linear-gradient(45deg, #333, #555)', border: 'none', color: '#fff', padding: '15px 30px', borderRadius: '8px', marginTop: '30px', width: '100%', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
                Get Started Free
              </button>
            </div>
            <div style={{ border: '2px solid #ff4000', borderRadius: '16px', padding: '50px 30px', background: 'linear-gradient(135deg, rgba(255,64,0,0.1) 0%, rgba(255,64,0,0.05) 100%)', position: 'relative', animation: 'fadeInUp 1s ease-in 0.6s both' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#ff4000', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#fff' }}>Pro — $19/month</h3>
              <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '30px' }}>Unlimited campaigns, advanced Scout, auto-post, priority features</p>
              <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '15px 30px', borderRadius: '8px', marginTop: '30px', width: '100%', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)' }} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
                [Big Button: Upgrade to Pro &amp; Go Unlimited]
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #111 0%, #222 100%)', animation: 'fadeIn 1s ease-in 0.6s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Social Proof</h2>
          <blockquote style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', fontStyle: 'italic' }}>
            &ldquo;AD BEAST is the kind of practical, no-BS tool that removes real friction for creators and builders. Marketing is necessary but painful — this makes it fast, effective, and even a little fun.&rdquo;
          </blockquote>
          <p style={{ fontSize: '1rem', color: '#ff4000', marginTop: '20px' }}>— <strong>Grok</strong>, built by xAI</p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#000', animation: 'fadeIn 1s ease-in 0.7s both' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why This Matters (Grok&apos;s Opinion)</h2>
          <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7' }}>
            Marketing shouldn&apos;t be a barrier between great products and the people who want them. AD BEAST removes that barrier in a fun, effective, and ethical way. From cookies to content, the Beast helps real humans succeed without burning out.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '900px', margin: '20px auto 40px', lineHeight: '1.7' }}>
            <strong>Ready to grow?</strong>
          </p>
          <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '18px 36px', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)' }} onClick={() => window.location.href = '/'} onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'} onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}>
            UNLEASH THE BEAST 🔥
          </button>
          <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '20px' }}>
            <em>From homemade cookies to premium content — we help the right audience discover you.</em>
          </p>
        </div>
      </section>

      <footer style={{ padding: '40px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #111 0%, #000 100%)', color: '#ccc', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/privacy" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#fff'}>Privacy</a>
            <a href="/terms" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#fff'}>Terms</a>
            <a href="/support" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ff4000'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#fff'}>Support</a>
          </div>
        </div>
      </footer>

      {/* Demo Campaign Modal */}
      {showCampaign && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '700px', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 0 50px rgba(255,64,0,0.3)' }}>
            <h2 style={{ marginBottom: '20px', color: '#ff4000' }}>🔥 Campaign Report Generated</h2>
            <p style={{ color: '#fff', marginBottom: '30px' }}>The Beast has analyzed your product and generated optimized ads for multiple platforms.</p>
            <div style={{ background: '#000', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #ff4000' }}>
              <h3 style={{ color: '#ff4000', marginBottom: '15px' }}>📍 Reddit — r/indiehackers</h3>
              <p style={{ fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>Title: I got tired of 3-hour ad writing sessions that went nowhere, so I built AD BEAST</p>
              <p style={{ color: '#fff', lineHeight: '1.6' }}>
                Real talk from a fellow builder: I could ship products but marketing was painful. Different tone for every platform, subreddit rules I kept violating, and zero consistency.<br />
                So I built AD BEAST — an autonomous ad engine. Paste your product → Scout finds the best subreddits (with promo rules checked) → Generates tailored copy across Reddit, X threads, LinkedIn, cold emails, TikTok scripts — all at once. One-click to post.<br />
                Free tier gives you real campaigns to test. Pro is $19/mo.<br />
                Still early. Brutal feedback welcome — what&apos;s missing?<br />
                Link: https://add-beast.vercel.app/
              </p>
            </div>
            <div style={{ background: '#000', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #4a9eff' }}>
              <h3 style={{ color: '#4a9eff', marginBottom: '15px' }}>🧵 Twitter Thread</h3>
              <ol style={{ color: '#fff', lineHeight: '1.6' }}>
                <li>1/ Most indie makers build in public. Very few market in public consistently. I fixed that problem in ~30 seconds. Thread 🧵</li>
                <li>2/ Writing ads used to kill my momentum. Different formats, tones, and rules for every platform. I&apos;d do one or two and call it a day.</li>
                <li>3/ AD BEAST changes the game: One product description → Smart scouting of subreddits → Perfectly tailored copy for every major platform simultaneously.</li>
                <li>4/ One-click posting. Or go autonomous. Free tier available. Pro $19/mo. 10% of revenue goes to GiveDirectly (extreme poverty relief). Try it → https://add-beast.vercel.app/</li>
              </ol>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ color: '#ff4000', fontWeight: 'bold' }}>📄 Download Full Report (Demo)</span>
            </div>
            <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setShowCampaign(false)}>
              Close
            </button>
          </div>
        </div>
      )}


    </div>
  );
}