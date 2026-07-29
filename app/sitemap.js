export const dynamic = 'force-static';

export default function sitemap() {
  const origin = 'https://thatasteofart.com';
  return [
    { url: origin, changeFrequency: 'weekly', priority: 1 },
    { url: `${origin}/rsvp`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${origin}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${origin}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${origin}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${origin}/accessibility`, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
