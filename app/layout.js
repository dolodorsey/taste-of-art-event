export const metadata = {
  title: 'TASTE OF ART | A Night of Art, Elegance & Social Energy · Atlanta',
  description: 'Art meets culinary craft. Live painting, gourmet bites, live jazz. A KHG HugLife Event.',
  openGraph: {
    title: 'TASTE OF ART | Art Meets Culinary Craft',
    description: 'An immersive experience where art and food collide. Curated artists, curated chefs, curated nights.',
    url: 'https://tasteofart.com',
    type: 'website',
    images: ['https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/taste_of_art/01_logos/TASTE_OF_ART_LOGO.png'],
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800;900&family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Taste of Art",
              "description": "An immersive experience where art and food collide. Curated artists, curated chefs, curated nights.",
              "url": "https://tasteofart.com",
              "image": "https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/taste_of_art/01_logos/TASTE_OF_ART_LOGO.png",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {"@type": "Place", "name": "Atlanta, GA", "address": {"@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA"}},
              "organizer": {"@type": "Organization", "name": "HugLife Events", "url": "https://huglife.com"},
              "performer": {"@type": "Organization", "name": "Curated Local Artists & Chefs"}
            })
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#080808' }}>
        {children}
      </body>
    </html>
  )
}
