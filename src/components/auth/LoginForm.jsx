import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-sadari.vercel.app/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Simpan token/flag di localStorage
        localStorage.setItem("token", data.token);
        
        console.log("Login successful:", data);
        alert(data.message); // "Login berhasil"
        navigate("/home"); // redirect ke /home
      } else {
        alert(data.message || "Login gagal!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan jaringan!");
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E1004E] p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="Sadari Logo"
            className="w-40 h-40 object-contain"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-white">Login</h2>
          <p className="text-white/90 text-sm">
            Welcome! Please Login to use this app
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white/80"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white/80"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-[#E3006F] font-semibold py-2 rounded-md hover:bg-white/90 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center text-white/90 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};