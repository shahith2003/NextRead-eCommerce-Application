import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './CartContext.jsx'; // ✅ import CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>   {/* ✅ wrap only with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
);
