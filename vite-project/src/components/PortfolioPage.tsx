import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolio'
import { applyTheme, getInitialTheme, usePortfolioEffects, type ThemeMode } from '../theme'
import type {
  Achievement,
  Certification,
  Project,
  SectionLink,
  SkillGroup,
  SocialLink,
  SoftSkill,
  ValuePoint,
} from '../types'

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.74 13.05A8.5 8.5 0 0 1 10.95 3.26a8.5 8.5 0 1 0 9.79 9.79Z" />
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
  </svg>
)

const SocialChips = ({ socials }: { socials: SocialLink[] }) => (
  <>
    {socials.map((social) => {
      const externalProps = social.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}

      return (
        <a key={social.label} className="portfolio-chip portfolio-chip--interactive" href={social.href} {...externalProps}>
          <span className="portfolio-chip__label">{social.label}</span>
          <span className="portfolio-chip__value">{social.value}</span>
        </a>
      )
    })}
  </>
)

const NavLinks = ({ links }: { links: SectionLink[] }) => (
  <>
    {links.map((link) => (
      <a key={link.id} className="portfolio-nav__link" href={`#${link.id}`}>
        {link.label}
      </a>
    ))}
  </>
)

const ProjectCards = ({ projects }: { projects: Project[] }) => (
  <>
    {projects.map((project, index) => (
      <article key={project.name} className="portfolio-card portfolio-card--project reveal">
        <div className="portfolio-project__header">
          <div>
            <p className="portfolio-eyebrow">Project 0{index + 1}</p>
            <h3>{project.name}</h3>
            <p className="portfolio-project__tagline">{project.tagline}</p>
          </div>
          <div className="portfolio-stack-list">
            {project.stack.map((item) => (
              <span key={item} className="portfolio-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="portfolio-bullet-list">
          {project.impact.map((point) => (
            <div key={point} className="portfolio-bullet-item">
              <span className="portfolio-bullet-dot"></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </article>
    ))}
  </>
)

const SkillCards = ({ groups }: { groups: SkillGroup[] }) => (
  <>
    {groups.map((group) => (
      <article key={group.title} className="portfolio-card portfolio-card--skill reveal">
        <div className="portfolio-card__top">
          <h3>{group.title}</h3>
          <span className="portfolio-pill">{group.items.length} tools</span>
        </div>
        <div className="portfolio-tag-list">
          {group.items.map((item) => (
            <span key={item} className="portfolio-tag">
              {item}
            </span>
          ))}
        </div>
      </article>
    ))}
  </>
)

const AchievementCards = ({ items }: { items: Achievement[] }) => (
  <>
    {items.map((item) => (
      <article key={item.title} className="portfolio-card reveal">
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </article>
    ))}
  </>
)

const CertificationCards = ({ items }: { items: Certification[] }) => (
  <>
    {items.map((item) => (
      <article key={item.name} className="portfolio-mini-card">
        <h4>{item.name}</h4>
        <p>{item.issuer}</p>
      </article>
    ))}
  </>
)

const SoftSkillCards = ({ items }: { items: SoftSkill[] }) => (
  <>
    {items.map((item) => (
      <article key={item.title} className="portfolio-card portfolio-card--soft reveal">
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </article>
    ))}
  </>
)

const ValueCards = ({ items }: { items: ValuePoint[] }) => (
  <>
    {items.map((item) => (
      <article key={item.title} className="portfolio-value-card reveal">
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </article>
    ))}
  </>
)

export const PortfolioPage = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const { showBackToTop } = usePortfolioEffects()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <div className="portfolio-shell">
      <div className="portfolio-bg portfolio-bg--one"></div>
      <div className="portfolio-bg portfolio-bg--two"></div>

      <header className="portfolio-header">
        <div className="portfolio-container portfolio-header__inner">
          <a href="#top" className="portfolio-brand">
            {portfolioData.name}
          </a>
          <nav className="portfolio-nav">
            <NavLinks links={portfolioData.sectionLinks} />
          </nav>
          <button
            id="theme-toggle"
            type="button"
            className="theme-toggle"
            aria-label="Toggle color theme"
            onClick={() => setTheme(nextTheme)}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </span>
            <span className="theme-toggle__label">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </header>

      <main id="top" className="portfolio-container portfolio-main">
        <section className="portfolio-hero">
          <div className="portfolio-hero__content reveal">
            <div className="portfolio-status">
              <span className="portfolio-status__dot"></span>
              <span className="portfolio-status__text">{portfolioData.availability}</span>
            </div>
            <p className="portfolio-eyebrow">{portfolioData.title}</p>
            <h1>Building enterprise AI products that feel premium, fast, and trustworthy.</h1>
            <p className="portfolio-hero__summary">{portfolioData.summary}</p>

            <div className="portfolio-actions">
              <a className="portfolio-button portfolio-button--primary" href={portfolioData.resumeHref} target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="portfolio-button portfolio-button--secondary" href="#projects">
                Explore Projects
              </a>
            </div>

            <div className="portfolio-chip-list">
              <SocialChips socials={portfolioData.socials} />
            </div>
          </div>

          <div className="portfolio-hero__visual reveal">
            <div className="portfolio-photo-card">
              <div className="portfolio-photo-orb portfolio-photo-orb--one"></div>
              <div className="portfolio-photo-orb portfolio-photo-orb--two"></div>
              <div className="portfolio-photo-ring portfolio-photo-ring--one"></div>
              <div className="portfolio-photo-ring portfolio-photo-ring--two"></div>
              <div className="portfolio-photo-card__badge">Recruiter-ready profile</div>
              <div className="portfolio-photo-card__focus">
                <span>Current focus</span>
                <strong>LLM Apps + Real-time UX</strong>
              </div>
              <div className="portfolio-photo-frame">
                <img src={portfolioData.photoSrc} alt={portfolioData.name} />
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-stats">
          {portfolioData.stats.map((stat) => (
            <article key={stat.label} className="portfolio-card portfolio-card--stat reveal">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="portfolio-section">
          <div className="portfolio-value-grid">
            <ValueCards items={portfolioData.valuePoints} />
          </div>
        </section>

        <section id="experience" className="portfolio-section portfolio-section--split">
          <div className="portfolio-section__intro reveal">
            <p className="portfolio-eyebrow">Experience</p>
            <h2>Proven delivery inside high-stakes enterprise teams.</h2>
          </div>
          <article className="portfolio-card portfolio-card--experience reveal">
            <div className="portfolio-experience__header">
              <div>
                <p className="portfolio-eyebrow">{portfolioData.experience.company}</p>
                <h3>{portfolioData.experience.role}</h3>
                <p className="portfolio-muted">Client: {portfolioData.experience.client}</p>
              </div>
              <div className="portfolio-experience__meta">
                <span>{portfolioData.experience.duration}</span>
                <span>{portfolioData.experience.location}</span>
              </div>
            </div>
            <p className="portfolio-experience__summary">{portfolioData.experience.summary}</p>
            <div className="portfolio-highlight-grid">
              {portfolioData.experience.highlights.map((highlight) => (
                <div key={highlight} className="portfolio-highlight">
                  <span className="portfolio-bullet-dot"></span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="projects" className="portfolio-section">
          <div className="portfolio-section__header reveal">
            <div>
              <p className="portfolio-eyebrow">Projects</p>
              <h2>Real products with enterprise context, AI depth, and measurable impact.</h2>
            </div>
            <p className="portfolio-section__note">
              Projects are driven from TypeScript data so you can scale this portfolio cleanly as new work gets added.
            </p>
          </div>
          <div className="portfolio-project-grid">
            <ProjectCards projects={portfolioData.projects} />
          </div>
        </section>

        <section id="skills" className="portfolio-section portfolio-section--split">
          <div className="portfolio-section__intro reveal">
            <p className="portfolio-eyebrow">Skills</p>
            <h2>A stack that covers interface polish, backend scale, and AI execution.</h2>
          </div>
          <div className="portfolio-skill-grid">
            <SkillCards groups={portfolioData.skills} />
          </div>
        </section>

        <section id="strengths" className="portfolio-section portfolio-section--split">
          <div className="portfolio-section__intro reveal">
            <p className="portfolio-eyebrow">Strengths</p>
            <h2>Soft skills that support delivery, ownership, and strong team collaboration.</h2>
          </div>
          <div className="portfolio-soft-grid">
            <SoftSkillCards items={portfolioData.softSkills} />
          </div>
        </section>

        <section id="proof" className="portfolio-section portfolio-proof">
          <div className="portfolio-proof__main">
            <div className="portfolio-section__intro reveal">
              <p className="portfolio-eyebrow">Proof of Work</p>
              <h2>Results recruiters can scan quickly.</h2>
            </div>
            <div className="portfolio-proof-grid">
              <AchievementCards items={portfolioData.achievements} />
            </div>
          </div>

          <aside className="portfolio-card portfolio-card--sidebar reveal">
            <div className="portfolio-sidebar__block">
              <p className="portfolio-eyebrow">Education</p>
              <h3>{portfolioData.education.degree}</h3>
              <p>{portfolioData.education.institution}</p>
              <div className="portfolio-inline-tags">
                <span>{portfolioData.education.duration}</span>
                <span>{portfolioData.education.score}</span>
              </div>
            </div>

            <div className="portfolio-sidebar__block">
              <p className="portfolio-eyebrow">Certifications</p>
              <div className="portfolio-mini-grid">
                <CertificationCards items={portfolioData.certifications} />
              </div>
            </div>
          </aside>
        </section>

        <section id="contact" className="portfolio-section">
          <div className="portfolio-cta reveal">
            <div className="portfolio-cta__copy">
              <p className="portfolio-eyebrow">Contact</p>
              <h2>Connect for product engineering, platform development, and enterprise AI conversations.</h2>
              <p>
                This portfolio highlights how I approach engineering across frontend, backend, AI workflows, and
                production-ready delivery for modern enterprise products.
              </p>
            </div>
            <div className="portfolio-contact-grid">
              <a className="portfolio-contact-card" href={`mailto:${portfolioData.email}`}>
                <span>Email</span>
                <strong>{portfolioData.email}</strong>
              </a>
              <a className="portfolio-contact-card" href={`tel:${portfolioData.phone.replaceAll(' ', '')}`}>
                <span>Phone</span>
                <strong>{portfolioData.phone}</strong>
              </a>
              <a className="portfolio-contact-card portfolio-contact-card--accent" href={portfolioData.resumeHref} target="_blank" rel="noreferrer">
                <span>Resume</span>
                <strong>Open PDF Copy</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <button
        id="back-to-top"
        type="button"
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        aria-label="Go to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="back-to-top__arrow">^</span>
        <span className="back-to-top__label">Top</span>
      </button>
    </div>
  )
}
