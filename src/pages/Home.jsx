import { Link } from "react-router-dom"
import CategorySection from "../components/CategorySection"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"



function Home() {
  return (
    <>
     
      <section className="min-h-screen bg-[#F4F8E8] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4E552A] leading-tight">
              Premium Collection for Everyday Life
            </h1>

            <p className="mt-6 text-[#4E552A] text-lg">
              Discover quality products curated specially for you.
            </p>

            <Link to="/products">
              <button className="mt-8 bg-[#7C8A3C] text-white px-6 py-3 rounded-lg hover:bg-[#4E552A] transition shadow-md">
                Explore Products
              </button>
            </Link>
          </div>

          
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop
"
              alt="shopping"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </section>

      
      <CategorySection />

     
      <Testimonials />

      <Newsletter />
      
    </>
  )
}

export default Home
