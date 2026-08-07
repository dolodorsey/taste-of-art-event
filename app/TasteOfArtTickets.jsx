'use client';

import { useEffect, useMemo, useState } from 'react';

const CATALOG_URL = 'https://dzlmtvodpyhetvektfuo.supabase.co/functions/v1/khg-payment-catalog';
const CHECKOUT_URL = 'https://dzlmtvodpyhetvektfuo.supabase.co/functions/v1/khg-payment-checkout';
const RETURN_ORIGIN = 'https://thatasteofart.com';

function money(cents) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((Number(cents) || 0) / 100);
}

function eventDate(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T12:00:00Z`));
}

export default function TasteOfArtTickets() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState('');
  const [city, setCity] = useState('all');

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        const response = await fetch(`${CATALOG_URL}?brand_key=taste_of_art&limit=20`, { cache: 'no-store' });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ticket inventory is unavailable.');
        if (live) setEvents(data.events || []);
      } catch (err) {
        if (live) setError(err instanceof Error ? err.message : 'Ticket inventory is unavailable.');
      } finally {
        if (live) setLoading(false);
      }
    })();
    return () => { live = false; };
  }, []);

  const cities = useMemo(() => ['all', ...new Set(events.map((event) => event.city).filter(Boolean))], [events]);
  const visible = city === 'all' ? events : events.filter((event) => event.city === city);

  async function buy(event, tier) {
    const key = `${event.id}:${tier.id}`;
    setBusy(key);
    setError('');
    try {
      const response = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Origin: window.location.origin },
        body: JSON.stringify({
          action: 'ticket',
          ticket_tier_id: tier.id,
          quantity: 1,
          source_app: 'taste-of-art-event',
          return_brand_key: 'taste_of_art',
          return_origin: window.location.origin || RETURN_ORIGIN,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.checkout_url) throw new Error(data.error || 'Secure checkout is unavailable.');
      window.location.assign(data.checkout_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Secure checkout is unavailable.');
      setBusy('');
    }
  }

  if (loading) {
    return <div className="toa-ticket-state">Loading live ticket inventory…</div>;
  }

  if (!events.length) {
    return (
      <div className="toa-ticket-state">
        <strong>Paid ticket inventory is not on sale yet.</strong>
        <span>Free RSVP and participation forms remain available below.</span>
      </div>
    );
  }

  return (
    <div className="toa-ticket-shell">
      {cities.length > 2 && (
        <div className="toa-ticket-cities" aria-label="Filter ticket cities">
          {cities.map((item) => (
            <button key={item} type="button" className={city === item ? 'active' : ''} onClick={() => setCity(item)}>
              {item === 'all' ? 'All cities' : item}
            </button>
          ))}
        </div>
      )}

      {error && <p className="toa-ticket-error" role="alert">{error}</p>}

      <div className="toa-ticket-events">
        {visible.map((event) => (
          <article className="toa-ticket-event" key={event.id}>
            <div className="toa-ticket-event-head">
              <div>
                <span>{eventDate(event.event_date)} · {event.city}</span>
                <h3>{event.name}</h3>
                {event.venue && <p>{event.venue}</p>}
              </div>
              <em>Stripe secured</em>
            </div>

            <div className="toa-ticket-tiers">
              {event.ticket_tiers.map((tier) => {
                const key = `${event.id}:${tier.id}`;
                const isBusy = busy === key;
                return (
                  <button key={tier.id} type="button" disabled={Boolean(busy)} onClick={() => buy(event, tier)}>
                    <span><strong>{tier.tier_label}</strong><small>{tier.capacity ? `${tier.capacity} capacity` : 'Live inventory'}</small></span>
                    <b>{money(tier.price_cents)}</b>
                    <i>{isBusy ? 'Opening…' : 'Buy ticket ↗'}</i>
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
