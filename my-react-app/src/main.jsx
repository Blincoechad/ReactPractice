import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './App.css';
import NavBar from './NavBar.jsx';
import './navBar.css';
import MyFooter from './Footer.jsx';
import './footer.css';
import TheTime from './Time.jsx';
import './Time.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    
    <App />
    
    <MyFooter />
    <TheTime />
  </StrictMode>
);
