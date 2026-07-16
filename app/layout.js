import './globals.css';

const TICKETS = 'https://www.eventbrite.com/e/taste-of-art-art-show-iii-tickets-1985847798222';
const EVENT_IMAGE = 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1180619722%2F2574990468831%2F1%2Foriginal.20260324-235554?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C1080&s=885ab80ee19fec1e7839b2d7a1d98c2c';

export const metadata = {
  metadataBase: new URL('https://thatasteofart.com'),
  title: 'Taste of Art: Art Show III | Atlanta · August 22, 2026',
  description: 'Three courses. Three live art installations. One unforgettable evening where the canvas meets the plate.',
  openGraph: {
    title: 'Taste of Art: Art Show III',
    description: 'Art, food, music, and atmosphere collide in Atlanta on August 22, 2026.',
    url: 'https://thatasteofart.com',
    siteName: 'Taste of Art',
    type: 'website',
    images: [{ url: EVENT_IMAGE, width: 940, height: 991, alt: 'Taste of Art: Art Show III' }],
  },
  twitter: { card: 'summary_large_image', title: 'Taste of Art: Art Show III', description: 'Where the canvas meets the plate. Atlanta · August 22, 2026.', images: [EVENT_IMAGE] },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Taste of Art: Art Show III',
  description: 'Three courses. Three live art installations. One unforgettable evening where the canvas meets the plate.',
  url: 'https://thatasteofart.com',
  image: EVENT_IMAGE,
  startDate: '2026-08-22T19:00:00-04:00',
  endDate: '2026-08-23T01:00:00-04:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: { '@type': 'Place', name: 'Location to be announced', address: { '@type': 'PostalAddress', addressLocality: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' } },
  organizer: { '@type': 'Organization', name: 'HugLife Events', url: 'https://www.eventbrite.com/o/good-times-121163507813' },
  offers: { '@type': 'Offer', url: TICKETS, availability: 'https://schema.org/InStock', priceCurrency: 'USD' },
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
      <body>{children}</body>
    </html>
  );
}
