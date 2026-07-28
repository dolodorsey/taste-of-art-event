import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sitePages, sitePageKeys } from '../sitePages';
import styles from './page.module.css';

export function generateStaticParams() {
  return sitePageKeys.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = sitePages[slug];
  return page ? { title: `${page.title} — Taste of Art`, description: page.intro } : {};
}

export default async function SitePage({ params }) {
  const { slug } = await params;
  const page = sitePages[slug];
  if (!page) notFound();

  return <main className={styles.page}>
    <header>
      <Link href="/" className={styles.brand}><img src="/logo.png" alt="" />Taste of Art</Link>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/gallery">Archive</Link>
        <Link href="/future">Future</Link>
      </nav>
    </header>
    <section className={styles.hero}>
      <p>{page.kicker}</p>
      <h1>{page.title}</h1>
      <span>{page.intro}</span>
      <div><Link href="/forms">Choose a form</Link><Link href="/future">Future editions</Link></div>
    </section>
    <section className={styles.grid}>
      {page.sections.map(([title, body], index) => <article key={title}>
        <small>{String(index + 1).padStart(2, '0')}</small>
        <h2>{title}</h2>
        <p>{body}</p>
      </article>)}
    </section>
    <section className={styles.paths}>
      {[['Artists & makers','/artists'],['Partners & sponsors','/partners'],['Archive & gallery','/gallery'],['Future editions','/future']].map(([label,href]) =>
        <Link key={href} href={href}>{label}<span>↗</span></Link>
      )}
    </section>
    <section className={styles.cta}>
      <p>Current focus</p>
      <h2>Archive the work. Shape what comes next.</h2>
      <Link href="/forms">Get involved</Link>
    </section>
    <footer>© 2026 Taste of Art · Culture, heritage, and visual expression.</footer>
  </main>;
}
