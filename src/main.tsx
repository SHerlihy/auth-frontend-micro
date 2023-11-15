import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_AUTH_BACKEND_URL
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </AuthProvider>
  </React.StrictMode>,
)