import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './navBar.jsx'
import './navBar.css'
import MyFooter from './footer.jsx'
import './footer.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    
  <MyFooter />
  </StrictMode>,
)



