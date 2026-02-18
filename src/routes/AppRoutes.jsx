import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Login from "../pages/Account"
import Checkout from "../pages/Checkout"
import NotFound from "../pages/NotFound"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Account from "../pages/Account"
import ProtectedRoute from "./ProtectedRoute"






function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Account" element={<Account />} />
     <Route 
  path="/checkout" 
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  } 
/>

      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
      <Route path="contact"element={<Contact/>}/>
      

    </Routes>
  )
}

export default AppRoutes
