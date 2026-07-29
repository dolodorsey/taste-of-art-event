import TrustPage from "../TrustPage";
export const metadata = { title: "Accessibility | Taste of Art", description: "Taste of Art digital and event accessibility commitment." };
export default function Accessibility() { return <TrustPage eyebrow="Everyone belongs" title="Access is part of the art." intro="We are working toward a website and event experience that welcomes disabled guests, artists, partners, and team members.">
  <section><h2>Digital experience</h2><p>We support keyboard navigation, visible focus, reduced-motion preferences, semantic structure, and responsive layouts. Please report any barrier through our contact route.</p></section>
  <section><h2>Event access</h2><p>Venue-specific mobility, seating, sensory, communication, restroom, transportation, and companion information will be published once the next venue is confirmed.</p></section>
  <section><h2>Request support</h2><p>Contact us early with an access request. We will review it with the venue and respond with what can be arranged.</p><a className="trust-cta" href="/contact">Contact the team</a></section>
</TrustPage>; }
