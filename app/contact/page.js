import TrustPage from "../TrustPage";
export const metadata = { title: "Contact | Taste of Art", description: "Contact Taste of Art about future editions, artists, vendors, sponsors, press, or accessibility." };
export default function Contact() { return <TrustPage eyebrow="Connect" title="Enter the next chapter." intro="The next edition is being curated. Choose the clearest route and include your role, city, timing, and what you hope to build with us.">
  <section><h2>First access</h2><p>Receive the confirmed date, city, venue, and access details when they are ready.</p><a className="trust-cta" href="/rsvp">Join the priority list</a></section>
  <section><h2>Artists, vendors and sponsors</h2><p>Use the event forms hub to introduce your work, business, or partnership idea. A submission is not an acceptance or booking.</p><a className="trust-cta" href="https://khg-forms.vercel.app/events/taste-of-art" target="_blank" rel="noopener noreferrer">Open event inquiries ↗</a></section>
  <section><h2>Support and accessibility</h2><p>Tell us what you need through the general event inquiry route. Confirmed-event accommodation details will be published with the venue information.</p></section>
</TrustPage>; }
