import DirectFormLinks from './DirectFormLinks';

const NEXT_EDITION = '/rsvp';
const DIASPORA_IMAGE = 'https://doctordorsey.com/images/events/diaspora/taste-of-art.jpg';
const galleryImages = [
  DIASPORA_IMAGE,
  'https://doctordorsey.com/images/events/diaspora/main-festival.jpg',
  'https://doctordorsey.com/images/events/diaspora/cultural-experiences.jpg',
  'https://doctordorsey.com/images/events/diaspora/marketplace-community.jpg',
];

const chapters = [
  { number: '01', title: 'The Canvas', copy: 'Live installations unfold in real time. Watch each artist turn a blank surface into the night’s next conversation.' },
  { number: '02', title: 'The Culture', copy: 'The diaspora’s stories, symbols, heritage, and imagination are centered in every creative expression.' },
  { number: '03', title: 'The Artists', copy: 'Meet visual artists creating, exhibiting, and sharing the meaning behind their work.' },
  { number: '04', title: 'The Gallery', copy: 'Explore a festival art show designed to be entered, felt, photographed, and remembered.' },
  { number: '05', title: 'The Marketplace', copy: 'Discover original work and connect directly with participating artists and makers.' },
  { number: '06', title: 'The Community', copy: 'A shared cultural experience for Atlanta’s collectors, creators, families, and culture builders.' },
];

const faqs = [
  ['When is the next Taste of Art?', 'The next edition is being curated now. Join the priority list for the date, venue, artist announcements, and first access.'],
  ['What was the 2026 edition?', 'Taste of Art appeared inside Diaspora in ATL at Morris Brown College on July 25, 2026.'],
  ['What does the experience include?', 'Each edition brings visual art, live creation, cultural storytelling, artist connection, marketplace activations, and community programming into one living gallery.'],
  ['What should I wear?', 'Come festival-ready and expressive. Cultural style, color, and camera-ready looks are encouraged.'],
  ['Can artists participate?', 'Artist and marketplace opportunities are announced through @thetasteofart and @just.huglife.'],
];

export default function Page() {
  return (
    <main id="main-content">
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
        <a className="header-ticket" href={NEXT_EDITION}>Join the priority list <span>→</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" style={{backgroundImage:`url(${DIASPORA_IMAGE})`}} />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Iconic × HugLife × The Kollective present</p>
          <h1><span>Taste</span><small>of</small><span className="accent">Art</span></h1>
          <p className="hero-thesis">Where culture meets canvas.</p>
          <div className="hero-details" aria-label="Event details">
            <div><strong>Next</strong><span>Edition being curated</span></div>
            <div><strong>ATL</strong><span>Artists · culture · community</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={NEXT_EDITION}>Get first access <span>→</span></a>
            <a className="text-link" href="#experience">Enter the experience <span>↓</span></a>
          </div>
        </div>
        <p className="hero-side-note">Taste of Art × Diaspora in ATL</p>
      </section>

      <section className="number-rail" aria-label="Experience overview">
        <div><strong>1</strong><span>Cultural art show</span></div>
        <div><strong>LIVE</strong><span>Artist experiences</span></div>
        <div><strong>ATL</strong><span>Born in Atlanta</span></div>
        <div><strong>NEXT</strong><span>Edition in development</span></div>
      </section>

      <section className="manifesto section" id="experience">
        <div className="section-kicker"><span>01</span> The concept</div>
        <div className="manifesto-grid">
          <div>
            <h2>Every canvas<br />holds a <em>story.</em></h2>
          </div>
          <div className="manifesto-copy">
            <p className="lead">Taste of Art is where culture, heritage, and visual expression meet.</p>
            <p>Artists transform the room into a living gallery. Original work, cultural storytelling, live creativity, and community connection come together in an experience designed to be entered—not simply observed.</p>
          </div>
        </div>
        <div className="feature-frame">
          <div className="feature-image" role="img" aria-label="Taste of Art at Diaspora in ATL" style={{backgroundImage:`url(${DIASPORA_IMAGE})`}} />
          <div className="feature-copy">
            <span>Inside Diaspora in ATL</span>
            <h3>Culture on canvas.</h3>
            <p>Meet the artists, experience cultural storytelling, and discover original work while music, food, fashion, and community move around you.</p>
            <a className="text-link" href={NEXT_EDITION}>Join the next chapter <span>→</span></a>
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
        <div className="program-image" aria-hidden="true" style={{backgroundImage:`url(${DIASPORA_IMAGE})`}} />
        <div className="program-content">
          <div className="section-kicker"><span>03</span> The program</div>
          <h2>Art inside<br /><em>the festival.</em></h2>
          <div className="lineup-block">
            <span>Experience</span>
            <p>Live art · Cultural exhibitions<br />Original works · Artist marketplace</p>
          </div>
          <div className="lineup-block">
            <span>Festival setting</span>
            <p>Live music · Global food<br />Fashion · Dance · Community</p>
          </div>
          <p className="program-note">The next artist roster, venue, and activation schedule will be announced to the priority list and through Taste of Art.</p>
          <a className="social-link" href="https://instagram.com/thetasteofart" target="_blank" rel="noopener noreferrer">Follow @thetasteofart <span>↗</span></a>
        </div>
      </section>

      <section className="gallery-strip" aria-label="Taste of Art atmosphere">
        {galleryImages.map((image) => (
          <figure key={image} style={{backgroundImage:`url(${image})`}} />
        ))}
      </section>

      <section className="ticket-section section" id="tickets">
        <div className="ticket-emblem" aria-hidden="true">T/A</div>
        <p className="eyebrow">The next canvas is opening</p>
        <h2>Enter the<br /><em>experience.</em></h2>
        <p>Join the priority list for the next date, venue, artists, and first access.</p>
        <a className="button button-primary" href={NEXT_EDITION}>Join the priority list <span>→</span></a>
        <DirectFormLinks brandSlug="taste-of-art" />
        <small>Atlanta, Georgia · Artists, partners, and culture builders welcome</small>
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
          <div><span className="brand-mark">T/A</span><h2>Taste of Art</h2><p>Where culture meets canvas.</p></div>
          <div><span>Experience</span><a href="#experience">The concept</a><a href="#program">Program</a><a href="#faq">FAQ</a></div>
          <div><span>Connect</span><a href="/rsvp">First access</a><a href="/contact">Artists, vendors & sponsors</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/accessibility">Accessibility</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Taste of Art</span><span>A HugLife Events production · The Kollective Hospitality Group</span></div>
      </footer>

      <a className="mobile-ticket" href={NEXT_EDITION}>Get first access <span>→</span></a>
    </main>
  );
}
