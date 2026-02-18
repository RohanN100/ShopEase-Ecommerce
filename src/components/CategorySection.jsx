import { useEffect, useState } from "react"
import { getAllCategories } from "../services/productService"
import { useNavigate } from "react-router-dom"

function CategorySection() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories()
      setCategories(data.slice(0, 8))   
    }

    fetchCategories()
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#4E552A]">
            Shop by Category
          </h2>
          <p className="mt-2 text-[#7C8A3C]">
            Browse products by category
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/products?category=${category.id}`)}
              className="group cursor-pointer bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              
              <div className="h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1523275335684-37898b6baf30")
                  }
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#4E552A] group-hover:text-[#7C8A3C] transition">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CategorySection
