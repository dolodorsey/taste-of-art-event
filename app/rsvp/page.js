import TrustPage from "../TrustPage";
const FORM = "https://khg-forms.vercel.app/events/taste-of-art/rsvp";
export const metadata = { title: "First Access | Taste of Art", description: "Join the priority list for the next Taste of Art edition." };
export default function FirstAccess() { return <TrustPage eyebrow="Next edition" title="Be first in the room." intro="No date, venue, or ticket is being promised yet. Join the priority list and we will share confirmed details when the next edition is ready.">
  <section><h2>What you will receive</h2><p>Confirmed edition announcements, city and venue information, access timing, and essential attendance details.</p></section>
  <section><h2>What this is not</h2><p>Joining the list is not a ticket, reservation, purchase, or guarantee of admission.</p></section>
  <section><h2>Continue securely</h2><p>The current submission form is operated on The Kollective’s form service and opens in a new tab.</p><a className="trust-cta" href={FORM} target="_blank" rel="noopener noreferrer">Join the priority list ↗</a></section>
</TrustPage>; }
