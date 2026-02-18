import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart()
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [loginWarning, setLoginWarning] = useState("")

  const convertToINR = (price) => Math.round(price * 83)

  const total = cartItems.reduce(
    (sum, item) => sum + convertToINR(item.price) * item.quantity,
    0
  )

  const discount = Math.round(total * 0.1)
  const finalAmount = total - discount

  const handleCheckout = () => {
    if (!currentUser) {
      setLoginWarning("Please login to proceed to checkout 🔒")
      setTimeout(() => {
        navigate("/account")
      }, 1500)
    } else {
      navigate("/checkout")
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F8E8] px-4 sm:px-6 md:px-10 py-8">

      <h2 className="text-2xl sm:text-3xl font-bold text-[#4E552A] mb-8">
        Cart ({cartItems.length})
      </h2>

     
      {loginWarning && (
        <div className="mb-6 text-center bg-red-100 text-red-600 py-3 rounded-lg font-medium">
          {loginWarning}
        </div>
      )}

      
      {cartItems.length === 0 ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">

          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
            <span className="text-4xl text-[#C8A96A]">🛒</span>
          </div>

          <h2 className="text-4xl font-bold text-[#4E552A] mb-4">
            Your Cart is Empty
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Looks like you haven't added any items yet.
            Explore our premium collection and find something you love.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-[#4E552A] text-white px-8 py-3 rounded-lg hover:bg-[#7C8A3C] transition"
          >
            Continue Shopping
          </button>

        </div>
      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

         
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-semibold text-[#4E552A]">
                      {item.title}
                    </h3>
                    <p className="text-[#7C8A3C] font-bold">
                      ₹{convertToINR(item.price)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    –
                  </button>

                  <span className="font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#7C8A3C] text-white px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>

                <div className="font-bold text-[#4E552A]">
                  ₹{convertToINR(item.price) * item.quantity}
                </div>
              </div>
            ))}
          </div>

      
          <div className="bg-white p-6 rounded-xl shadow h-fit">

            <h3 className="text-xl font-bold text-[#4E552A] mb-4">
              Order Summary
            </h3>

            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between text-green-600 mb-2">
              <span>Discount (10%)</span>
              <span>-₹{discount}</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Final Amount</span>
              <span>₹{finalAmount}</span>
            </div>

            <button
              onClick={handleCheckout}
              className={`mt-6 w-full py-3 rounded-lg transition ${
                currentUser
                  ? "bg-[#7C8A3C] text-white hover:bg-[#4E552A]"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {currentUser ? "Proceed to Checkout" : "Login Required"}
            </button>

          </div>

        </div>
      )}
    </div>
  )
}

export default Cart
