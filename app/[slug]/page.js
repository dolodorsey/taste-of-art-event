import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sitePages, sitePageKeys } from '../sitePages';
import styles from './page.module.css';

const archive = [
  ['/flyer1.png', 'Taste of Art', 'Program identity'],
  ['/flyer2.png', 'Diaspora in ATL', 'Festival context'],
  ['/flyer3.png', 'The canvas', 'Creative direction'],
  ['/flyer4.png', 'Culture in motion', 'Campaign study'],
  ['/flyer5.png', 'Atlanta edition', 'Archive material'],
  ['/flyer6.png', 'The next frame', 'Future-edition study'],
];

const disciplines = ['Visual art', 'Live painting', 'Photography', 'Sculpture', 'Fashion', 'Film', 'Food', 'Music', 'Movement', 'Spoken word', 'Design', 'Cultural research'];

function Header() {
  return <header className={styles.header}>
    <Link href="/" className={styles.brand}><img src="/logo.png" alt="" /><span>Taste of Art</span></Link>
    <nav><Link href="/about">About</Link><Link href="/experience">Experience</Link><Link href="/artists">Artists</Link><Link href="/partners">Partners</Link><Link href="/gallery">Archive</Link><Link href="/future">Future</Link></nav>
    <Link className={styles.headerAction} href="/forms">Participate <span>↗</span></Link>
  </header>;
}

function Footer() {
  return <footer className={styles.footer}>
    <div><img src="/logo.png" alt="" /><strong>Taste of Art</strong><p>Culture is not decoration. It is the work.</p></div>
    <div><span>Explore</span><Link href="/experience">The experience</Link><Link href="/artists">Artist pathway</Link><Link href="/gallery">2026 archive</Link></div>
    <div><span>Build with us</span><Link href="/partners">Partnerships</Link><Link href="/future">Future editions</Link><Link href="/forms">Choose a form</Link></div>
  </footer>;
}

function Hero({ page, slug }) {
  return <section className={`${styles.hero} ${styles[`hero_${slug}`] || ''}`}>
    <div className={styles.heroIndex}>Taste of Art / {slug}</div>
    <p>{page.kicker}</p>
    <h1>{page.title}</h1>
    <div className={styles.heroBottom}><span>{page.intro}</span><small>Atlanta · Archive 2026<br />Next edition in development</small></div>
  </section>;
}

function About({ page }) {
  return <>
    <section className={styles.manifesto}><p>Our position</p><blockquote>Art is not a room inside culture. It is how culture remembers, argues, celebrates, mourns, sells, teaches, and imagines.</blockquote></section>
    <section className={styles.split}>
      <div className={styles.posterStack}>{archive.slice(0,3).map(([src], i) => <img key={src} src={src} alt="" style={{'--i': i}} />)}</div>
      <div className={styles.editorial}><small>Why this platform exists</small><h2>A living cultural record.</h2><p>Taste of Art brings visual work into direct conversation with food, music, fashion, performance, history, commerce, and place. Each edition is built around a cultural thesis—not a generic event format.</p><dl><div><dt>01</dt><dd>Credit the artist and the lineage.</dd></div><div><dt>02</dt><dd>Make the work legible without flattening it.</dd></div><div><dt>03</dt><dd>Build a market without turning culture into scenery.</dd></div></dl></div>
    </section>
    <EditorialGrid sections={page.sections} />
  </>;
}

