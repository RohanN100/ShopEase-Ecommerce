import { useEffect, useState } from "react"
import {
  getAllProducts,
  getProductsByCategory,
  getAllCategories
} from "../services/productService"
import { useLocation, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Products() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [maxPrice, setMaxPrice] = useState(100000)
  const [sortOrder, setSortOrder] = useState("")

  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

  const { cartItems, addToCart, removeFromCart } = useCart()

  const convertToINR = (price) => Math.round(price * 83)

  const getQuantity = (id) => {
    const item = cartItems.find(i => i.id === id)
    return item ? item.quantity : 0
  }

  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const params = new URLSearchParams(location.search)
      const categoryId = params.get("category")
      const searchQuery = params.get("search")

      let productData = []
      const categoryData = await getAllCategories()

      if (searchQuery) {
        const allProducts = await getAllProducts()
        productData = allProducts.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSelectedCategory(null)
      }

      else if (categoryId) {
        productData = await getProductsByCategory(categoryId)
        setSelectedCategory(categoryId)
      }

      else {
        productData = await getAllProducts()
        setSelectedCategory(null)
      }

     
      setCategories(categoryData)
      setProducts(productData)
      setFilteredProducts(productData)

      setLoading(false)
    }

    fetchData()
  }, [location.search])



  useEffect(() => {

    let updated = [...products]

    const params = new URLSearchParams(location.search)
    const urlCategory = params.get("category")

    
    if (!urlCategory && selectedCategory) {
      updated = updated.filter(
        item => item.category?.id == selectedCategory
      )
    }


    updated = updated.filter(
      item => convertToINR(item.price) <= maxPrice
    )

   
    if (sortOrder === "low") {
      updated.sort((a, b) => convertToINR(a.price) - convertToINR(b.price))
    }
    else if (sortOrder === "high") {
      updated.sort((a, b) => convertToINR(b.price) - convertToINR(a.price))
    }

    setFilteredProducts(updated)

  }, [selectedCategory, maxPrice, sortOrder, products, location.search])


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4F8E8] px-4 sm:px-6 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <h3 className="text-xl font-bold text-[#4E552A] mb-6">
            Filter By
          </h3>

         
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Categories</h4>

            <ul className="space-y-2">

              <li
                onClick={() => {
                  setSelectedCategory(null)
                  navigate("/products")
                }}
                className={`cursor-pointer text-sm ${
                  selectedCategory === null ? "text-[#7C8A3C] font-bold" : ""
                }`}
              >
                All
              </li>

              {categories.map(cat => (
                <li
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer text-sm hover:text-[#7C8A3C] ${
                    selectedCategory == cat.id ? "text-[#7C8A3C] font-bold" : ""
                  }`}
                >
                  {cat.name}
                </li>
              ))}

            </ul>
          </div>

       
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Max Price: ₹{maxPrice}
            </label>

            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Sort By Price
            </label>

            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">Select</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>

        </div>

        

        <div className="lg:col-span-3">

          <h2 className="text-2xl sm:text-3xl font-bold text-[#4E552A] mb-8">
            Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
              >

                <div className="h-36 mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-sm font-semibold text-[#4E552A] line-clamp-2">
                  {product.title}
                </h3>

                <p className="mt-2 text-[#7C8A3C] font-bold">
                  ₹{convertToINR(product.price)}
                </p>

                {getQuantity(product.id) === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full bg-[#7C8A3C] text-white text-sm py-2 rounded-md hover:bg-[#4E552A] transition"
                  >
                    Add
                  </button>
                ) : (
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      –
                    </button>

                    <span className="text-sm font-medium">
                      {getQuantity(product.id)}
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      className="bg-[#7C8A3C] text-white px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Products
