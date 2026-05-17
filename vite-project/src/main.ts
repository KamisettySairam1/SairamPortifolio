import './styles/theme.css'
import './styles/portfolio.css'
import { renderPortfolioPage } from './components/PortfolioPage'
import { initializeBackToTop, initializeRevealAnimations, initializeTheme } from './theme'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = renderPortfolioPage()

initializeTheme()
initializeRevealAnimations()
initializeBackToTop()
