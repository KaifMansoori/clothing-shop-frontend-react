import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout.jsx'
import OrderComplete from './components/OrderComplete.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </Router>
  
  </CartProvider>
    
  </StrictMode>,
)
