import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // api buat registrasi
    // Simulate an API call

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    setTimeout(() => {
      console.log("User registered with email:", email);
      // Redirect to the next step or show a success message

      navigate("/");
    }, 1000);
    console.log("Sign up with:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E1004E] p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">Create Your Account</h2>
          <p className="text-white/90 text-sm">
            Hello! Please setup your new account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white/80"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white/80"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white/80"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white/80"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-[#E3006F] font-semibold py-2 rounded-md hover:bg-white/90 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-white/90 text-sm">
          Already have an account?{" "}
          <Link to="/" className="font-semibold underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
