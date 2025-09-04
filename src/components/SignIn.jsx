import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/bogo.png";
import eyeIcon from "../assets/Eye Open.png";
import signinImage from "../assets/signin.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Section - Login */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-12 lg:p-16">
        <div className="w-full max-w-md bg-[#0d0d0d] p-6 sm:p-8 rounded-xl shadow-lg text-white">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold text-lg sm:text-xl">
              <img src={logo} alt="Easistar Logo" />
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
            Welcome to Easistar
          </h1>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Login to your account
          </p>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {/* Email Input */}
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full p-3 mb-5 rounded border border-gray-700 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8BC255]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <label className="block mb-1 text-sm">Password</label>
          <div className="relative mb-3">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 rounded border border-gray-700 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8BC255] pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              aria-label="Toggle password visibility"
            >
              <img src={eyeIcon} alt="Toggle visibility" className="w-5 h-5" />
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-[#8BC255] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#8BC255] hover:bg-green-600 transition text-black font-semibold py-3 rounded mb-6 text-sm sm:text-base"
          >
            Sign In
          </button>

          {/* Register Link */}
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#8BC255] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6">
        <img
          src={signinImage}
          alt="Signin Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
