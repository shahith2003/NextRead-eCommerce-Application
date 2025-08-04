import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookDetail from './pages/BookDetail'
import Fiction from './pages/Fiction'
import NonFiction from './pages/NonFiction'
import Mystery from './pages/Mystery'
import AboutPage from './pages/AboutPage'
import Contact from './pages/ContactUs'
import Billing from './pages/Billing'
import ThankYou from './pages/Thankyou'
import Cart from './pages/Cart'
import AuthPage from './auth/AuthPage'
// import other pages like Library, About, etc., if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Home />} />
         <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/billing" element={<Billing />} />
           <Route path="/thankyou" element={<ThankYou />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/categories/fiction" element={<Fiction />} />
         <Route path="/categories/non-fiction" element={<NonFiction />} />
         <Route path="/categories/mystery" element={<Mystery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
