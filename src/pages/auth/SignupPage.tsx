import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await sendEmailVerification(userCredential.user); // 👈 Send verification email

      await axios.post("/api/register", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      });

      navigate("/verify-email"); // 👈 Go to verification page
    } catch (err: any) {
      const msg = err?.response?.data?.message || err.message || "Signup failed";
      setError(msg);
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}

      <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border" placeholder="Full Name" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-2 border" placeholder="Email" />
      <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border" placeholder="Phone Number" />
      <input name="password" type="password" value={formData.password} onChange={handleChange} className="w-full p-2 border" placeholder="Password" />

      <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border">
        <option value="user">User</option>
        <option value="artist">Artist</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Sign Up
      </button>

      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </form>
  );
};

export default SignupPage;
