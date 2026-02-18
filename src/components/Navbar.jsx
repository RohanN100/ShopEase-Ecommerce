import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useState } from "react"

function Navbar() {
  const { cartItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      
        <Link to="/" className="text-2xl font-bold text-[#4E552A]">
          ShopEase
        </Link>

      
        <div className="hidden md:flex items-center w-[35%]">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button className="bg-[#7C8A3C] text-white px-5 py-2 rounded-r-lg hover:bg-[#4E552A] transition">
            Search
          </button>
        </div>

        
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/account">Account</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <Link to="/cart" className="relative ml-6 text-2xl">
  🛒
  {cartItems.length > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartItems.length}
    </span>
  )}
</Link>


        </div>

      
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4">

          
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-[#7C8A3C] text-white px-4 rounded-r-lg">
              Go
            </button>
          </div>

          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block">Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)} className="block">Products</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block">About</NavLink>
          <NavLink to="/account" onClick={() => setMenuOpen(false)} className="block">Account</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</NavLink>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Cart ({cartItems.length})
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar
