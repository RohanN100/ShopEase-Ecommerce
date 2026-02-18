import { useState } from "react"
import { useAuth } from "../context/AuthContext"

function Account() {
  const {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    loginWithGoogle
  } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    try {
      if (isLogin) {
        await login(email, password)
        setMessage("Login Successful ")
      } else {
        await signup(email, password)
        setMessage("Account Created Successfully ")
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("User does not exist. Please Sign Up.")
      } 
      else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.")
      }
      else if (err.code === "auth/email-already-in-use") {
        setError("Email already registered. Please Login.")
      }
      else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.")
      }
      else {
        setError("Invalid email or password.")
      }
    }
  }

  const handleForgotPassword = async () => {
    setError("")
    setMessage("")

    if (!email) {
      setError("Enter your email first")
      return
    }

    try {
      await resetPassword(email)
      setMessage("Password reset email sent ")
    } catch {
      setError("Failed to send reset email.")
    }
  }

  const handleGoogle = async () => {
    setError("")
    setMessage("")
    try {
      await loginWithGoogle()
    } catch {
      setError("Google login failed.")
    }
  }

  

  if (currentUser) {
    return (
      <div className="min-h-screen bg-[#F4F8E8] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-full max-w-lg">

          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            ✓
          </div>

          <h2 className="text-3xl font-bold text-[#4E552A] mb-2">
            Welcome to ShopEase 
          </h2>

          <p className="text-[#7C8A3C] font-semibold mb-4">
            {currentUser.email}
          </p>

          <p className="text-gray-600 mb-6">
            You're successfully logged in. Explore our premium collections and enjoy seamless shopping experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-[#7C8A3C] text-white px-6 py-3 rounded-lg hover:bg-[#4E552A] transition"
            >
              Continue Shopping
            </a>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    )
  }

 
  return (
    <div className="min-h-screen bg-[#F4F8E8] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-[#4E552A] text-center mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {message && (
          <p className="text-green-600 text-sm mb-4 text-center">
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg focus:outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-2 cursor-pointer text-sm text-[#7C8A3C]"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7C8A3C] text-white py-2 rounded-lg hover:bg-[#4E552A] transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <div className="text-center mt-4">

          {isLogin && (
            <button
              onClick={handleForgotPassword}
              className="text-sm text-[#7C8A3C]"
            >
              Forgot Password?
            </button>
          )}

          <p className="mt-4 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#7C8A3C] ml-1 cursor-pointer font-medium"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>

          <div className="my-4">OR</div>

          <button
            onClick={handleGoogle}
            className="w-full border py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

        </div>

      </div>
    </div>
  )
}

export default Account
