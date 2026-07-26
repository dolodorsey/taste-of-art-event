'use client';

const FORMS_ORIGIN = 'https://khg-forms.vercel.app';

export default function DirectFormLinks({ brandSlug, compact = false }) {
  const base = `${FORMS_ORIGIN}/events/${brandSlug}`;
  const links = [
    ['Free RSVP', `${base}/rsvp`],
    ['Celebrate a Birthday', `${base}/birthdays`],
    ['Become a Vendor', `${base}/vendor`],
  ];

  return (
    <div
      aria-label="Event request forms"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: compact ? 'flex-start' : 'center',
        gap: compact ? 10 : 16,
        marginTop: compact ? 0 : 20,
      }}
    >
      {links.map(([label, href]) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: compact ? '8px 0' : '11px 14px',
            borderBottom: '1px solid rgba(200,155,73,.7)',
            color: 'inherit',
            fontFamily: 'var(--mono)',
            fontSize: compact ? 8 : 9,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          {label} ↗
        </a>
      ))}
    </div>
  );
}
