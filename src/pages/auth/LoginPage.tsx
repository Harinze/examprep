import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border" placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border" placeholder="Password" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
      <p>Don't have an account? <Link to="/register" className="text-blue-500">Sign up</Link></p>
    </form>
  );
};

export default LoginPage;
