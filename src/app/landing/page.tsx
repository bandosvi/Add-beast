"use client";

import { useState } from "react";

export default function Landing() {
  const [showCampaign, setShowCampaign] = useState(false);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#000', color: '#ffffff', minHeight: '100vh', lineHeight: '1.6' }}>
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 20px rgba(255,64,0,0.8))' }}>🐺</div>
      </nav>

      <section style={{ textAlign: 'center', padding: '20px 20px 60px', position: 'relative' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: '900', marginBottom: '20px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AD BEAST — Autonomous Ad Engine
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6' }}>
          Marketing shouldn&apos;t feel like pulling teeth. From Grandma scaling her famous chocolate chip cookie business, to OnlyFans creators growing their fanbase tastefully, indie hackers shipping tools, fitness coaches, Etsy artists, consultants, and local businesses — if you make something worth buying or following, AD BEAST makes sure the right people see it.
        </p>
        <p style={{ fontSize: '1.2rem', color: '#ff4000', marginBottom: '30px' }}>
          <strong>One description → Full multi-platform campaigns in seconds.</strong> Smart subreddit scouting, platform-optimized copy, one-click or auto-post.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', marginRight: '10px', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)' }} onClick={() => window.location.href = '/'}>
              Try AD BEAST
            </button>
            <small style={{ color: '#ffffff', display: 'block', marginTop: '5px' }}>Everything Free • Unlimited Campaigns • Powered by Gemini</small>
          </div>
          <div>
            <button style={{ background: 'none', border: '2px solid #ff4000', color: '#ff4000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => setShowCampaign(true)}>
              Demo Campaign
            </button>
            <small style={{ color: '#ffffff', display: 'block', marginTop: '5px' }}>See sample ads for your product</small>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UNLEASH THE BEAST (The Friendly Way)</h2>
          <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            Stop wasting Sundays writing 17 versions of the same ad.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '900px', margin: '0 auto 30px', lineHeight: '1.7' }}>
            <strong>AD BEAST</strong> handles the pain:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', color: '#ffffff', lineHeight: '2', textAlign: 'left', maxWidth: '800px', margin: '0 auto 30px' }}>
            <li>• Intelligent Scout finds communities that allow promotion + scores fit + suggests best days</li>
            <li>• Generates sharp, tailored copy using proven frameworks (PAS, AIDA, HSO, BAB)</li>
            <li>• One-click posting or fully autonomous mode across Reddit, X/Twitter, Threads, Facebook, Instagram, LinkedIn, TikTok, and Cold Email</li>
          </ul>
          <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            <strong>Built for real humans</strong> — cookie grandmas, content creators, side hustlers, SaaS founders, and everyone in between.
          </p>
          <blockquote style={{ fontSize: '1rem', color: '#ff4000', fontStyle: 'italic', maxWidth: '900px', margin: '0 auto' }}>
            My honest take as Grok: This is the practical marketing tool most builders actually need. It removes the soul-crushing manual work so you can spend more time creating and less time copy-pasting.
          </blockquote>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#111', borderTop: '2px solid #ff4000', borderBottom: '2px solid #ff4000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>💚 Doing Good</h2>
          <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            10% of all revenue goes directly to <strong>GiveDirectly.org</strong> — cash transfers to people in extreme poverty (GiveWell #1 rated charity).
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Quick Start</h2>
          <div style={{ marginBottom: '30px' }}>
            <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,64,0,0.3)', marginRight: '10px' }} onClick={() => alert('Demo campaign shown below!')}>
              Load Promote AD BEAST Demo Campaign
            </button>
            <button style={{ background: 'none', border: '2px solid #ff4000', color: '#ff4000', padding: '14px 28px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
              Create Your First Campaign
            </button>
          </div>
          <p style={{ fontSize: '1rem', color: '#ffffff' }}>
            <strong>Current Free Campaigns:</strong> 0 / 2
          </p>
          <p style={{ fontSize: '1rem', color: '#ffffff', marginTop: '20px' }}>
            <strong>Supported Platforms:</strong> 🔴 Reddit • 𝕏 Twitter/X • 🧵 Threads • 📘 Facebook • 📸 Instagram • 💼 LinkedIn • 🎵 TikTok • 📧 Cold Email
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#000', borderTop: '2px solid #ff4000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Everything is FREE!</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ border: '2px solid #ff4000', borderRadius: '16px', padding: '50px 30px', background: 'linear-gradient(135deg, rgba(255,64,0,0.1) 0%, rgba(255,64,0,0.05) 100%)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#ff4000', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>UNLIMITED & FREE</div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#ffffff' }}>AD BEAST</h3>
              <p style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '30px', color: '#ffffff' }}>FREE</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#ffffff', fontSize: '1rem', lineHeight: '2' }}>
                <li>• No login required</li>
                <li>• Unlimited campaigns</li>
                <li>• All platforms unlocked</li>
                <li>• Advanced Scout Mode</li>
                <li>• Auto-posting & one-click</li>
                <li>• Powered by Gemini</li>
              </ul>
              <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '15px 30px', borderRadius: '8px', marginTop: '30px', width: '100%', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
                Start Using AD BEAST
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Social Proof</h2>
          <blockquote style={{ fontSize: '1.2rem', color: '#ffffff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', fontStyle: 'italic' }}>
            &ldquo;AD BEAST is the kind of practical, no-BS tool that removes real friction for creators and builders. Marketing is necessary but painful — this makes it fast, effective, and even a little fun.&rdquo;
          </blockquote>
          <p style={{ fontSize: '1rem', color: '#ff4000', marginTop: '20px' }}>— <strong>Grok</strong>, built by xAI</p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', background: 'linear-gradient(45deg, #fff, #ff4000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why This Matters (Grok&apos;s Opinion)</h2>
          <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7' }}>
            Marketing shouldn&apos;t be a barrier between great products and the people who want them. AD BEAST removes that barrier in a fun, effective, and ethical way. From cookies to content, the Beast helps real humans succeed without burning out.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#ffffff', maxWidth: '900px', margin: '20px auto 40px', lineHeight: '1.7' }}>
            <strong>Ready to grow?</strong>
          </p>
          <button style={{ background: 'linear-gradient(45deg, #ff4000, #ff7733)', border: 'none', color: '#000', padding: '18px 36px', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
            UNLEASH THE BEAST 🔥
          </button>
          <p style={{ fontSize: '0.9rem', color: '#ffffff', marginTop: '20px' }}>
            <em>From homemade cookies to premium content — we help the right audience discover you.</em>
          </p>
        </div>
      </section>

      <footer style={{ padding: '40px 20px', textAlign: 'center', background: '#111' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/privacy" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy</a>
            <a href="/terms" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }}>Terms</a>
            <a href="/support" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }}>Support</a>
          </div>
        </div>
      </footer>

      {showCampaign && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '8px', maxWidth: '700px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '20px', color: '#ff4000' }}>🔥 Campaign Report Generated</h2>
            <p style={{ color: '#ffffff', marginBottom: '30px' }}>The Beast has analyzed your product and generated optimized ads for multiple platforms.</p>
            <button style={{ background: '#ff4000', border: 'none', color: '#000', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setShowCampaign(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}