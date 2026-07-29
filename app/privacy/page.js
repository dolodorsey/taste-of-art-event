import TrustPage from "../TrustPage";
export const metadata = { title: "Privacy | Taste of Art", description: "How Taste of Art handles information submitted through its event and partnership forms." };
export default function Privacy() { return <TrustPage eyebrow="Trust" title="Privacy" intro="We use the information you share to answer event, artist, vendor, sponsor, and first-access requests.">
  <section><h2>Information you provide</h2><p>Forms may collect your name, contact details, organization, creative or business profile, event interests, and any message you choose to share.</p></section>
  <section><h2>How it is used</h2><p>We use information to respond, curate future editions, evaluate opportunities, support attendees and partners, maintain records, prevent misuse, and understand campaign performance.</p></section>
  <section><h2>Service providers</h2><p>Trusted hosting, form, communications, analytics, and customer-management providers may process information for us. We do not sell personal information.</p></section>
  <section><h2>Your choices</h2><p>Use our contact page to request access, correction, or deletion. Some records may be retained for security, legal, or transaction purposes.</p></section>
  <section><h2>Updates</h2><p>This version is effective July 27, 2026 and may change as future editions develop.</p></section>
</TrustPage>; }
