export default function TrustPage({ eyebrow, title, intro, children }) {
  return (
    <main id="main-content" className="trust-page">
      <a className="trust-home" href="/">Taste of Art</a>
      <header><p>{eyebrow}</p><h1>{title}</h1><div>{intro}</div></header>
      <article>{children}</article>
      <nav aria-label="Trust and support"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a><a href="/accessibility">Accessibility</a></nav>
    </main>
  );
}
