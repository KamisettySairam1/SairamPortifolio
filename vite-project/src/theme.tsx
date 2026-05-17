import { useEffect, useState } from 'react'

const themeStorageKey = 'sairam-portfolio-theme'

export type ThemeMode = 'light' | 'dark'

const getStoredTheme = (): ThemeMode | null => {
  const stored = window.localStorage.getItem(themeStorageKey)
  return stored === 'light' || stored === 'dark' ? stored : null
}

const getPreferredTheme = (): ThemeMode =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const getInitialTheme = (): ThemeMode => getStoredTheme() ?? getPreferredTheme()

export const applyTheme = (theme: ThemeMode) => {
  document.documentElement.setAttribute('data-theme', theme)
  window.localStorage.setItem(themeStorageKey, theme)
}

export const usePortfolioEffects = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const syncVisibility = () => {
      setShowBackToTop(window.scrollY > 420)
    }

    window.addEventListener('scroll', syncVisibility, { passive: true })
    syncVisibility()

    return () => window.removeEventListener('scroll', syncVisibility)
  }, [])

  return { showBackToTop }
}
