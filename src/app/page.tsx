export default function Home() {
  return (
    <div style={{ fontFamily: 'Barlow, sans-serif', background: '#07070a', color: '#c4c4d4', minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>
          AD <span style={{ color: '#ff4000' }}>BEAST</span> — Autonomous Ad Engine
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#c4c4d4', maxWidth: '600px', margin: '0 auto' }}>
          Stop wasting hours writing ads. Start getting eyes on your product.
        </p>
        <p style={{ fontSize: '1rem', color: '#888', marginTop: '10px' }}>
          AI that turns one product description into a full multi-platform campaign — in seconds.
        </p>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', lineHeight: '1.8' }}>
          <li>• Smart subreddit scouting (checks promo rules + fit score + best day)</li>
          <li>• Platform-optimized copy using proven frameworks (PAS, AIDA, HSO, BAB)</li>
          <li>• One-click or auto-post to Reddit, X/Twitter, LinkedIn, Facebook, Instagram, TikTok & cold email</li>
          <li>• Powered by Claude</li>
        </ul>
        <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#888' }}>
          Free tier available • Pro: $19/mo (unlimited campaigns + advanced scouting)
        </p>
        <p style={{ marginTop: '20px', fontSize: '1rem', color: '#22c55e' }}>
          💚 10% of every revenue dollar goes to GiveDirectly.org — direct cash to people in extreme poverty (GiveWell #1 charity).
        </p>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          UNLEASH THE BEAST
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
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

      <section style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          🔥 Ready Campaigns
        </h2>
        <button style={{ background: '#ff4000', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', margin: '0 10px' }}>
          Load "Promote AD BEAST" Campaign
        </button>
        <button style={{ background: '#4a9eff', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', margin: '0 10px' }}>
          Create New Campaign
        </button>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          Pricing
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ background: '#0f0f13', padding: '20px', borderRadius: '8px', border: '1px solid #1c1c24', width: '200px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Free</h3>
            <p style={{ color: '#c4c4d4' }}>2 campaigns/month + basic platforms</p>
          </div>
          <div style={{ background: '#0f0f13', padding: '20px', borderRadius: '8px', border: '1px solid #f5c518', width: '200px' }}>
            <h3 style={{ color: '#f5c518', marginBottom: '10px' }}>Pro — $19/month</h3>
            <p style={{ color: '#c4c4d4' }}>Unlimited campaigns, full auto-post, advanced Scout Mode, priority support</p>
          </div>
        </div>
        <button style={{ background: '#ff4000', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '4px', fontSize: '1.2rem', cursor: 'pointer', marginTop: '20px' }}>
          Upgrade
        </button>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          Social Proof Section (add later)
        </h2>
        <blockquote style={{ color: '#c4c4d4', fontStyle: 'italic' }}>
          "Finally consistent marketing without the burnout" — Early User
        </blockquote>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
        <p>Built with ❤️ for indie hackers, solopreneurs & side hustlers.</p>
        <p>10% → GiveDirectly.org</p>
      </footer>
    </div>
  );
}