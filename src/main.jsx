import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SepetProvider } from './Context/SepetContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <SepetProvider>
    <App />
    </SepetProvider>
  </React.StrictMode>
  
)
