import './globals.css';
import './event-overrides.css';
import './a11y.css';
import { Analytics } from '@vercel/analytics/next';

const EVENT_IMAGE = 'https://doctordorsey.com/images/events/diaspora/taste-of-art.jpg';

export const metadata = {
  metadataBase: new URL('https://thatasteofart.com'),
  title: 'Taste of Art — Where Culture Meets Canvas',
  description: 'Atlanta’s living gallery of visual art, cultural storytelling, live creativity, and community. Join the next Taste of Art edition.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Taste of Art — Where Culture Meets Canvas',
    description: 'Enter Atlanta’s living gallery and get first access to the next edition.',
    url: 'https://thatasteofart.com',
    siteName: 'Taste of Art',
    type: 'website',
    images: [{ url: EVENT_IMAGE, width: 958, height: 1200, alt: 'Taste of Art at Diaspora in ATL' }],
  },
  twitter: { card: 'summary_large_image', title: 'Taste of Art — Where Culture Meets Canvas', description: 'Get first access to the next Atlanta edition.', images: [EVENT_IMAGE] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Taste of Art',
  description: 'A living cultural art experience produced in Atlanta.',
  url: 'https://thatasteofart.com',
  logo: EVENT_IMAGE,
  sameAs: ['https://instagram.com/thetasteofart'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=DM+Mono:wght@400;500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
