import Image from 'next/image';

const TICKETS = 'https://www.eventbrite.com/e/taste-of-art-art-show-iii-tickets-1985847798222';

const chapters = [
  { number: '01', title: 'The Canvas', copy: 'Live installations unfold in real time. Watch each artist turn a blank surface into the night’s next conversation.' },
  { number: '02', title: 'The Plate', copy: 'Three curated courses transform culinary technique into color, texture, aroma, and composition.' },
  { number: '03', title: 'The Sound', copy: 'A soundtrack built by DJ Blackboy, DJ Jae Murphy, DJ P Forreal, and Manni Supreme.' },
  { number: '04', title: 'The Gallery', copy: 'Move through immersive rooms designed to be entered, felt, photographed, and remembered.' },
  { number: '05', title: 'The Marketplace', copy: 'Meet the makers and discover original work from more than 50 participating artists.' },
  { number: '06', title: 'The Table', copy: 'A shared social experience for Atlanta’s collectors, creators, tastemakers, and culture builders.' },
];

const faqs = [
  ['When is Taste of Art?', 'Saturday, August 22, 2026, from 7:00 PM until 1:00 AM.'],
  ['Where is the event?', 'The Atlanta location will be announced to confirmed guests. Follow @thetasteofart for the reveal.'],
  ['What does admission include?', 'Admission provides entry to the full art, food, music, marketplace, and atmosphere experience. Select your available entry level on Eventbrite.'],
  ['What should I wear?', 'Gallery-night style is encouraged: expressive, elevated, and camera-ready.'],
  ['Can artists participate?', 'Artist and marketplace opportunities are announced through @thetasteofart and @just.huglife.'],
];

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Taste of Art home">
          <span className="brand-mark">T/A</span>
          <span>Taste of Art</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#program">Program</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-ticket" href={TICKETS} target="_blank" rel="noopener noreferrer">Get tickets <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Iconic × HugLife × The Kollective present</p>
          <h1><span>Taste</span><small>of</small><span className="accent">Art</span></h1>
          <p className="hero-thesis">Where the canvas meets the plate.</p>
          <div className="hero-details" aria-label="Event details">
            <div><strong>August 22</strong><span>Saturday · 2026</span></div>
            <div><strong>7 PM–1 AM</strong><span>Atlanta · Location TBA</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={TICKETS} target="_blank" rel="noopener noreferrer">Choose your entry <span>↗</span></a>
            <a className="text-link" href="#experience">Enter the experience <span>↓</span></a>
          </div>
        </div>
        <p className="hero-side-note">Art · Food · Music · Atmosphere</p>
      </section>

      <section className="number-rail" aria-label="Experience overview">
        <div><strong>3</strong><span>Curated courses</span></div>
        <div><strong>3</strong><span>Live installations</span></div>
        <div><strong>50+</strong><span>Featured artists</span></div>
        <div><strong>1</strong><span>Unforgettable evening</span></div>
      </section>

      <section className="manifesto section" id="experience">
        <div className="section-kicker"><span>01</span> The concept</div>
        <div className="manifesto-grid">
          <div>
            <h2>Every dish is<br />a <em>composition.</em></h2>
          </div>
          <div className="manifesto-copy">
            <p className="lead">Taste of Art is a curated collision of culinary excellence and visual art.</p>
            <p>Every course becomes a conversation between chef and canvas. Every room reveals a new chapter. This is not dinner beside an art show—it is one immersive composition designed to be tasted, heard, touched, and felt.</p>
          </div>
        </div>
        <div className="feature-frame">
          <div className="feature-image"><Image src="/flyer3.png" alt="Taste of Art gallery experience" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <div className="feature-copy">
            <span>Six chapters. One gallery.</span>
            <h3>Move through the night.</h3>
            <p>Begin at the table. Follow the sound. Meet the artists. Enter installations that change how you experience both art and food.</p>
            <a className="text-link" href={TICKETS} target="_blank" rel="noopener noreferrer">Reserve on Eventbrite <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="chapters section">
        <div className="section-heading">
          <div className="section-kicker"><span>02</span> The experience</div>
          <h2>Six chapters.<br /><em>One living gallery.</em></h2>
        </div>
        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article key={chapter.number} className="chapter-card">
              <span>{chapter.number}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program section" id="program">
        <div className="program-image" aria-hidden="true"><Image src="/flyer5.png" alt="" fill sizes="(max-width: 900px) 100vw, 44vw" /></div>
        <div className="program-content">
          <div className="section-kicker"><span>03</span> The program</div>
          <h2>The sound of<br /><em>the canvas.</em></h2>
          <div className="lineup-block">
            <span>Music by</span>
            <p>DJ Blackboy · DJ Jae Murphy<br />DJ P Forreal · Manni Supreme</p>
          </div>
          <div className="lineup-block">
            <span>Hosted by</span>
            <p>Ellori · Gooch<br />Not Yo Average Jo · Unruley</p>
          </div>
          <p className="program-note">The complete artist roster and installation schedule will be revealed in chapters.</p>
          <a className="social-link" href="https://instagram.com/thetasteofart" target="_blank" rel="noopener noreferrer">Follow @thetasteofart <span>↗</span></a>
        </div>
      </section>

      <section className="gallery-strip" aria-label="Taste of Art atmosphere">
        {[1, 2, 4, 6].map((number) => (
          <figure key={number}><Image src={`/flyer${number}.png`} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" /></figure>
        ))}
      </section>

      <section className="ticket-section section" id="tickets">
        <div className="ticket-emblem" aria-hidden="true">T/A</div>
        <p className="eyebrow">Your entry is a pour—choose your level.</p>
        <h2>Enter the<br /><em>experience.</em></h2>
        <p>Saturday, August 22 · 7 PM–1 AM · Atlanta</p>
        <a className="button button-primary" href={TICKETS} target="_blank" rel="noopener noreferrer">Get tickets on Eventbrite <span>↗</span></a>
        <small>Limited capacity · Location to be announced</small>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading">
          <div className="section-kicker"><span>04</span> Know before you go</div>
          <h2>Questions,<br /><em>answered.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div><span className="brand-mark">T/A</span><h2>Taste of Art</h2><p>Where the canvas meets the plate.</p></div>
          <div><span>Experience</span><a href="#experience">The concept</a><a href="#program">Program</a><a href="#faq">FAQ</a></div>
          <div><span>Connect</span><a href="https://instagram.com/thetasteofart" target="_blank" rel="noopener noreferrer">@thetasteofart</a><a href="https://instagram.com/just.huglife" target="_blank" rel="noopener noreferrer">@just.huglife</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Taste of Art</span><span>A HugLife Events production · The Kollective Hospitality Group</span></div>
      </footer>

      <a className="mobile-ticket" href={TICKETS} target="_blank" rel="noopener noreferrer">Get tickets <span>↗</span></a>
    </main>
  );
}
