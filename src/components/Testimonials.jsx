import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "ShopEase products are absolutely amazing. The quality exceeded my expectations and delivery was super fast."
  },
  {
    id: 2,
    name: "Rahul Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great shopping experience! Smooth checkout process and premium packaging."
  },
  {
    id: 3,
    name: "Anjali Verma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I love the minimal design and curated collections. Definitely my go-to online store."
  }
]

function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((index + 1) % testimonials.length)
  }

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-[#4E552A] mb-12">
          What Our Customers Say
        </h2>

        <div className="relative flex items-center justify-center">

         
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 bg-[#4E552A] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#7C8A3C] transition"
          >
            ‹
          </button>

         
          <div className="bg-[#F4F8E8] p-10 rounded-2xl shadow-md max-w-2xl">
            <p className="italic text-lg text-[#4E552A] mb-6">
              “{current.text}”
            </p>

            <div className="flex flex-col items-center">
              <img
                src={current.image}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h4 className="font-semibold text-[#4E552A]">
                {current.name}
              </h4>
            </div>
          </div>

          
          <button
            onClick={next}
            className="absolute right-0 md:-right-12 bg-[#4E552A] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#7C8A3C] transition"
          >
            ›
          </button>
        </div>

     
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#4E552A]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
