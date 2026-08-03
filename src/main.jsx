import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Responsiveness from './screens/responsiveness'
// import Home from './screens/Home.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <Responsiveness />
  </StrictMode>,
)
