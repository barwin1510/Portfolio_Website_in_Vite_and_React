import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio_Website_in_Vite_and_React.git/">
      <App />
    </BrowserRouter>
  </StrictMode>
)
