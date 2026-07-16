import './globals.css';
import './event-overrides.css';

const EVENTBRITE = 'https://www.eventbrite.com/o/good-times-121163507813';
const EVENT_IMAGE = 'https://doctordorsey.com/images/events/diaspora/taste-of-art.jpg';

export const metadata = {
  metadataBase: new URL('https://thatasteofart.com'),
  title: 'Taste of Art at Diaspora in ATL | July 25, 2026',
  description: 'Where culture meets canvas. Experience Taste of Art inside Diaspora in ATL at Morris Brown College on July 25, 2026.',
  openGraph: {
    title: 'Taste of Art at Diaspora in ATL',
    description: 'A cultural art show inside Diaspora in ATL at Morris Brown College on July 25, 2026.',
    url: 'https://thatasteofart.com',
    siteName: 'Taste of Art',
    type: 'website',
    images: [{ url: EVENT_IMAGE, width: 958, height: 1200, alt: 'Taste of Art at Diaspora in ATL' }],
  },
  twitter: { card: 'summary_large_image', title: 'Taste of Art at Diaspora in ATL', description: 'Where culture meets canvas. July 25 at Morris Brown College.', images: [EVENT_IMAGE] },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Taste of Art at Diaspora in ATL',
  description: 'A cultural art show inside the Diaspora in ATL Music & Food Festival.',
  url: 'https://thatasteofart.com',
  image: EVENT_IMAGE,
  startDate: '2026-07-25T17:00:00-04:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: { '@type': 'Place', name: 'Morris Brown College', address: { '@type': 'PostalAddress', addressLocality: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' } },
  organizer: { '@type': 'Organization', name: 'HugLife Events', url: 'https://www.eventbrite.com/o/good-times-121163507813' },
  offers: { '@type': 'Offer', url: EVENTBRITE, availability: 'https://schema.org/InStock', priceCurrency: 'USD' },
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
