import { useEffect, useState } from 'react'
import { profile, stats, projects, caseStudies, experience, skills, certifications, education } from './data.js'
import ProjectVisual from './components/ProjectVisual.jsx'
import GitHubRepos from './components/GitHubRepos.jsx'
import { ArrowUpRight, Mail, Phone, Pin, GitHub, LinkedIn, Menu, Close, Award, Cap } from './components/Icons.jsx'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`header ${scrolled ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label="Back to top">
          <span className="logo__mark">AS</span>
          <span className="logo__name">Albert Sanjay</span>
        </a>
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a className="btn btn--gold btn--sm" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>Hire me</a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden />
      <div className="container hero__inner">
        <p className="eyebrow"><span className="pulse" /> Available for freelance &amp; full-time roles</p>
        <h1>
          Hi, I’m {profile.firstName}.<br />
          I engineer <em>reliable systems</em> that businesses run on.
        </h1>
        <p className="hero__lead">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--gold" href="#projects">View my work <ArrowUpRight /></a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer"><GitHub /> GitHub</a>
          {profile.cv && <a className="btn btn--ghost" href={profile.cv} download>Download CV</a>}
        </div>
        <dl className="hero__stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function SectionHead({ index, kicker, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="kicker"><span>{index}</span>{kicker}</p>
      <h2>{title}</h2>
      {children && <p className="section-head__sub">{children}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="section section--ivory" id="about">
      <div className="container about">
        <SectionHead index="01" kicker="About" title="Backend-minded, product-focused." />
        <div className="about__body reveal">
          {profile.summary.map((p, i) => <p key={i}>{p}</p>)}
          <ul className="about__facts">
            <li><Pin /> {profile.location}</li>
            <li><Award /> AWS Solutions Architect — Associate</li>
            <li><Cap /> BSc Computer Science, KNUST</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section section--ivory section--tight-top" id="projects">
      <div className="container">
        <SectionHead index="02" kicker="Selected work" title="Live projects">
          Products and client builds you can open and try today.
        </SectionHead>
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.id} className={`project reveal ${i % 2 ? 'project--flip' : ''}`}>
              <a href={p.url} target="_blank" rel="noreferrer" className="project__visual" aria-label={`Open ${p.name}`}>
                <ProjectVisual project={p} image={p.image} />
              </a>
              <div className="project__info">
                <div className="project__meta">
                  <span className={`status ${p.status === 'Live' ? 'status--live' : 'status--dev'}`}>{p.status}</span>
                  <span>{p.kind}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="project__summary">{p.summary}</p>
                <ul className="project__details">
                  {p.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <a className="link-arrow" href={p.url} target="_blank" rel="noreferrer">
                  Visit {p.domain} <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="subhead reveal">
          <h3>Professional work</h3>
          <p>Internal systems built for employers and their clients — not publicly accessible, so here’s what they do.</p>
        </div>
        <div className="cases">
          {caseStudies.map((c) => (
            <article key={c.title} className="case reveal">
              <p className="case__org">{c.org}</p>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              <div className="tags tags--sm">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function OpenSource() {
  return (
    <section className="section section--dark" id="github">
      <div className="container">
        <SectionHead index="03" kicker="Code" title="On GitHub">
          My latest public repositories, pulled live from{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.githubHandle}</a>.
        </SectionHead>
        <div className="reveal">
          <GitHubRepos user={profile.githubHandle} url={profile.github} />
        </div>
        <a className="btn btn--ghost github-all reveal" href={profile.github} target="_blank" rel="noreferrer">
          <GitHub /> See all repositories <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section section--ivory" id="experience">
      <div className="container">
        <SectionHead index="04" kicker="Experience" title="Where I’ve worked" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline__item reveal">
              <div className="timeline__when">{job.period}</div>
              <div className="timeline__card">
                <h3>{job.role} <span>· {job.company}</span></h3>
                <ul>{job.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section--ivory section--tight-top" id="skills">
      <div className="container">
        <SectionHead index="05" kicker="Toolkit" title="Skills & credentials" />
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skill reveal">
              <h4>{s.group}</h4>
              <div className="tags">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="creds">
          <div className="cred reveal">
            <h4><Award /> Certifications</h4>
            {certifications.map((c) => (
              <div key={c.name} className="cred__row"><span>{c.name}</span><b>{c.year}</b></div>
            ))}
          </div>
          <div className="cred reveal">
            <h4><Cap /> Education</h4>
            <div className="cred__row"><span>{education.degree}<br /><small>{education.school}</small></span><b>{education.year}</b></div>
            <div className="tags tags--sm">{education.coursework.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section section--dark contact" id="contact">
      <div className="container contact__inner reveal">
        <p className="kicker kicker--light"><span>06</span>Contact</p>
        <h2>Have a project, role or idea?<br /><em>Let’s talk.</em></h2>
        <p className="contact__lead">
          I’m open to backend and integration roles, freelance builds, and Sunrise Labs installations for hostels and businesses.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact__links">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone /> {profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><GitHub /> {profile.githubHandle}</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn</a>}
          <span><Pin /> {profile.location}</span>
        </div>
      </div>
      <footer className="container footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <OpenSource />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
