export default function Home() {
  return (
    <>
      <header>
        <div className="logo">AD<b>BEAST</b></div>
        <div className="hdr-mid">
          <div className="tier-pill tp-free" id="tier-display">FREE TIER</div>
        </div>
        <div className="hdr-right">
          <div className="live">CLAUDE ONLINE</div>
          <button className="hbtn">⚡ Upgrade</button>
          <button className="hbtn" id="admin-hdr-btn">ADMIN</button>
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
              <button className="scout-btn" id="scout-btn">🔍 SCOUT REDDIT</button>
            </div>
            <div className="scout-count" id="scout-count"><span>Scout found <b id="scout-found-n">0</b> subreddits — <b id="scout-approved-n">0</b> selected as targets</span></div>
          </div>
        </div>

        <div className="sec">SELECT FIRE ZONES</div>
        <div className="plat-grid" id="plat-grid"></div>

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
    </>
  );
}
