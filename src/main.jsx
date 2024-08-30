import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// IMPORT CDN BOOTSTRAP LIBRARY: https://getbootstrap.com/
import * as bootstrap from 'bootstrap'
// IMPORT GLOBAL STYLES APP
import "./globalStyles/globalStyles.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
