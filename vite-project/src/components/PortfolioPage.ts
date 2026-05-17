import { portfolioData } from '../data/portfolio'
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

const externalAttrs = (href: string) =>
  href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''

const renderNavLinks = (links: SectionLink[]) =>
  links
    .map((link) => `<a class="portfolio-nav__link" href="#${link.id}">${link.label}</a>`)
    .join('')

const renderSocials = (socials: SocialLink[]) =>
  socials
    .map(
      (social) => `
        <a class="portfolio-chip portfolio-chip--interactive" href="${social.href}" ${externalAttrs(social.href)}>
          <span class="portfolio-chip__label">${social.label}</span>
          <span class="portfolio-chip__value">${social.value}</span>
        </a>
      `,
    )
    .join('')

const renderSkills = (groups: SkillGroup[]) =>
  groups
    .map(
      (group) => `
        <article class="portfolio-card portfolio-card--skill reveal">
          <div class="portfolio-card__top">
            <h3>${group.title}</h3>
            <span class="portfolio-pill">${group.items.length} tools</span>
          </div>
          <div class="portfolio-tag-list">
            ${group.items.map((item) => `<span class="portfolio-tag">${item}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('')

const renderProjects = (projects: Project[]) =>
  projects
    .map(
      (project, index) => `
        <article class="portfolio-card portfolio-card--project reveal">
          <div class="portfolio-project__header">
            <div>
              <p class="portfolio-eyebrow">Project 0${index + 1}</p>
              <h3>${project.name}</h3>
              <p class="portfolio-project__tagline">${project.tagline}</p>
            </div>
            <div class="portfolio-stack-list">
              ${project.stack.map((item) => `<span class="portfolio-pill">${item}</span>`).join('')}
            </div>
          </div>
          <div class="portfolio-bullet-list">
            ${project.impact
              .map(
                (point) => `
                  <div class="portfolio-bullet-item">
                    <span class="portfolio-bullet-dot"></span>
                    <p>${point}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>
      `,
    )
    .join('')

const renderAchievements = (items: Achievement[]) =>
  items
    .map(
      (item) => `
        <article class="portfolio-card reveal">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join('')

const renderCertifications = (items: Certification[]) =>
  items
    .map(
      (item) => `
        <article class="portfolio-mini-card">
          <h4>${item.name}</h4>
          <p>${item.issuer}</p>
        </article>
      `,
    )
    .join('')

const renderSoftSkills = (items: SoftSkill[]) =>
  items
    .map(
      (item) => `
        <article class="portfolio-card portfolio-card--soft reveal">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join('')

const renderValuePoints = (items: ValuePoint[]) =>
  items
    .map(
      (item) => `
        <article class="portfolio-value-card reveal">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join('')

export const renderPortfolioPage = () => `
  <div class="portfolio-shell">
    <div class="portfolio-bg portfolio-bg--one"></div>
    <div class="portfolio-bg portfolio-bg--two"></div>

    <header class="portfolio-header">
      <div class="portfolio-container portfolio-header__inner">
        <a href="#top" class="portfolio-brand">${portfolioData.name}</a>
        <nav class="portfolio-nav">
          ${renderNavLinks(portfolioData.sectionLinks)}
        </nav>
        <button id="theme-toggle" type="button" class="theme-toggle" aria-label="Toggle color theme">
          <span id="theme-toggle-icon" class="theme-toggle__icon" aria-hidden="true"></span>
          <span id="theme-toggle-label" class="theme-toggle__label"></span>
        </button>
      </div>
    </header>

    <main id="top" class="portfolio-container portfolio-main">
      <section class="portfolio-hero">
        <div class="portfolio-hero__content reveal">
          <div class="portfolio-status">
            <span class="portfolio-status__dot"></span>
            <span class="portfolio-status__text">${portfolioData.availability}</span>
          </div>
          <p class="portfolio-eyebrow">${portfolioData.title}</p>
          <h1>Building enterprise AI products that feel premium, fast, and trustworthy.</h1>
          <p class="portfolio-hero__summary">${portfolioData.summary}</p>

          <div class="portfolio-actions">
            <a class="portfolio-button portfolio-button--primary" href="${portfolioData.resumeHref}" target="_blank" rel="noreferrer">View Resume</a>
            <a class="portfolio-button portfolio-button--secondary" href="#projects">Explore Projects</a>
          </div>

          <div class="portfolio-chip-list">
            ${renderSocials(portfolioData.socials)}
          </div>
        </div>

        <div class="portfolio-hero__visual reveal">
          <div class="portfolio-photo-card">
            <div class="portfolio-photo-orb portfolio-photo-orb--one"></div>
            <div class="portfolio-photo-orb portfolio-photo-orb--two"></div>
            <div class="portfolio-photo-ring portfolio-photo-ring--one"></div>
            <div class="portfolio-photo-ring portfolio-photo-ring--two"></div>
            <div class="portfolio-photo-card__badge">Recruiter-ready profile</div>
            <div class="portfolio-photo-card__focus">
              <span>Current focus</span>
              <strong>LLM Apps + Real-time UX</strong>
            </div>
            <div class="portfolio-photo-frame">
              <img src="${portfolioData.photoSrc}" alt="${portfolioData.name}" />
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio-stats">
        ${portfolioData.stats
          .map(
            (stat) => `
              <article class="portfolio-card portfolio-card--stat reveal">
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="portfolio-section">
        <div class="portfolio-value-grid">
          ${renderValuePoints(portfolioData.valuePoints)}
        </div>
      </section>

      <section id="experience" class="portfolio-section portfolio-section--split">
        <div class="portfolio-section__intro reveal">
          <p class="portfolio-eyebrow">Experience</p>
          <h2>Proven delivery inside high-stakes enterprise teams.</h2>
        </div>
        <article class="portfolio-card portfolio-card--experience reveal">
          <div class="portfolio-experience__header">
            <div>
              <p class="portfolio-eyebrow">${portfolioData.experience.company}</p>
              <h3>${portfolioData.experience.role}</h3>
              <p class="portfolio-muted">Client: ${portfolioData.experience.client}</p>
            </div>
            <div class="portfolio-experience__meta">
              <span>${portfolioData.experience.duration}</span>
              <span>${portfolioData.experience.location}</span>
            </div>
          </div>
          <p class="portfolio-experience__summary">${portfolioData.experience.summary}</p>
          <div class="portfolio-highlight-grid">
            ${portfolioData.experience.highlights
              .map(
                (highlight) => `
                  <div class="portfolio-highlight">
                    <span class="portfolio-bullet-dot"></span>
                    <p>${highlight}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>
      </section>

      <section id="projects" class="portfolio-section">
        <div class="portfolio-section__header reveal">
          <div>
            <p class="portfolio-eyebrow">Projects</p>
            <h2>Real products with enterprise context, AI depth, and measurable impact.</h2>
          </div>
          <p class="portfolio-section__note">
            Projects are driven from TypeScript data so you can scale this portfolio cleanly as new work gets added.
          </p>
        </div>
        <div class="portfolio-project-grid">
          ${renderProjects(portfolioData.projects)}
        </div>
      </section>

      <section id="skills" class="portfolio-section portfolio-section--split">
        <div class="portfolio-section__intro reveal">
          <p class="portfolio-eyebrow">Skills</p>
          <h2>A stack that covers interface polish, backend scale, and AI execution.</h2>
        </div>
        <div class="portfolio-skill-grid">
          ${renderSkills(portfolioData.skills)}
        </div>
      </section>

      <section id="strengths" class="portfolio-section portfolio-section--split">
        <div class="portfolio-section__intro reveal">
          <p class="portfolio-eyebrow">Strengths</p>
          <h2>Soft skills that support delivery, ownership, and strong team collaboration.</h2>
        </div>
        <div class="portfolio-soft-grid">
          ${renderSoftSkills(portfolioData.softSkills)}
        </div>
      </section>

      <section id="proof" class="portfolio-section portfolio-proof">
        <div class="portfolio-proof__main">
          <div class="portfolio-section__intro reveal">
            <p class="portfolio-eyebrow">Proof of Work</p>
            <h2>Results recruiters can scan quickly.</h2>
          </div>
          <div class="portfolio-proof-grid">
            ${renderAchievements(portfolioData.achievements)}
          </div>
        </div>

        <aside class="portfolio-card portfolio-card--sidebar reveal">
          <div class="portfolio-sidebar__block">
            <p class="portfolio-eyebrow">Education</p>
            <h3>${portfolioData.education.degree}</h3>
            <p>${portfolioData.education.institution}</p>
            <div class="portfolio-inline-tags">
              <span>${portfolioData.education.duration}</span>
              <span>${portfolioData.education.score}</span>
            </div>
          </div>

          <div class="portfolio-sidebar__block">
            <p class="portfolio-eyebrow">Certifications</p>
            <div class="portfolio-mini-grid">
              ${renderCertifications(portfolioData.certifications)}
            </div>
          </div>
        </aside>
      </section>

      <section id="contact" class="portfolio-section">
        <div class="portfolio-cta reveal">
          <div class="portfolio-cta__copy">
            <p class="portfolio-eyebrow">Contact</p>
            <h2>Connect for product engineering, platform development, and enterprise AI conversations.</h2>
            <p>
              This portfolio highlights how I approach engineering across frontend, backend, AI workflows, and
              production-ready delivery for modern enterprise products.
            </p>
          </div>
          <div class="portfolio-contact-grid">
            <a class="portfolio-contact-card" href="mailto:${portfolioData.email}">
              <span>Email</span>
              <strong>${portfolioData.email}</strong>
            </a>
            <a class="portfolio-contact-card" href="tel:${portfolioData.phone.replaceAll(' ', '')}">
              <span>Phone</span>
              <strong>${portfolioData.phone}</strong>
            </a>
            <a class="portfolio-contact-card portfolio-contact-card--accent" href="${portfolioData.resumeHref}" target="_blank" rel="noreferrer">
              <span>Resume</span>
              <strong>Open PDF Copy</strong>
            </a>
          </div>
        </div>
      </section>
    </main>

    <button id="back-to-top" type="button" class="back-to-top" aria-label="Go to top">
      <span class="back-to-top__arrow">↑</span>
      <span class="back-to-top__label">Top</span>
    </button>
  </div>
`
