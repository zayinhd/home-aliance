import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './hooks/ThemeContext.jsx'
// import store from "./store"
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={ store }> */ }
    <ThemeProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    {/* </Provider> */ }
  </StrictMode>,
)
