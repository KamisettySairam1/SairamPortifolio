import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './styles/portfolio.css'
import { PortfolioPage } from './components/PortfolioPage'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

createRoot(app).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)
