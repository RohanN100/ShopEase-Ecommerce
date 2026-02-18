import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 pt-14 pb-6 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            ShopEase
          </h3>
          <p className="text-sm leading-6">
            Transform your home with premium products that combine style,
            comfort and quality. Made in India with love.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-9 h-9 bg-[#2F4F2F] flex items-center justify-center rounded-full cursor-pointer">
              f
            </div>
            <div className="w-9 h-9 bg-[#2F4F2F] flex items-center justify-center rounded-full cursor-pointer">
              i
            </div>
            <div className="w-9 h-9 bg-[#2F4F2F] flex items-center justify-center rounded-full cursor-pointer">
              t
            </div>
          </div>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">
            Customer Service
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">
            Stay Updated
          </h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for latest updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-lg text-black w-full focus:outline-none"
            />
            <button className="bg-[#2F4F2F] px-4 rounded-r-lg">
              →
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2024 ShopEase. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
