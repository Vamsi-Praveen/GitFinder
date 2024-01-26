import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/Themecontext.jsx'
import { UserDataProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
