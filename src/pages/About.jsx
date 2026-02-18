import { Link } from "react-router-dom"

function About() {
  return (
    <div className="bg-[#F4F8E8]">

      
      <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4E552A]">
            About ShopEase
          </h1>
          <p className="mt-6 text-[#4E552A] text-lg leading-relaxed">
            We believe shopping should be simple, affordable, and enjoyable.
            Since our founding, we have focused on delivering quality products
            that improve everyday life.
          </p>
          <Link to="/products">
            <button className="mt-8 bg-[#7C8A3C] text-white px-6 py-3 rounded-lg hover:bg-[#4E552A] transition">
              Explore Our Products
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
            alt="about"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

     
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
              alt="story"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#4E552A] mb-6">
              Our Story
            </h2>
            <p className="text-[#4E552A] leading-relaxed">
              What started as a small idea has grown into a trusted platform
              serving thousands of customers. Our mission has always been to
              combine affordability with premium quality.
            </p>
            <p className="mt-4 text-[#4E552A] leading-relaxed">
              We carefully select products to ensure durability, value, and
              customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4E552A] text-center mb-12">
          Our Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="font-semibold text-[#4E552A] text-lg">
              Quality First
            </h3>
            <p className="mt-3 text-sm text-[#4E552A]">
              We never compromise on quality and always aim to exceed expectations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-semibold text-[#4E552A] text-lg">
              Fast Delivery
            </h3>
            <p className="mt-3 text-sm text-[#4E552A]">
              Quick and reliable shipping ensures your products arrive on time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-semibold text-[#4E552A] text-lg">
              Customer Satisfaction
            </h3>
            <p className="mt-3 text-sm text-[#4E552A]">
              Your happiness is our top priority. We are here to serve you.
            </p>
          </div>

        </div>
      </section>

     
      <section className="bg-[#4E552A] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To make premium products accessible to everyone while maintaining
            trust, transparency, and sustainability.
          </p>
        </div>
      </section>

    </div>
  )
}

export default About
