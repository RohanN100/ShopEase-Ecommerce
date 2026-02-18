import { useCart } from "../context/CartContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout() {
  const { cartItems, getTotal } = useCart()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})

  const subtotal = getTotal()
  const shipping = 99
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + shipping + tax

  const [address, setAddress] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: ""
  })

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: ""
  })


  const validateShipping = () => {
    let newErrors = {}

    if (!address.name) newErrors.name = "Name is required"
    if (!address.email) newErrors.email = "Email is required"
    if (!address.phone) newErrors.phone = "Phone is required"
    if (!address.city) newErrors.city = "City is required"
    if (!address.address) newErrors.address = "Address is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePayment = () => {
    let newErrors = {}

    if (!payment.cardNumber || payment.cardNumber.length < 12)
      newErrors.cardNumber = "Valid card number required"

    if (!payment.expiry)
      newErrors.expiry = "Expiry date required"

    if (!payment.cvv || payment.cvv.length < 3)
      newErrors.cvv = "Valid CVV required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextShipping = () => {
    if (validateShipping()) setStep(2)
  }

  const handleNextPayment = () => {
    if (validatePayment()) setStep(3)
  }

  const handlePlaceOrder = () => {
    setStep(4)
  }

  

  return (
    <div className="min-h-screen bg-[#F4F8E8] px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md">

       
        <div className="flex justify-center gap-10 mb-8 font-medium text-[#4E552A]">
          <span className={step >= 1 ? "font-bold text-[#7C8A3C]" : ""}>Shipping</span>
          <span className={step >= 2 ? "font-bold text-[#7C8A3C]" : ""}>Payment</span>
          <span className={step >= 3 ? "font-bold text-[#7C8A3C]" : ""}>Review</span>
        </div>

        
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-[#4E552A]">
              Shipping Information
            </h2>

            <div className="space-y-5">

              {["name","email","phone","city","address"].map(field => (
                <div key={field}>
                  <input
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="border p-3 rounded w-full focus:ring-2 focus:ring-[#7C8A3C]"
                    onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <button
                onClick={handleNextShipping}
                className="bg-[#7C8A3C] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#4E552A] transition"
              >
                Continue to Payment
              </button>

            </div>
          </>
        )}

        
        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-[#4E552A]">
              Payment Details
            </h2>

            <div className="space-y-5">

              <div>
                <input
                  placeholder="Card Number"
                  className="border p-3 rounded w-full focus:ring-2 focus:ring-[#7C8A3C]"
                  onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    placeholder="Expiry Date"
                    className="border p-3 rounded w-full"
                    onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                  />
                  {errors.expiry && (
                    <p className="text-red-500 text-sm">{errors.expiry}</p>
                  )}
                </div>

                <div>
                  <input
                    placeholder="CVV"
                    className="border p-3 rounded w-full"
                    onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm">{errors.cvv}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setStep(1)}
                  className="border px-6 py-3 rounded-lg"
                >
                  Back
                </button>

                <button
                  onClick={handleNextPayment}
                  className="bg-[#7C8A3C] text-white px-6 py-3 rounded-lg hover:bg-[#4E552A]"
                >
                  Review Order
                </button>
              </div>
            </div>
          </>
        )}

       
        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-[#4E552A]">
              Review Your Order
            </h2>

            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between border p-4 rounded">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <p>₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="text-right font-bold text-lg mb-6">
              Total: ₹{total}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="border px-6 py-3 rounded-lg"
              >
                Back to Payment
              </button>

              <button
                onClick={handlePlaceOrder}
                className="bg-[#4E552A] text-white px-6 py-3 rounded-lg hover:bg-[#7C8A3C]"
              >
                Place Order
              </button>
            </div>
          </>
        )}

        
        {step === 4 && (
          <div className="text-center py-10">
            <div className="text-green-600 text-5xl mb-6">✔</div>
            <h2 className="text-3xl font-bold text-[#4E552A] mb-4">
              Order Placed Successfully!
            </h2>
            <p>Your order will be delivered to:</p>

            <div className="bg-[#F4F8E8] p-6 rounded-lg inline-block mt-4 text-left">
              <p><strong>Name:</strong> {address.name}</p>
              <p><strong>City:</strong> {address.city}</p>
              <p><strong>Address:</strong> {address.address}</p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-[#7C8A3C] text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Checkout
