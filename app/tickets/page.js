import TasteOfArtTickets from '../TasteOfArtTickets';

export const metadata = {
  title: 'Tickets | Taste of Art',
  description: 'Buy official Taste of Art tickets through secure Stripe checkout.',
};

export default function TicketsPage() {
  return (
    <main className="toa-sales-page">
      <header className="toa-sales-nav">
        <a href="/" aria-label="Taste of Art home"><span>T/A</span> Taste of Art</a>
        <a href="/">Back to experience ↗</a>
      </header>

      <section className="toa-sales-hero">
        <p>OFFICIAL TICKET INVENTORY</p>
        <h1>Enter the <em>gallery.</em></h1>
        <div className="toa-sales-copy">
          <span>Live inventory</span>
          <p>Choose an upcoming Taste of Art edition and ticket tier. Prices are pulled directly from the event system and payment is completed through Stripe.</p>
        </div>
      </section>

      <section className="toa-sales-inventory">
        <TasteOfArtTickets />
      </section>

      <footer className="toa-sales-footer">
        <span>Official Taste of Art ticketing</span>
        <span>Powered by The Kollective payment rail × Stripe</span>
      </footer>

      <style>{`
        .toa-sales-page{min-height:100vh;background:#0e0c0c;color:#f4eee5;font-family:Manrope,sans-serif;padding-bottom:72px}
        .toa-sales-nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:18px clamp(20px,5vw,72px);background:rgba(14,12,12,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.09)}
        .toa-sales-nav a{color:#f4eee5;text-decoration:none;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
        .toa-sales-nav a:first-child{display:flex;align-items:center;gap:10px;font-weight:700}
        .toa-sales-nav a:first-child span{display:grid;place-items:center;width:34px;height:34px;border:1px solid #df693b;border-radius:50%;color:#df693b;font-family:'DM Mono',monospace;font-size:10px}
        .toa-sales-hero{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(260px,.7fr);gap:48px;align-items:end;padding:clamp(60px,10vw,140px) clamp(20px,7vw,110px) 56px;border-bottom:1px solid rgba(255,255,255,.08)}
        .toa-sales-hero>p{grid-column:1/-1;margin:0;color:#df693b;font-size:10px;font-weight:700;letter-spacing:.22em}
        .toa-sales-hero h1{margin:0;font-family:'Cormorant Garamond',serif;font-size:clamp(58px,10vw,138px);font-weight:400;line-height:.78;letter-spacing:-.045em}
        .toa-sales-hero h1 em{color:#df693b;font-weight:400}
        .toa-sales-copy{border-left:1px solid rgba(255,255,255,.18);padding-left:24px}
        .toa-sales-copy span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#c7b8a7}
        .toa-sales-copy p{font-family:'Cormorant Garamond',serif;font-size:22px;line-height:1.35;color:#d9cfc5;margin:12px 0 0}
        .toa-sales-inventory{padding:48px clamp(20px,7vw,110px) 80px}
        .toa-ticket-state{padding:36px;border:1px solid rgba(255,255,255,.10);background:#161313;display:grid;gap:8px;color:#cfc2b6}
        .toa-ticket-state strong{font-family:'Cormorant Garamond',serif;font-size:28px;color:#fff}
        .toa-ticket-cities{display:flex;gap:8px;overflow:auto;margin-bottom:20px;padding-bottom:4px}
        .toa-ticket-cities button{border:1px solid rgba(255,255,255,.12);background:transparent;color:#aa9d91;padding:9px 14px;border-radius:999px;text-transform:uppercase;letter-spacing:.12em;font-size:9px;cursor:pointer}
        .toa-ticket-cities button.active{border-color:#df693b;color:#ffd4c1;background:rgba(223,105,59,.12)}
        .toa-ticket-error{padding:14px 16px;background:rgba(211,66,55,.11);border:1px solid rgba(211,66,55,.3);color:#ffc3bc}
        .toa-ticket-events{display:grid;gap:18px}
        .toa-ticket-event{padding:clamp(20px,3vw,34px);border:1px solid rgba(255,255,255,.1);background:linear-gradient(145deg,#171313,#100e0e)}
        .toa-ticket-event-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;padding-bottom:22px;border-bottom:1px solid rgba(255,255,255,.08)}
        .toa-ticket-event-head span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#df693b;font-weight:700}
        .toa-ticket-event-head h3{font-family:'Cormorant Garamond',serif;font-size:clamp(30px,4vw,48px);font-weight:400;margin:6px 0 0;line-height:1}
        .toa-ticket-event-head p{margin:8px 0 0;color:#9e9186;font-size:11px}
        .toa-ticket-event-head em{white-space:nowrap;font-style:normal;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#8f8378;border:1px solid rgba(255,255,255,.1);padding:8px 10px;border-radius:999px}
        .toa-ticket-tiers{display:grid;gap:8px;padding-top:16px}
        .toa-ticket-tiers button{width:100%;display:grid;grid-template-columns:1fr auto auto;gap:20px;align-items:center;text-align:left;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.025);color:#f4eee5;padding:15px 16px;cursor:pointer;transition:.2s ease}
        .toa-ticket-tiers button:hover{border-color:#df693b;background:rgba(223,105,59,.08);transform:translateY(-1px)}
        .toa-ticket-tiers button:disabled{opacity:.55;cursor:wait}
        .toa-ticket-tiers button span{display:grid;gap:3px}
        .toa-ticket-tiers strong{font-size:13px}
        .toa-ticket-tiers small{color:#80756b;font-size:9px;letter-spacing:.05em;text-transform:uppercase}
        .toa-ticket-tiers b{color:#f7be9f;font-size:15px}
        .toa-ticket-tiers i{font-style:normal;color:#9b8f84;font-size:10px;text-transform:uppercase;letter-spacing:.08em}
        .toa-sales-footer{display:flex;justify-content:space-between;gap:20px;margin:0 clamp(20px,7vw,110px);padding-top:22px;border-top:1px solid rgba(255,255,255,.08);color:#766c64;font-size:9px;letter-spacing:.12em;text-transform:uppercase}
        @media(max-width:760px){.toa-sales-hero{grid-template-columns:1fr;gap:28px}.toa-sales-copy{max-width:520px}.toa-ticket-event-head{display:grid}.toa-ticket-event-head em{justify-self:start}.toa-ticket-tiers button{grid-template-columns:1fr auto}.toa-ticket-tiers i{grid-column:1/-1}.toa-sales-footer{display:grid}}
      `}</style>
    </main>
  );
}
