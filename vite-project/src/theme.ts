const themeStorageKey = 'sairam-portfolio-theme'

type ThemeMode = 'light' | 'dark'

const sunIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56"></path>
  </svg>
`

const moonIcon = `
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.74 13.05A8.5 8.5 0 0 1 10.95 3.26a8.5 8.5 0 1 0 9.79 9.79Z"></path>
  </svg>
`

const getStoredTheme = (): ThemeMode | null => {
  const stored = window.localStorage.getItem(themeStorageKey)
  return stored === 'light' || stored === 'dark' ? stored : null
}

const getPreferredTheme = (): ThemeMode =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const applyTheme = (theme: ThemeMode) => {
  document.documentElement.setAttribute('data-theme', theme)
  window.localStorage.setItem(themeStorageKey, theme)
}

const syncThemeToggle = (theme: ThemeMode) => {
  const label = document.querySelector<HTMLElement>('#theme-toggle-label')
  const icon = document.querySelector<HTMLElement>('#theme-toggle-icon')

  if (!label || !icon) return

  if (theme === 'dark') {
    label.textContent = 'Light Mode'
    icon.innerHTML = sunIcon
  } else {
    label.textContent = 'Dark Mode'
    icon.innerHTML = moonIcon
  }
}

export const initializeTheme = () => {
  const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle')
  const activeTheme = getStoredTheme() ?? getPreferredTheme()

  applyTheme(activeTheme)
  syncThemeToggle(activeTheme)

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
    syncThemeToggle(nextTheme)
  })
}

export const initializeRevealAnimations = () => {
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.16 },
  )

  revealElements.forEach((element) => observer.observe(element))
}

export const initializeBackToTop = () => {
  const button = document.querySelector<HTMLButtonElement>('#back-to-top')

  if (!button) {
    return
  }

  const syncVisibility = () => {
    const isVisible = window.scrollY > 420
    button.classList.toggle('is-visible', isVisible)
  }

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  window.addEventListener('scroll', syncVisibility, { passive: true })
  syncVisibility()
}
