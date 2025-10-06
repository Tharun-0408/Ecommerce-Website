import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContextProvider'

const container = document.getElementById('root') as HTMLElement
createRoot(container).render(
  <BrowserRouter>
  <ShopContextProvider>
      <App /> 
  </ShopContextProvider>
  </BrowserRouter>,
)
