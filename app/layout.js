import './globals.css';
import './event-overrides.css';

const EVENT_IMAGE = 'https://doctordorsey.com/images/events/diaspora/taste-of-art.jpg';
const TICKETS_URL = 'https://thatasteofart.com/tickets';

export const metadata = {
  metadataBase: new URL('https://thatasteofart.com'),
  title: 'Taste of Art | Atlanta + Miami 2026',
  description: 'Where culture meets canvas. Explore upcoming Taste of Art editions and buy official tickets through secure Stripe checkout.',
  openGraph: {
    title: 'Taste of Art | Where culture meets canvas',
    description: 'Upcoming Taste of Art editions in Atlanta and Miami with official live ticket inventory.',
    url: 'https://thatasteofart.com',
    siteName: 'Taste of Art',
    type: 'website',
    images: [{ url: EVENT_IMAGE, width: 958, height: 1200, alt: 'Taste of Art' }],
  },
  twitter: { card: 'summary_large_image', title: 'Taste of Art', description: 'Where culture meets canvas. Official 2026 ticket inventory is live.', images: [EVENT_IMAGE] },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  name: 'Taste of Art',
  description: 'A cultural art experience produced across Atlanta and Miami.',
  url: 'https://thatasteofart.com',
  image: EVENT_IMAGE,
  organizer: { '@type': 'Organization', name: 'Taste of Art × The Kollective', url: 'https://thatasteofart.com' },
  offers: { '@type': 'AggregateOffer', url: TICKETS_URL, lowPrice: '15.00', highPrice: '35.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=DM+Mono:wght@400;500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      </head>
      <body>
        {children}
        <a
          href="/tickets"
          aria-label="Buy Taste of Art tickets"
          style={{ position: 'fixed', right: 18, bottom: 18, zIndex: 90, padding: '13px 18px', borderRadius: 999, background: '#df693b', color: '#fff7f0', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '.12em', fontSize: 10, fontWeight: 700, boxShadow: '0 14px 40px rgba(0,0,0,.28)' }}
        >
          Tickets ↗
        </a>
      </body>
    </html>
  );
}
