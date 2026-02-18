function Newsletter() {
  return (
    <section className="bg-[#2F4F2F] py-16 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold mb-4">
          Stay Connected With Us
        </h2>

        <p className="mb-8 text-lg text-gray-200">
          Get updates for new products, special offers and design inspiration.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
  type="email"
  placeholder="Enter your email address"
  className="w-full sm:flex-1 px-6 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#C8A96A]"
/>

          <button className="bg-[#C2A76D] px-6 py-3 rounded-lg font-semibold hover:bg-[#a68c58] transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  )
}

export default Newsletter
