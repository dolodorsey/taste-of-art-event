'use client';
import { useEffect, useRef } from 'react';
export default function Page() {
  const h = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv'); }), { threshold: 0.08, rootMargin: '60px' });
    document.querySelectorAll('.r').forEach(el => o.observe(el));
    setTimeout(() => { if (h.current) h.current.classList.add('on'); }, 200);
    return () => o.disconnect();
  }, []);
  const C = { bg: '#111114', light: '#F4EFE5', a1: '#A75C43', a2: '#6A2730', gold: '#B58A47' };
  return (
    <div style={{background:C.bg,color:C.light,fontFamily:"'DM Sans',sans-serif",overflowX:'hidden'}}>
      <style dangerouslySetInnerHTML={{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        .r{opacity:0;transform:translateY(48px);transition:all 1.1s cubic-bezier(0.16,1,0.3,1)}.r.rv{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.15s}.d2{transition-delay:.3s}.d3{transition-delay:.45s}
        .hw{opacity:0;transition:opacity 1.6s ease}.hw.on{opacity:1}
        .hw.on .hl{transform:scale(1);opacity:1}.hl{transform:scale(1.1);opacity:0;transition:all 1.8s cubic-bezier(0.16,1,0.3,1) .3s}
        .hw.on .ht{opacity:1;transform:translateY(0)}.ht{opacity:0;transform:translateY(30px);transition:all 1.2s cubic-bezier(0.16,1,0.3,1) .9s}
        .hw.on .hc{opacity:1;transform:translateY(0)}.hc{opacity:0;transform:translateY(20px);transition:all 1s cubic-bezier(0.16,1,0.3,1) 1.3s}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .bp{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#111114;background:linear-gradient(135deg,#A75C43,#6A2730);padding:18px 56px;border:none;cursor:pointer;text-decoration:none;display:inline-block;transition:all .4s cubic-bezier(0.16,1,0.3,1)}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(167,92,67,.3)}
        .sbg{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center;pointer-events:none}
        @media(max-width:768px){.dg{grid-template-columns:1fr!important}.nl{display:none!important}.fg{grid-template-columns:1fr!important}}
      `}}/>
      <div className="grain"/>

      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'24px clamp(20px,4vw,60px)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(180deg,rgba(17,17,20,.92) 0%,transparent 100%)'}}>
        <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(16px,1.8vw,24px)',fontWeight:600,letterSpacing:'.08em',color:C.a1}}>TASTE OF ART</span>
        <div className="nl" style={{display:'flex',gap:'clamp(16px,2vw,32px)',alignItems:'center'}}>
          {['Experience','Tickets'].map(l=><a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.25em',textTransform:'uppercase',color:'rgba(244,239,229,.4)',textDecoration:'none'}}>{l}</a>)}
          <a href="#tickets" className="bp" style={{padding:'10px 24px',fontSize:9}}>TICKETS →</a>
        </div>
      </nav>

      {/* HERO — flyer1 as BG, transparent logo large */}
      <section ref={h} className="hw" style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div className="sbg" style={{backgroundImage:'url(/flyer1.png)',opacity:.14,filter:'brightness(.35) saturate(.5)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 40%,rgba(167,92,67,.2) 0%,${C.bg} 65%)`,zIndex:1}}/>
        <div style={{position:'absolute',inset:0,background:`linear-gradient(180deg,transparent 0%,rgba(17,17,20,.5) 70%,${C.bg} 100%)`,zIndex:2}}/>
        <div className="hl" style={{position:'relative',zIndex:3}}><img src="/logo.png" alt="Taste of Art" style={{width:'min(55vw,500px)',height:'auto',filter:'drop-shadow(0 0 60px rgba(167,92,67,.25))'}}/></div>
        <div className="ht" style={{position:'relative',zIndex:3,textAlign:'center',marginTop:24}}>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(20px,3vw,36px)',fontWeight:300,letterSpacing:'.08em',color:C.light}}>A Night of Art, Elegance & Social Energy</h1>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(167,92,67,.7)',marginTop:8}}>Atlanta · Saturday · April 18th</p>
        </div>
        <div className="hc" style={{position:'relative',zIndex:3,marginTop:40}}><a href="#tickets" className="bp">TICKETS →</a></div>
      </section>

      {/* THESIS — flyer2 scattered BG right */}
      <section id="experience" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/flyer2.png)',backgroundPosition:'90% center',backgroundSize:'40%',opacity:.13,filter:'brightness(.35) saturate(.4)'}}/>
        <div className="dg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1}}>
          <div className="r">
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:C.a1,marginBottom:24}}>The Concept</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,fontWeight:300,color:C.light,marginBottom:28}}>WHERE ART<br/>MEETS <span style={{color:C.a1,fontWeight:600}}>APPETITE</span></h2>
            <p style={{fontSize:'clamp(14px,1.2vw,17px)',lineHeight:1.85,color:'rgba(244,239,229,.45)',maxWidth:480,marginBottom:36}}>TASTE OF ART merges gallery-quality visual art with curated culinary experiences. Live painters, gourmet bites, craft cocktails, and live jazz — an elevated evening for Atlanta&apos;s creative class.</p>
            <div style={{display:'flex',gap:40,flexWrap:'wrap'}}>
              {[['LIVE','Painting'],['GOURMET','Bites'],['JAZZ','All Night']].map(([n,l])=><div key={l}><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,4vw,48px)',fontWeight:600,color:C.a1,lineHeight:1}}>{n}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(181,138,71,.5)',marginTop:6}}>{l}</div></div>)}
            </div>
          </div>
          {/* flyer3 as inline image on right */}
          <div className="r d2"><img src="/flyer3.png" alt="" style={{width:'100%',filter:'brightness(.85)',boxShadow:'0 40px 100px rgba(0,0,0,.5)'}}/></div>
        </div>
      </section>

      {/* EXPERIENCE GRID — flyer4 scattered BG left */}
      <section style={{position:'relative',background:'#0E0E11',padding:'120px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/flyer4.png)',backgroundPosition:'5% center',backgroundSize:'35%',opacity:.12,filter:'brightness(.35) saturate(.4)'}}/>
        <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r"><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,fontWeight:300,color:C.light,marginBottom:64}}>THE <span style={{color:C.a1,fontWeight:600}}>EXPERIENCE</span></h2></div>
          <div className="dg" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:2,background:'rgba(167,92,67,.08)'}}>
            {[['LIVE PAINTING','Watch artists create in real-time as the night unfolds'],['CURATED CULINARY','Chef-prepared bites paired with the art experience'],['LIVE JAZZ & SOUL','Full band performances creating the perfect atmosphere'],['WINE & COCKTAILS','Sommelier-selected wines and craft cocktail bar'],['ART MARKETPLACE','Purchase original works directly from the artists'],['NETWORKING','Atlanta\'s creative and professional community in one room']].map(([t,d],i)=>
              <div key={i} className={`r d${i%3+1}`} style={{background:C.bg,padding:'40px 36px',borderLeft:'2px solid transparent',transition:'all .3s'}} onMouseEnter={e=>{e.currentTarget.style.borderLeftColor=C.a1;e.currentTarget.style.background='#0E0E11'}} onMouseLeave={e=>{e.currentTarget.style.borderLeftColor='transparent';e.currentTarget.style.background=C.bg}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(18px,2vw,26px)',fontWeight:600,color:C.light,marginBottom:8}}>{t}</div>
                <div style={{fontSize:13,color:'rgba(244,239,229,.35)',lineHeight:1.7}}>{d}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CINEMATIC BREAK — flyer5 full bleed */}
      <section style={{position:'relative',height:'70vh',overflow:'hidden'}}>
        <img src="/flyer5.png" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:'brightness(.4) saturate(.6)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(17,17,20,.8) 0%,rgba(17,17,20,.2) 40%,rgba(17,17,20,.8) 100%)'}}/>
        <div className="r" style={{position:'relative',zIndex:1,height:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',textAlign:'center'}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,6vw,72px)',fontWeight:300,color:C.light,lineHeight:.95}}>Art Is Meant<br/>To Be <span style={{fontWeight:600,color:C.a1}}>Experienced</span></h2>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(167,92,67,.6)',marginTop:20}}>Not Just Observed</p>
        </div>
      </section>

      {/* GALLERY REMOVED */}

      {/* TICKETS — logo as BG */}
      <section id="tickets" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'center',backgroundSize:'35%',opacity:.12,filter:'brightness(.4)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 50%,rgba(167,92,67,.15) 0%,transparent 60%)`}}/>
        <div className="r" style={{maxWidth:720,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,7vw,100px)',lineHeight:.9,fontWeight:300,color:C.light,marginBottom:24}}>GET YOUR<br/><span style={{color:C.a1,fontWeight:600}}>TICKETS</span></h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'rgba(244,239,229,.45)',maxWidth:440,margin:'0 auto 44px'}}>An elevated evening. Limited capacity.</p>
          <a href="https://www.eventbrite.com/e/taste-of-art-canvas-cuisine-culture-tickets-1985661188066" target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'20px 64px',fontSize:11}}>TICKETS →</a>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:'rgba(181,138,71,.3)',letterSpacing:'.2em',marginTop:16}}>404.819.9609 · @dbs.tark</div>
        </div>
      </section>

      <footer style={{background:'#0A0A0D',borderTop:'1px solid rgba(167,92,67,.08)',padding:'56px clamp(24px,5vw,80px) 36px'}}>
        <div className="dg fg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40}}>
          <div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:C.a1}}>TASTE OF ART</div><p style={{fontSize:12,color:'rgba(244,239,229,.35)',marginTop:8,lineHeight:1.7}}>A KHG HugLife Event. Art meets appetite.</p></div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.a1,marginBottom:16}}>EVENT</div>{['Experience','Tickets'].map(l=><div key={l} style={{fontSize:12,color:'rgba(244,239,229,.35)',marginBottom:8}}>{l}</div>)}</div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.a1,marginBottom:16}}>CONNECT</div>{['@just.huglife','404.819.9609'].map(l=><div key={l} style={{fontSize:12,color:'rgba(244,239,229,.35)',marginBottom:8}}>{l}</div>)}</div>
        </div>
        <div style={{maxWidth:1400,margin:'24px auto 0',paddingTop:20,borderTop:'1px solid rgba(167,92,67,.06)',fontSize:10,fontFamily:"'DM Mono',monospace",color:'rgba(244,239,229,.15)'}}>© 2026 Taste of Art. A KHG Enterprise.</div>
      </footer>
    </div>
  );
}
