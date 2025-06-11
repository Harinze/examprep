// src/pages/DashboardPage.tsx
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome {user?.email}</h2>
      <button
        onClick={async () => {
          await signOut(auth);
          navigate("/login");
        }}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
