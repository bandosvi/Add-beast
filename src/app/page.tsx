"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showScout, setShowScout] = useState(false);
  const [campaignAds, setCampaignAds] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const productNameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const audienceRef = useRef<HTMLInputElement>(null);
  const painPointRef = useRef<HTMLInputElement>(null);
  const socialProofRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const subredditsRef = useRef<HTMLInputElement>(null);

  const openPricing = () => setShowPricing(true);
  const closePricing = () => setShowPricing(false);

  const openAdmin = () => setShowAdmin(true);
  const closeAdmin = () => setShowAdmin(false);

  const openScout = () => setShowScout(true);
  const closeScout = () => setShowScout(false);

  const handleUnleash = async () => {
    setIsGenerating(true);
    const productName = productNameRef.current?.value || '';
    const price = priceRef.current?.value || '';
    const description = descriptionRef.current?.value || '';
    const audience = audienceRef.current?.value || '';
    const painPoint = painPointRef.current?.value || '';
    const socialProof = socialProofRef.current?.value || '';
    const website = websiteRef.current?.value || '';
    const subreddits = subredditsRef.current?.value || '';

    const platforms = [
      { name: 'Reddit', mode: 'copy', selected: true },
      { name: 'Twitter/X', mode: 'click', selected: true },
      { name: 'X Thread', mode: 'click', selected: true },
      { name: 'Facebook', mode: 'click', selected: false },
      { name: 'Instagram', mode: 'copy', selected: false },
      { name: 'LinkedIn', mode: 'click', selected: false },
      { name: 'TikTok Script', mode: 'copy', selected: false },
      { name: 'Cold Email', mode: 'copy', selected: true },
    ].filter(p => p.selected);

    const frameworks = ['PAS = Problem→Agitate→Solve', 'AIDA = Attention→Interest→Desire→Action', 'HSO = Hook→Story→Offer', 'BAB = Before→After→Bridge'];

    try {
      const res = await fetch('/api/unleash-beast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
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
        }),
      });
      const data = await res.json();
      if (data.ads) {
        setCampaignAds(data.ads);
        // Scroll to output
        document.querySelector('.output')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Failed to unleash the beast');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePurchase = async (tier: string) => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Purchase failed');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Barlow',sans-serif;background:#07070a;color:#ffff00 !important;min-height:100vh;overflow-x:hidden}
        body::before{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,64,0,.011) 3px,rgba(255,64,0,.011) 4px);pointer-events:none;z-index:9999}

        @keyframes blink{0%,100%{opacity:1}50%{opacity:.1}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes popIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
        @keyframes pulseRed{0%,100%{box-shadow:0 0 0 0 rgba(255,64,0,.4)}50%{box-shadow:0 0 0 12px rgba(255,64,0,0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes scanline{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
        @keyframes monsterPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        header{height:56px;border-bottom:1px solid #1c1c24;padding:0 32px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:300;background:rgba(7,7,10,.97);backdrop-filter:blur(14px)}
        .monster { animation: monsterPulse 2s infinite, float 3s ease-in-out infinite; }
        .logo{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.45rem;letter-spacing:.1em;color:#ffffff}
        .logo b{color:#ff4000}
        .hdr-mid{display:flex;align-items:center;gap:8px}
        .tier-pill{font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;padding:4px 10px;border-radius:2px;border:1px solid;cursor:pointer;transition:all .15s}
        .tp-free{border-color:#242430;color:#ffffff}.tp-free:hover{border-color:#ff4000;color:#ffffff}
        .tp-pro{border-color:rgba(245,197,24,.4);color:#f5c518;background:rgba(245,197,24,.06)}
        .tp-beast{border-color:rgba(255,64,0,.45);color:#ff4000;background:rgba(255,64,0,.09)}
        .tp-admin{border-color:rgba(184,255,0,.35);color:#b8ff00;background:rgba(184,255,0,.05)}
        .hdr-right{display:flex;align-items:center;gap:8px}
        .hbtn{font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:2px;border:1px solid #242430;background:none;color:#ffffff;cursor:pointer;transition:all .13s}
        .hbtn:hover{border-color:#ff4000;color:#ff4000}
        .hbtn.hl{border-color:rgba(184,255,0,.35);color:#b8ff00}
        .live{display:flex;align-items:center;gap:5px;font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:#ffffff}
        .live::before{content:'';width:6px;height:6px;border-radius:50%;background:#b8ff00;box-shadow:0 0 7px #b8ff00;animation:blink 1.5s ease-in-out infinite}

        .overlay{position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:400;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(6px)}
        .overlay.on{display:flex}
        .modal{background:#13131a;border:1px solid #242430;border-radius:6px;width:100%;position:relative;animation:popIn .22s cubic-bezier(.34,1.56,.64,1) both;max-height:90vh;overflow-y:auto}
        .mh{padding:26px 26px 0}
        .modal{background:#13131a;border:1px solid #242430;border-radius:6px;width:100%;position:relative;animation:popIn .22s cubic-bezier(.34,1.56,.64,1) both;max-height:90vh;overflow-y:auto}
        .mh{padding:26px 26px 0}
        .mc{position:absolute;top:14px;right:16px;background:none;border:none;color:#ffffff;font-size:1.1rem;cursor:pointer;padding:4px 6px}
        .mc:hover{color:#ffffff}
        .mtitle{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.5rem;letter-spacing:.07em;color:#eeeef8;margin-bottom:4px}
        .msub{font-size:.78rem;color:#44444f;line-height:1.6;margin-bottom:20px}
        .mb{padding:0 26px 26px}

        .price-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
        .pc{background:#0f0f13;border:1px solid #1c1c24;border-radius:5px;padding:18px 16px;text-align:center;position:relative}
        .pc.star{border-color:rgba(245,197,24,.35);background:rgba(245,197,24,.025)}
        .pc-badge{position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:#f5c518;color:#000;font-family:'IBM Plex Mono',monospace;font-size:.5rem;font-weight:600;letter-spacing:.1em;padding:2px 8px;border-radius:2px;white-space:nowrap}
        .pc-name{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:.95rem;letter-spacing:.1em;text-transform:uppercase;color:#eeeef8;margin-bottom:5px}
        .pc-price{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.9rem;line-height:1;margin-bottom:2px}
        .pc-per{font-size:.7rem;color:#44444f;margin-bottom:12px}
        .pc ul{list-style:none;text-align:left;margin-bottom:14px}
        .pc ul li{font-size:.71rem;color:#44444f;padding:2px 0;display:flex;gap:6px;line-height:1.5}
        .pc ul li.y{color:#c4c4d4}
        .pc ul li::before{content:'—';color:#44444f;flex-shrink:0}
        .pc ul li.y::before{content:'✓';color:#b8ff00}
        .pcbtn{width:100%;padding:10px;border:none;border-radius:3px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.88rem;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:all .13s}
        .btn-free{background:#242430;color:#44444f}
        .btn-pro{background:#f5c518;color:#000}.btn-pro:hover{background:#f7d060}
        .btn-beast{background:#ff4000;color:#000}.btn-beast:hover{background:#ff5511}
        .price-note{font-family:'IBM Plex Mono',monospace;font-size:.63rem;color:#44444f;text-align:center;line-height:1.7}
        .price-note a{color:#ff4000;text-decoration:none}

        .hero{max-width:900px;margin:0 auto;padding:68px 28px 44px;text-align:center;position:relative}
        .hero::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:580px;height:280px;background:radial-gradient(ellipse,rgba(255,64,0,.1) 0%,transparent 70%);pointer-events:none}
        .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:#ffffff;margin-bottom:16px}
        .hero h1{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(3rem,7.5vw,5.8rem);line-height:.93;color:#eeeef8;margin-bottom:18px}
        .blaze{color:transparent;background:linear-gradient(135deg,#ff4000 0%,#ff7700 55%,#ffcc00 100%);-webkit-background-clip:text;background-clip:text;display:block}
        .hero p{color:#44444f;font-size:.96rem;font-weight:300;max-width:480px;margin:0 auto;line-height:1.75}

        .charity{max-width:900px;margin:14px auto 0;padding:0 28px}
        .c-strip{background:rgba(184,255,0,.03);border:1px solid rgba(184,255,0,.13);border-radius:4px;padding:10px 16px;display:flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:rgba(184,255,0,.55);line-height:1.55}
        .c-strip b{color:#b8ff00}

        .usage-wrap{max-width:900px;margin:12px auto 0;padding:0 28px;display:none}
        .usage-wrap.on{display:block}
        .usage-inner{background:#0f0f13;border:1px solid #1c1c24;border-radius:4px;padding:10px 14px;display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:.64rem}
        .ul{color:#44444f;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap}
        .ut{flex:1;height:4px;background:#1c1c24;border-radius:999px;overflow:hidden}
        .uf{height:100%;background:linear-gradient(90deg,#ff4000,#ff7700);border-radius:999px;transition:width .4s}
        .uf.full{background:#ff2828}
        .uc{color:#eeeef8;white-space:nowrap}
        .uu{background:#ff4000;border:none;border-radius:2px;color:#000;font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;padding:4px 9px;cursor:pointer}
        .uu:hover{background:#ff5511}

        .setup{max-width:900px;margin:0 auto;padding:28px 28px 0}
        .sec{font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#ffffff;margin-bottom:12px;display:flex;align-items:center;gap:10px}
        .sec::after{content:'';flex:1;height:1px;background:#1c1c24}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
        .f{display:flex;flex-direction:column;gap:5px}
        .s2{grid-column:1/-1}
        .f label{font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:#ffffff}
        input[type=text],textarea{background:#0f0f13;border:1px solid #1c1c24;border-radius:3px;padding:10px 12px;font-family:'Barlow',sans-serif;font-size:.87rem;color:#ffffff;transition:border-color .15s,box-shadow .15s;resize:vertical;width:100%}
        input[type=text]:focus,textarea:focus{outline:none;border-color:#ff4000;box-shadow:0 0 0 2px rgba(255,64,0,.1)}
        textarea{min-height:80px;line-height:1.6}
        input::placeholder,textarea::placeholder{color:#44444f}

        .sp-bar{background:rgba(255,64,0,.05);border:1px solid rgba(255,64,0,.18);border-radius:4px;padding:11px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;flex-wrap:wrap}
        .sp-txt{font-family:'IBM Plex Mono',monospace;font-size:.68rem;color:#ffffff;line-height:1.5}
        .sp-txt b{color:#ff4000}
        .sp-btn{background:#ff4000;border:none;border-radius:3px;color:#000;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;padding:8px 14px;cursor:pointer;transition:all .13s;white-space:nowrap}
        .sp-btn:hover{background:#ff5511}

        .scout-row{display:flex;gap:8px;align-items:flex-end}
        .scout-row .f{flex:1}
        .scout-btn{padding:10px 14px;background:rgba(74,158,255,.1);border:1px solid rgba(74,158,255,.3);border-radius:3px;color:#4a9eff;font-family:'IBM Plex Mono',monospace;font-size:.65rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:all .15s;white-space:nowrap;display:flex;align-items:center;gap:6px;align-self:flex-end}
        .scout-btn:hover{background:rgba(74,158,255,.18);border-color:rgba(74,158,255,.5)}
        .scout-btn:disabled{opacity:.4;cursor:not-allowed}
        .scout-count{font-family:'IBM Plex Mono',monospace;font-size:.6rem;color:#ffffff;margin-top:5px}
        .scout-count b{color:#b8ff00}

        .plat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:7px;margin-bottom:4px}
        .pt{padding:10px 12px;border:1px solid #1c1c24;border-radius:3px;background:#0f0f13;color:#ffffff;font-family:'Barlow Condensed',sans-serif;font-size:.9rem;font-weight:700;letter-spacing:.05em;cursor:pointer;transition:all .13s;display:flex;align-items:center;gap:7px;user-select:none;position:relative}
        .pt:hover{border-color:rgba(255,64,0,.4);color:#ffffff}
        .pt.on{border-color:#ff4000;background:rgba(255,64,0,.07);color:#ff4000}
        .pt .ck{margin-left:auto;font-size:.7rem;opacity:0}
        .pt.on .ck{opacity:1}
        .pt.locked{opacity:.32;cursor:not-allowed}
        .pt.locked:hover{border-color:#1c1c24;color:#ffffff}
        .pt-mode{font-family:'IBM Plex Mono',monospace;font-size:.48rem;letter-spacing:.06em;text-transform:uppercase;padding:1px 4px;border-radius:1px;margin-left:auto;color:#ffffff}
        .pm-auto{background:rgba(184,255,0,.12);color:#b8ff00;border:1px solid rgba(184,255,0,.2)}
        .pm-click{background:rgba(255,119,0,.1);color:#ff7700;border:1px solid rgba(255,119,0,.2)}
        .pm-copy{background:rgba(255,255,255,.04);color:#ffffff;border:1px solid #1c1c24}

        .unleash-wrap{margin:18px 0 0}
        .u-btn{width:100%;padding:22px;background:#ff4000;border:none;border-radius:3px;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.5rem;letter-spacing:.16em;text-transform:uppercase;color:#000;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;gap:10px;position:relative;overflow:hidden}
        .u-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent,rgba(255,255,255,.12),transparent);transform:translateX(-100%);transition:transform .5s}
        .u-btn:hover{background:#ff5511;transform:translateY(-2px);box-shadow:0 10px 40px rgba(255,64,0,.4)}
        .u-btn:hover::after{transform:translateX(100%)}
        .u-btn:active{transform:translateY(0)}
        .u-btn:disabled{background:#1a1a1f;color:#3a3a46;cursor:not-allowed;transform:none;box-shadow:none}
        .u-btn.firing{background:#0d0d10;color:#ff4000;border:1px solid #ff4000;animation:pulseRed 1.2s ease-in-out infinite}
        .gate{margin-top:12px;background:rgba(245,197,24,.04);border:1px solid rgba(245,197,24,.18);border-radius:4px;padding:13px 16px;display:none;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
        .gate.on{display:flex}
        .gate-txt{font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#f5c518;line-height:1.5}
        .gate-btn{background:#f5c518;border:none;border-radius:3px;color:#000;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;padding:9px 16px;cursor:pointer}
        .gate-btn:hover{background:#f7d060}
        .prog{display:none;margin-top:14px}
        .prog.on{display:block}
        .prog-log{background:#0f0f13;border:1px solid #1c1c24;border-radius:3px;padding:13px 17px;font-family:'IBM Plex Mono',monospace;font-size:.7rem;line-height:2;max-height:120px;overflow-y:auto}
        .ll{animation:fadeUp .2s ease both}
        .ll.d{color:#44444f}.ll.a{color:#ff4000}.ll.ok{color:#b8ff00}.ll.info{color:#4a9eff}

        .output{max-width:900px;margin:0 auto;padding:0 28px 80px;display:none}
        .output.on{display:block;animation:fadeUp .4s ease both}
        .o-head{display:flex;align-items:center;justify-content:space-between;margin:34px 0 14px;flex-wrap:wrap;gap:12px}
        .o-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.45rem;letter-spacing:.08em;color:#eeeef8}
        .o-title b{color:#ff4000}
        .refire{padding:9px 18px;background:none;border:1px solid #ff4000;border-radius:3px;color:#ff4000;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:all .13s}
        .refire:hover{background:rgba(255,64,0,.1)}
        .fw-row{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
        .fw-chip{font-family:'IBM Plex Mono',monospace;font-size:.57rem;letter-spacing:.07em;text-transform:uppercase;color:#44444f;background:#0f0f13;border:1px solid #1c1c24;padding:3px 8px;border-radius:2px}
        .mode-leg{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:14px}
        .ml{display:flex;align-items:center;gap:5px;font-family:'IBM Plex Mono',monospace;font-size:.6rem;color:#44444f}
        .mld{width:6px;height:6px;border-radius:50%}
        .mld-a{background:#b8ff00;box-shadow:0 0 4px #b8ff00}
        .mld-c{background:#ff7700}.mld-m{background:#44444f}
        .cards{display:grid;gap:10px}

        .card{background:#0f0f13;border:1px solid #1c1c24;border-radius:4px;overflow:hidden;animation:fadeUp .3s ease both;transition:border-color .2s}
        .card:hover{border-color:rgba(255,64,0,.22)}
        .card-group-header{font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:#ff4000;padding:10px 14px 0;display:flex;align-items:center;gap:8px}
        .card-group-header::after{content:'';flex:1;height:1px;background:rgba(255,64,0,.15)}
        .card-head{padding:10px 14px;background:rgba(255,255,255,.016);border-bottom:1px solid #1c1c24;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .p-name{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.88rem;letter-spacing:.07em;text-transform:uppercase;color:#eeeef8}
        .fw-tag{font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:.08em;text-transform:uppercase;color:#ff4000;background:rgba(255,64,0,.09);border:1px solid rgba(255,64,0,.18);padding:2px 6px;border-radius:2px}
        .mode-tag{font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:.07em;text-transform:uppercase;padding:2px 6px;border-radius:2px}
        .mt-auto{background:rgba(184,255,0,.09);color:#b8ff00;border:1px solid rgba(184,255,0,.2)}
        .mt-click{background:rgba(255,119,0,.09);color:#ff7700;border:1px solid rgba(255,119,0,.18)}
        .mt-copy{background:rgba(255,255,255,.03);color:#44444f;border:1px solid #1c1c24}
        .cc{margin-left:auto;font-family:'IBM Plex Mono',monospace;font-size:.6rem;color:#ffffff}
        .cc.warn{color:#ffff00}.cc.over{color:#ff2828}
        .card-body{padding:16px 14px;display:flex;gap:10px;align-items:flex-start}
        .ad-txt{flex:1;font-size:.86rem;line-height:1.78;color:#c4c4d4;white-space:pre-wrap;font-family:'Barlow',sans-serif}
        .ad-txt.loading{color:#44444f;font-style:italic;display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:.7rem}
        .sp2{width:13px;height:13px;border:2px solid #1c1c24;border-top-color:#ff4000;border-radius:50%;animation:spin .6s linear infinite;flex-shrink:0}
        .card-acts{display:flex;flex-direction:column;gap:5px;flex-shrink:0;align-items:center}
        .ib{width:30px;height:30px;background:rgba(255,255,255,.03);border:1px solid #1c1c24;border-radius:3px;color:#44444f;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.78rem;transition:all .12s;padding:0}
        .ib:hover{background:rgba(255,64,0,.09);border-color:#ff4000;color:#ff4000}
        .post-btn{padding:6px 10px;border-radius:3px;font-family:'IBM Plex Mono',monospace;font-size:.58rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .13s;display:flex;align-items:center;gap:4px;white-space:nowrap;text-decoration:none}
        .pb-auto{background:rgba(184,255,0,.1);border:1px solid rgba(184,255,0,.22);color:#b8ff00}
        .pb-auto:hover{background:rgba(184,255,0,.18)}
        .pb-click{background:rgba(255,119,0,.09);border:1px solid rgba(255,119,0,.2);color:#ff7700}
        .pb-click:hover{background:rgba(255,119,0,.16)}
        .pb-copy{background:rgba(255,255,255,.04);border:1px solid #1c1c24;color:#44444f}
        .pb-copy:hover{border-color:#ff4000;color:#c4c4d4}
        .card-tip{padding:8px 14px;border-top:1px solid #1c1c24;background:rgba(184,255,0,.018);font-size:.68rem;color:#ffffff;display:flex;align-items:flex-start;gap:5px;font-family:'IBM Plex Mono',monospace;line-height:1.55}
        .tip-ic{color:#b8ff00;flex-shrink:0}

        .toast{position:fixed;bottom:22px;right:22px;background:#b8ff00;color:#000;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;padding:10px 16px;border-radius:3px;transform:translateY(60px);opacity:0;transition:all .25s cubic-bezier(.34,1.56,.64,1);z-index:9998}
        .toast.on{transform:translateY(0);opacity:1}

        @media(max-width:620px){
          .g2,.price-grid,.plat-grid{grid-template-columns:1fr}
          .hero{padding:52px 18px 36px}
          .setup,.output,.charity,.usage-wrap{padding-left:16px;padding-right:16px}
          header{padding:0 16px}
          .scout-row{flex-direction:column}
          .scout-btn{width:100%;justify-content:center}
        }
      ` }} />

      <header>
        <div className="monster" style={{ fontSize: '3rem' }}>
          🐺
        </div>
        <div className="hdr-mid">
          <div className="tier-pill tp-free">EVERYTHING FREE</div>
        </div>
        <div className="hdr-right">
          <div className="live">CLAUDE ONLINE</div>
          <button className="hbtn" onClick={openPricing}>💚 Donate</button>
          <button className="hbtn" onClick={openAdmin}>ADMIN</button>
        </div>
      </header>

        <div className="hero">
          <div className="eyebrow">AI ADVERTISING ENGINE — AUTONOMOUS</div>
          <h1>UNLEASH <span className="blaze">THE BEAST</span></h1>
          <p style={{ color: '#ffffff', fontWeight: 'bold' }}>Generate platform-optimized ads using proven frameworks. Scout the best subreddits intelligently. Post automatically or one-click.</p>
        </div>

      <div className="charity">
        <div className="c-strip">💚 10% of revenue goes to <b>GiveDirectly.org</b> — direct cash to people in extreme poverty. Rated #1 by GiveWell.</div>
      </div>

      <div className="usage-wrap" id="usage-wrap">
        <div className="usage-inner">
          <span className="ul">Monthly Campaigns</span>
          <div className="ut"><div className="uf full"></div></div>
          <span className="uc">UNLIMITED</span>
          <button className="uu">DONATE</button>
        </div>
      </div>

      <div className="setup">
        <div className="sec">TARGET SETUP</div>

        <div className="sp-bar">
          <div className="sp-txt">Want to promote <b>AD BEAST</b> itself? Load the pre-built campaign and fire it.</div>
          <button className="sp-btn">🔥 PROMOTE AD BEAST</button>
        </div>

        <div className="g2">
          <div className="f"><label>Product / Service Name</label><input ref={productNameRef} type="text" placeholder="e.g. CareerCraft AI" /></div>
          <div className="f"><label>Price / Offer</label><input ref={priceRef} type="text" placeholder="e.g. $19/mo · free to try" /></div>
          <div className="f s2"><label>What It Does — Be Specific</label><textarea ref={descriptionRef} placeholder="e.g. Paste a job description + your background, get a tailored cover letter in 10 seconds using AI."></textarea></div>
          <div className="f"><label>Who It&apos;s For</label><input ref={audienceRef} type="text" placeholder="e.g. job seekers, side hustlers, freelancers" /></div>
          <div className="f"><label>Biggest Pain Point Solved</label><input ref={painPointRef} type="text" placeholder="e.g. getting ghosted after applying" /></div>
          <div className="f s2"><label>Social Proof / Results (Optional)</label><input ref={socialProofRef} type="text" placeholder="e.g. 3x more callbacks · 500+ users · saves 2 hrs" /></div>
          <div className="f"><label>Website / Landing Page URL</label><input ref={websiteRef} type="text" placeholder="e.g. https://yourproduct.com" /></div>
          <div className="f">
            <label>Target Subreddits — or use Scout ↓</label>
            <div className="scout-row">
              <div className="f"><input ref={subredditsRef} type="text" placeholder="sidehustle, entrepreneur, smallbusiness…" /></div>
              <button className="scout-btn" onClick={openScout}>🔍 SCOUT REDDIT</button>
            </div>
            <div className="scout-count"><span>Scout found <b>0</b> subreddits — <b>0</b> selected as targets</span></div>
          </div>
        </div>

        <div className="sec">SELECT FIRE ZONES</div>
        <div className="plat-grid">
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
          <button className="pt on">
            📘 Facebook
            <span className="pt-mode pm-click">⚡ 1-CLICK</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt on">
            📸 Instagram
            <span className="pt-mode pm-copy">📋 COPY</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt on">
            💼 LinkedIn
            <span className="pt-mode pm-click">⚡ 1-CLICK</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt on">
            🎵 TikTok Script
            <span className="pt-mode pm-copy">📋 COPY</span>
            <span className="ck">✔</span>
          </button>
          <button className="pt on">
            📧 Cold Email
            <span className="pt-mode pm-copy">📋 COPY</span>
            <span className="ck">✔</span>
          </button>
        </div>

        <div className="sec">PULL THE TRIGGER</div>
        <div className="unleash-wrap">
          <button className="u-btn" onClick={handleUnleash} disabled={isGenerating}>
            {isGenerating ? 'GENERATING...' : '🔥 UNLEASH THE BEAST'}
          </button>
        </div>

        <div className="prog"><div className="prog-log"></div></div>
      </div>

      <div className={`output ${campaignAds.length > 0 ? 'on' : ''}`}>
        <div className="o-head">
          <div className="o-title">CAMPAIGN <b>LIVE</b></div>
          <button className="refire">↻ RE-FIRE</button>
        </div>
        <div className="fw-row">
          {[...new Set(campaignAds.map(ad => ad.framework))].map(fw => (
            <div key={fw} className="fw-chip">{fw}</div>
          ))}
        </div>
        <div className="mode-leg">
          <div className="ml"><div className="mld mld-a"></div>AUTO-POST</div>
          <div className="ml"><div className="mld mld-c"></div>ONE-CLICK</div>
          <div className="ml"><div className="mld mld-m"></div>COPY</div>
        </div>
        <div className="cards">
          {campaignAds.map((ad, index) => (
            <div key={index} className="card">
              <div className="card-head">
                <div className="p-name">{ad.platform}</div>
                <div className="fw-tag">{ad.framework.split(' = ')[0]}</div>
                <div className={`mode-tag mt-${ad.mode}`}>{ad.mode.toUpperCase()}</div>
                <div className="cc">{ad.charCount}</div>
              </div>
              <div className="card-body">
                <div className="ad-txt">{ad.text}</div>
                <div className="card-acts">
                  <button className={`ib post-btn pb-${ad.mode}`}>
                    {ad.mode === 'auto' ? '🚀 POST' : ad.mode === 'click' ? '⚡ POST' : '📋 COPY'}
                  </button>
                </div>
              </div>
              <div className="card-tip">
                <span className="tip-ic">💡</span> This ad is optimized for {ad.platform} using the {ad.framework} framework.
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="toast">✓ COPIED</div>

      <div className={`overlay ${showPricing ? 'on' : ''}`}>
        <div className="modal" style={{maxWidth: '540px'}}>
          <div className="mh">
            <div className="mtitle">EVERYTHING IS FREE</div>
            <div className="msub">AD BEAST is completely free and unlimited. Consider donating to support our charity partnership.</div>
            <button className="mc" onClick={closePricing}>✕</button>
          </div>
          <div className="mb">
            <div className="price-grid">
              <div className="pc star" style={{gridColumn: '1/-1'}}>
                <div className="pc-badge">EVERYTHING FREE</div>
                <div className="pc-name">AD BEAST</div>
                <div className="pc-price">$0</div>
                <div className="pc-per">forever</div>
                <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px'}}>
                  <li className="y">All 8 platforms</li>
                  <li className="y">Unlimited campaigns</li>
                  <li className="y">⚡ One-click posting</li>
                  <li className="y">Scout Mode — unlimited subs</li>
                  <li className="y">Per-sub tailored posts</li>
                  <li className="y">🤖 Reddit API auto-post</li>
                  <li className="y">Rule analysis per subreddit</li>
                  <li className="y">Priority AI generation</li>
                  <li className="y">Powered by Gemini</li>
                </ul>
                <button className="pcbtn btn-free" style={{marginTop: '14px'}}>START USING NOW</button>
              </div>
            </div>
            <div className="price-note"><b>100% Free Forever</b> · <b>Support our charity: 10% of donations → GiveDirectly.org</b><br />Want to donate? <a href="#" onClick={() => { closePricing(); openAdmin(); }}>Enter here →</a></div>
          </div>
        </div>
      </div>

      <div className={`overlay ${showAdmin ? 'on' : ''}`}>
        <div className="modal" style={{maxWidth: '460px'}}>
          <div className="mh">
            <div className="mtitle">DONATE TO SUPPORT</div>
            <div className="msub">Help us keep AD BEAST free forever. 10% of donations go to GiveDirectly.org.</div>
            <button className="mc" onClick={closeAdmin}>✕</button>
          </div>
          <div className="mb">
            <div id="admin-login-form">
              <div className="af"><label>Donation Amount</label><input className="ainput" type="number" placeholder="$10" /></div>
              <button className="abtn">💚 MAKE DONATION</button>
              <div className="aerr">Thank you for supporting AD BEAST!</div>
            </div>
            <div className="admin-dash">
              <div className="astats">
                <div className="ast"><div className="ast-n">0</div><div className="ast-l">Campaigns Fired</div></div>
                <div className="ast"><div className="ast-n">∞</div><div className="ast-l">Your Limit</div></div>
                <div className="ast"><div className="ast-n">FREE</div><div className="ast-l">Tier Status</div></div>
              </div>
              <div className="asec">REDDIT API — Auto-Post</div>
              <div style={{fontFamily: 'IBM Plex Mono', fontSize: '.63rem', color: '#44444f', lineHeight: '1.7'}}>
                Create a &quot;script&quot; app at <span style={{color: '#ff4000'}}>reddit.com/prefs/apps</span> then paste credentials below. Stored locally in your browser only.
              </div>
              <div className="api-label"><span className="cdot"></span>Reddit Client ID</div>
              <div className="api-row"><input placeholder="Client ID" /><button className="api-save">SAVE</button></div>
              <div className="api-row" style={{margin: '4px 0'}}><input placeholder="Client Secret" type="password" /></div>
              <div className="api-row" style={{marginBottom: '4px'}}><input placeholder="Reddit Username" /></div>
              <div className="api-row" style={{marginBottom: '14px'}}><input placeholder="Reddit Password" type="password" /></div>
              <div className="api-label"><span className="cdot"></span>Twitter/X Bearer Token</div>
              <div className="api-row" style={{marginBottom: '14px'}}><input placeholder="Bearer Token (developer.twitter.com)" type="password" /><button className="api-save">SAVE</button></div>
              <div style={{fontFamily: 'IBM Plex Mono', fontSize: '.62rem', color: '#44444f', background: '#0f0f13', border: '1px solid #1c1c24', borderRadius: '3px', padding: '10px', lineHeight: '1.7'}}>
                🤖 <span style={{color: '#b8ff00'}}>Reddit auto-post</span> requires Script App credentials above.<br />
                ⚡ All other platforms use one-click intent URLs — no API key needed.
              </div>
              <button className="alogout">CLOSE</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`overlay ${showScout ? 'on' : ''}`}>
        <div className="modal" style={{maxWidth: '680px'}}>
          <div className="mh">
            <div className="mtitle">🔍 REDDIT SCOUT</div>
            <div className="msub">Analyzing your product to find the best subreddits to target…</div>
            <button className="mc" onClick={closeScout}>✕</button>
          </div>
          <div className="mb">
            <div className="scout-loading">
              <div className="big-spin"></div>
              <p>
                <span className="phase">Analyzing product category…</span><br />
                Scanning subreddit cultures, rules, and self-promo policies<br />
                Scoring each sub for audience fit and posting risk
              </p>
            </div>
            <div className="scout-results">
              <div className="scout-summary"></div>
              <div className="scout-select-row">
                <span className="scout-select-label">SELECT TARGETS</span>
                <div className="scout-sel-btns">
                  <button className="ss-btn">SELECT ALL</button>
                  <button className="ss-btn">CLEAR</button>
                  <button className="ss-btn">✓ SAFE ONLY</button>
                </div>
              </div>
              <div className="sub-cards"></div>
              <button className="scout-fire-btn">🔥 FIRE AT SELECTED SUBREDDITS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}