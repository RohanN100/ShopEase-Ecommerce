import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  
  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id)

    if (existing) {
      const updated = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCartItems(updated)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    const existing = cartItems.find(item => item.id === id)

    if (!existing) return

    if (existing.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      const updated = cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      setCartItems(updated)
    }
  }

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
