"use client";

import { useState } from "react";

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showScout, setShowScout] = useState(false);

  const openPricing = () => setShowPricing(true);
  const closePricing = () => setShowPricing(false);

  const openAdmin = () => setShowAdmin(true);
  const closeAdmin = () => setShowAdmin(false);

  const openScout = () => setShowScout(true);
  const closeScout = () => setShowScout(false);

  return (
    <>
      <header>
        <div className="logo">AD<b>BEAST</b></div>
        <div className="hdr-mid">
          <div className="tier-pill tp-free" id="tier-display">FREE TIER</div>
        </div>
        <div className="hdr-right">
          <div className="live">CLAUDE ONLINE</div>
          <button className="hbtn" onClick={openPricing}>⚡ Upgrade</button>
          <button className="hbtn" id="admin-hdr-btn" onClick={openAdmin}>ADMIN</button>
        </div>
      </header>

      <div className="hero">
        <div className="eyebrow">// AI ADVERTISING ENGINE — AUTONOMOUS</div>
        <h1><span>UNLEASH</span><span className="blaze">THE BEAST</span></h1>
        <p>Generate platform-optimized ads using proven frameworks. Scout the best subreddits intelligently. Post automatically or one-click.</p>
      </div>

      <div className="charity">
        <div className="c-strip">💚&nbsp;&nbsp;10% of revenue goes to <b>GiveDirectly.org</b> — direct cash to people in extreme poverty. Rated #1 by GiveWell.</div>
      </div>

      <div className="usage-wrap" id="usage-wrap">
        <div className="usage-inner">
          <span className="ul">Monthly Campaigns</span>
          <div className="ut"><div className="uf" id="u-fill"></div></div>
          <span className="uc" id="u-count">0 / 2</span>
          <button className="uu">UPGRADE</button>
        </div>
      </div>

      <div className="setup">
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <div className="sec">TARGET SETUP</div>

        <div className="sp-bar">
          <div className="sp-txt">Want to promote <b>AD BEAST</b> itself? Load the pre-built campaign and fire it.</div>
          <button className="sp-btn">🔥 PROMOTE AD BEAST</button>
        </div>

        <div className="g2">
          <div className="f"><label>Product / Service Name</label><input type="text" id="p-name" placeholder="e.g. CareerCraft AI" /></div>
          <div className="f"><label>Price / Offer</label><input type="text" id="p-price" placeholder="e.g. $19/mo · free to try" /></div>
          <div className="f s2"><label>What It Does — Be Specific</label><textarea id="p-desc" placeholder="e.g. Paste a job description + your background, get a tailored cover letter in 10 seconds using AI."></textarea></div>
          <div className="f"><label>Who It&apos;s For</label><input type="text" id="p-audience" placeholder="e.g. job seekers, side hustlers, freelancers" /></div>
          <div className="f"><label>Biggest Pain Point Solved</label><input type="text" id="p-pain" placeholder="e.g. getting ghosted after applying" /></div>
          <div className="f s2"><label>Social Proof / Results (Optional)</label><input type="text" id="p-proof" placeholder="e.g. 3x more callbacks · 500+ users · saves 2 hrs" /></div>
          <div className="f"><label>Website / Landing Page URL</label><input type="text" id="p-url" placeholder="e.g. https://yourproduct.com" /></div>
          <div className="f">
            <label>Target Subreddits — or use Scout ↓</label>
            <div className="scout-row">
              <div className="f"><input type="text" id="p-subs" placeholder="sidehustle, entrepreneur, smallbusiness…" /></div>
              <button className="scout-btn" id="scout-btn" onClick={openScout}>🔍 SCOUT REDDIT</button>
            </div>
            <div className="scout-count" id="scout-count"><span>Scout found <b id="scout-found-n">0</b> subreddits — <b id="scout-approved-n">0</b> selected as targets</span></div>
          </div>
        </div>

        <div className="sec">SELECT FIRE ZONES</div>
        <div className="plat-grid" id="plat-grid">
          <button className="pt on">
            🔴 Reddit
            <span className="pt-mode pm-copy">📋 COPY</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt on">
            𝕏 Twitter/X
            <span className="pt-mode pm-click">⚡ 1-CLICK</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt on">
            🧵 X Thread
            <span className="pt-mode pm-click">⚡ 1-CLICK</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt locked">
            📘 Facebook
            <span className="pt-mode pm-click">⚡ 1-CLICK</span>
          </button>
          <button className="pt locked">
            📸 Instagram
            <span className="pt-mode pm-copy">📋 COPY</span>
          </button>
          <button className="pt locked">
            💼 LinkedIn
            <span className="pt-mode pm-click">⚡ 1-CLICK</span>
          </button>
          <button className="pt locked">
            🎵 TikTok Script
            <span className="pt-mode pm-copy">📋 COPY</span>
          </button>
          <button className="pt on">
            📧 Cold Email
            <span className="pt-mode pm-copy">📋 COPY</span>
            <span className="ck">✔</span>
          </button>
        </div>

        <div className="sec">PULL THE TRIGGER</div>
        <div className="unleash-wrap">
          <button className="u-btn" id="ub">🔥 UNLEASH THE BEAST</button>
        </div>
        <div className="gate" id="gate">
          <div className="gate-txt">⚡ You&apos;ve hit your free campaign limit this month.<br />Upgrade to Pro for unlimited campaigns + Scout Mode.</div>
          <button className="gate-btn">UPGRADE — $19/mo</button>
        </div>
        <div className="prog" id="prog"><div className="prog-log" id="prog-log"></div></div>
      </div>

      <div className="output" id="output">
        <div className="o-head">
          <div className="o-title">CAMPAIGN <b>LIVE</b></div>
          <button className="refire">↻ RE-FIRE</button>
        </div>
        <div className="fw-row">
          <div className="fw-chip">PAS = Problem→Agitate→Solve</div>
          <div className="fw-chip">AIDA = Attention→Interest→Desire→Action</div>
          <div className="fw-chip">HSO = Hook→Story→Offer</div>
          <div className="fw-chip">BAB = Before→After→Bridge</div>
        </div>
        <div className="mode-leg">
          <div className="ml"><div className="mld mld-a"></div>AUTO-POST</div>
          <div className="ml"><div className="mld mld-c"></div>ONE-CLICK</div>
          <div className="ml"><div className="mld mld-m"></div>COPY</div>
        </div>
        <div className="cards" id="cards"></div>
      </div>

      <div className="toast" id="toast">✓ COPIED</div>

      {/* PRICING MODAL */}
      <div className={`overlay ${showPricing ? 'on' : ''}`}>
        <div className="modal" style={{maxWidth: '540px'}}>
          <div className="mh">
            <div className="mtitle">CHOOSE YOUR TIER</div>
            <div className="msub">All plans use Claude AI. Higher tiers unlock Scout Mode targeting, one-click posting, and full autonomy.</div>
            <button className="mc" onClick={closePricing}>✕</button>
          </div>
          <div className="mb">
            <div className="price-grid">
              <div className="pc">
                <div className="pc-name">Free</div>
                <div className="pc-price">$0</div>
                <div className="pc-per">forever</div>
                <ul>
                  <li className="y">3 platforms</li>
                  <li className="y">2 campaigns/month</li>
                  <li className="y">Copy to clipboard</li>
                  <li className="y">Reddit Scout (3 subs)</li>
                  <li>One-click posting</li>
                  <li>Unlimited campaigns</li>
                </ul>
                <button className="pcbtn btn-free">CURRENT PLAN</button>
              </div>
              <div className="pc star">
                <div className="pc-badge">MOST POPULAR</div>
                <div className="pc-name">Pro</div>
                <div className="pc-price">$19</div>
                <div className="pc-per">per month</div>
                <ul>
                  <li className="y">All 8 platforms</li>
                  <li className="y">Unlimited campaigns</li>
                  <li className="y">⚡ One-click posting</li>
                  <li className="y">Scout Mode — 10 subs</li>
                  <li className="y">Per-sub tailored posts</li>
                  <li>🤖 API auto-posting</li>
                </ul>
                <button className="pcbtn btn-pro">GET PRO — $19/mo</button>
              </div>
              <div className="pc" style={{gridColumn: '1/-1'}}>
                <div className="pc-name" style={{fontSize: '1.1rem'}}>🔥 Beast Mode</div>
                <div className="pc-price" style={{fontSize: '2.2rem'}}>$49</div>
                <div className="pc-per">per month</div>
                <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px'}}>
                  <li className="y">Everything in Pro</li>
                  <li className="y">🤖 Reddit API auto-post</li>
                  <li className="y">Scout Mode — unlimited subs</li>
                  <li className="y">Auto-target all approved subs</li>
                  <li className="y">Rule analysis per subreddit</li>
                  <li className="y">Priority AI generation</li>
                </ul>
                <button className="pcbtn btn-beast" style={{marginTop: '14px'}}>BEAST MODE — $49/mo</button>
              </div>
            </div>
            <div className="price-note">Cancel anytime · <b>10% of revenue → GiveDirectly.org</b><br />Admin or promo code? <a href="#" onClick={() => { closePricing(); openAdmin(); }}>Enter here →</a></div>
          </div>
        </div>
      </div>

      {/* ADMIN MODAL */}
      <div className={`overlay ${showAdmin ? 'on' : ''}`}>
        <div className="modal" style={{maxWidth: '460px'}}>
          <div className="mh">
            <div className="mtitle">ADMIN ACCESS</div>
            <div className="msub" id="admin-msub">Enter your admin password for free unlimited access.</div>
            <button className="mc" onClick={closeAdmin}>✕</button>
          </div>
          <div className="mb">
            <div id="admin-login-form">
              <div className="af"><label>Admin Password</label><input className="ainput" type="password" id="admin-pw" placeholder="Password" /></div>
              <button className="abtn">🔥 ACCESS ADMIN</button>
              <div className="aerr" id="admin-err">Wrong password. Try again.</div>
            </div>
            <div className="admin-dash" id="admin-dash">
              <div className="astats">
                <div className="ast"><div className="ast-n" id="stat-c">0</div><div className="ast-l">Campaigns Fired</div></div>
                <div className="ast"><div className="ast-n">∞</div><div className="ast-l">Your Limit</div></div>
                <div className="ast"><div className="ast-n">ADM</div><div className="ast-l">Tier Status</div></div>
              </div>
              <div className="asec">REDDIT API — Auto-Post</div>
              <div style={{fontFamily: 'IBM Plex Mono', fontSize: '.63rem', color: 'var(--dim)', lineHeight: '1.7'}}>
                Create a "script" app at <span style={{color: 'var(--fire)'}}>reddit.com/prefs/apps</span> then paste credentials below. Stored locally in your browser only.
              </div>
              <div className="api-label"><span className="cdot"></span>Reddit Client ID</div>
              <div className="api-row"><input id="ak-reddit-client" placeholder="Client ID" /><button className="api-save" id="save-reddit">SAVE</button></div>
              <div className="api-row" style={{margin: '4px 0'}}><input id="ak-reddit-secret" placeholder="Client Secret" type="password" /></div>
              <div className="api-row" style={{marginBottom: '4px'}}><input id="ak-reddit-user" placeholder="Reddit Username" /></div>
              <div className="api-row" style={{marginBottom: '14px'}}><input id="ak-reddit-pass" placeholder="Reddit Password" type="password" /></div>
              <div className="api-label"><span className="cdot"></span>Twitter/X Bearer Token</div>
              <div className="api-row" style={{marginBottom: '14px'}}><input id="ak-twitter" placeholder="Bearer Token (developer.twitter.com)" type="password" /><button className="api-save" id="save-twitter">SAVE</button></div>
              <div style={{fontFamily: 'IBM Plex Mono', fontSize: '.62rem', color: 'var(--dim)', background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '3px', padding: '10px', lineHeight: '1.7'}}>
                🤖 <span style={{color: 'var(--acid)'}}>Reddit auto-post</span> requires Script App credentials above.<br />
                ⚡ All other platforms use one-click intent URLs — no API key needed.
              </div>
              <button className="alogout">LOG OUT OF ADMIN</button>
            </div>
          </div>
        </div>
      </div>

      {/* SCOUT MODAL */}
      <div className={`overlay ${showScout ? 'on' : ''}`}>
        <div className="modal" style={{maxWidth: '680px'}}>
          <div className="mh">
            <div className="mtitle">🔍 REDDIT SCOUT</div>
            <div className="msub">Analyzing your product to find the best subreddits to target…</div>
            <button className="mc" onClick={closeScout}>✕</button>
          </div>
          <div className="mb">
            <div className="scout-loading" id="scout-loading">
              <div className="big-spin"></div>
              <p>
                <span className="phase" id="scout-phase">Analyzing product category…</span><br />
                Scanning subreddit cultures, rules, and self-promo policies<br />
                Scoring each sub for audience fit and posting risk
              </p>
            </div>
            <div className="scout-results" id="scout-results">
              <div className="scout-summary" id="scout-summary"></div>
              <div className="scout-select-row">
                <span className="scout-select-label">SELECT TARGETS</span>
                <div className="scout-sel-btns">
                  <button className="ss-btn">SELECT ALL</button>
                  <button className="ss-btn">CLEAR</button>
                  <button className="ss-btn">✓ SAFE ONLY</button>
                </div>
              </div>
              <div className="sub-cards" id="sub-cards"></div>
              <button className="scout-fire-btn" id="scout-fire-btn">🔥 FIRE AT SELECTED SUBREDDITS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