function Experience({ page }) {
  const acts = [['Arrive','A threshold that establishes place, sound, and cultural context.'],['Encounter','Artworks and installations meet the audience before commercial messaging.'],['Witness','Live creation, performance, and conversation reveal process.'],['Taste','Hospitality extends the curatorial argument through chefs and makers.'],['Collect','Guests meet artists, editions, books, objects, and responsible sales paths.'],['Remember','Credits, documentation, and archive records continue after the room closes.']];
  return <>
    <section className={styles.sequence}><div><small>The guest journey</small><h2>Six acts.<br />No filler.</h2></div><ol>{acts.map(([title,copy],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></section>
    <section className={styles.fullPoster}><img src="/flyer4.png" alt="Taste of Art campaign artwork" /><div><small>Experience principle</small><h2>Every sense should advance the story.</h2><p>Programming, lighting, sound, food, staging, wayfinding, sales, and documentation must feel like one authored experience.</p></div></section>
    <EditorialGrid sections={page.sections} />
  </>;
}

function Artists({ page }) {
  return <>
    <section className={styles.disciplines}><p>Disciplines in conversation</p><div>{disciplines.map((item,i)=><span key={item}>{String(i+1).padStart(2,'0')} {item}</span>)}</div></section>
    <section className={styles.artistPath}><div><small>Contributor pathway</small><h2>Submit less.<br />Say more.</h2><p>A strong submission shows the work, its context, its readiness, and what the audience should understand—not only follower count.</p><Link href="/forms">Open artist submission ↗</Link></div><ol><li><b>01</b><span>Portfolio</span><p>Five to ten relevant works with titles, year, medium, and dimensions.</p></li><li><b>02</b><span>Context</span><p>A concise statement connecting the work to the edition’s cultural thesis.</p></li><li><b>03</b><span>Production</span><p>Installation, power, access, transport, performance, and staffing needs.</p></li><li><b>04</b><span>Terms</span><p>Credit, sales, fees, rights, documentation, and timeline confirmed in writing.</p></li></ol></section>
    <EditorialGrid sections={page.sections} />
  </>;
}

function Partners({ page }) {
  const roles=[['Presenting partner','Supports the edition’s core production and artist program.'],['Artist fund','Directly underwrites commissions, fees, documentation, or travel.'],['Place partner','Provides a venue, city relationship, neighborhood context, and operating support.'],['Culture partner','Contributes knowledge, collections, archives, education, or community trust.'],['Hospitality partner','Extends the curatorial idea through food, beverage, and guest care.'],['Media partner','Documents and distributes the work with full credit and context.']];
  return <>
    <section className={styles.partnerIntro}><small>Value exchange</small><h2>Visibility is not the product.<br />Cultural value is.</h2><p>Every partnership must make the artist experience, public experience, or archive stronger. A logo alone is not an activation.</p></section>
    <section className={styles.roleGrid}>{roles.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</section>
    <section className={styles.partnerCta}><div><small>A useful proposal includes</small><p>Audience · contribution · budget · rights · responsibilities · timing · measurement · cultural relevance</p></div><Link href="/forms">Start a partnership inquiry ↗</Link></section>
    <EditorialGrid sections={page.sections} />
  </>;
}

function Gallery() {
  return <>
    <section className={styles.archiveLead}><div><small>Archive status</small><h2>A record in progress.</h2></div><p>The current archive contains approved campaign material. Artist portraits, artwork records, installation views, performance stills, and complete credits will be added only after permissions are confirmed.</p></section>
    <section className={styles.archiveGrid}>{archive.map(([src,title,type],i)=><figure key={src} className={i===0||i===5?styles.wide:''}><img src={src} alt={`${title} — ${type}`} /><figcaption><span>{String(i+1).padStart(2,'0')} / 06</span><strong>{title}</strong><small>{type}</small></figcaption></figure>)}</section>
    <section className={styles.archiveIndex}><small>Archive record requirements</small><div><span>Artist or creator</span><span>Work title and year</span><span>Medium and dimensions</span><span>Edition and city</span><span>Photo or video credit</span><span>Usage permission</span></div><Link href="/forms">Correct or contribute a record ↗</Link></section>
  </>;
}

function Future() {
  return <>
    <section className={styles.futureCanvas}><div><span>Next</span><small>Edition status</small></div><h2>Not announced<br />until it is real.</h2><p>A date is not published until the city, venue, program scope, budget, participation lanes, and operating team are confirmed.</p></section>
    <section className={styles.roadmap}>{[['01','Close the archive','Confirm credits, permissions, media, and lessons from 2026.'],['02','Choose the thesis','Define the cultural question the next edition will explore.'],['03','Confirm place','Select city, venue, neighborhood relationship, and operating window.'],['04','Commission the room','Build the artist, hospitality, performance, learning, and marketplace program.'],['05','Open participation','Publish clear artist, partner, vendor, volunteer, media, and guest paths.'],['06','Release the edition','Launch only when the public promise matches the operating reality.']].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</section>
    <section className={styles.cityBrief}><div><small>City and venue brief</small><h2>Bring more than a room.</h2></div><ul><li>Capacity and accessibility</li><li>Technical and installation capabilities</li><li>Neighborhood and cultural context</li><li>Calendar and load-in windows</li><li>Commercial expectations</li><li>Local institutional relationships</li></ul><Link href="/forms">Propose a city or venue ↗</Link></section>
  </>;
}

function EditorialGrid({sections}) {
  return <section className={styles.editorialGrid}>{sections.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{body}</p></article>)}</section>;
}

export function generateStaticParams() { return sitePageKeys.map((slug) => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page=sitePages[slug]; return page?{title:`${page.title} — Taste of Art`,description:page.intro}:{}; }

export default async function SitePage({ params }) {
  const { slug } = await params; const page=sitePages[slug]; if(!page) notFound();
  const body = slug==='about'?<About page={page}/>:slug==='experience'?<Experience page={page}/>:slug==='artists'?<Artists page={page}/>:slug==='partners'?<Partners page={page}/>:slug==='gallery'?<Gallery/>:<Future/>;
  return <main className={styles.page}><Header/><Hero page={page} slug={slug}/>{body}<section className={styles.finalCta}><small>Current focus</small><h2>Archive the work.<br />Shape what comes next.</h2><Link href="/forms">Choose your path ↗</Link></section><Footer/></main>;
}
