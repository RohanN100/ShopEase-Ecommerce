import { useState } from "react"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all required fields")
      return
    }

    alert("Message Sent Successfully!")
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="bg-[#F4F8E8]">

      
      <section className="bg-[#2F4F2F] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

   
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              title: "Email Us",
              desc: "hello@shopease.com",
              sub: "Send us anytime",
            },
            {
              title: "Call Us",
              desc: "+8459877184 ",
              sub: "Mon–Sat 9AM–6PM",
            },
            {
              title: "Visit Us",
              desc: "Pune, Maharashtra",
              sub: "India",
            },
            {
              title: "Business Hours",
              desc: "Mon–Sat: 9AM–6PM",
              sub: "Sunday Closed",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <div className="w-14 h-14 bg-[#7C8A3C] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                ✉
              </div>
              <h3 className="font-semibold text-[#4E552A] mb-2">
                {item.title}
              </h3>
              <p className="font-medium">{item.desc}</p>
              <p className="text-sm text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#4E552A] mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7C8A3C] outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7C8A3C] outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7C8A3C] outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7C8A3C] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F4F2F] text-white py-3 rounded-lg hover:bg-[#4E552A] transition"
              >
                Send Message
              </button>
            </form>
          </div>

         
          <div className="bg-[#E8EDCF] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#4E552A] mb-6">
              Visit Our Showroom
            </h2>

            <div className="bg-white rounded-lg p-6 text-center mb-6">
              <p className="font-medium">
                123 ShopEase  
                <br />
                Pune, Maharashtra  
                <br />
                411001
              </p>
            </div>

            <div className="space-y-3">
              <p>✔ See products in person</p>
              <p>✔ Expert consultation</p>
              <p>✔ Custom orders available</p>
              <p>✔ Free parking</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact
