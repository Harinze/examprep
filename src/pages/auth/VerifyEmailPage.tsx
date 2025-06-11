import { useState } from "react";
import { auth } from "../../firebase";
import { sendEmailVerification, reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const VerifyEmailPage = () => {
  const [resent, setResent] = useState(false);
  const [checking, setChecking] = useState(false);
  const navigate = useNavigate();

  const handleResend = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      setResent(true);
    }
  };

  const handleCheckVerification = async () => {
    setChecking(true);
    if (auth.currentUser) {
      await reload(auth.currentUser); 
      if (auth.currentUser.emailVerified) {
        navigate("/dashboard");
      } else {
        alert("Email not verified yet. Please check your inbox.");
      }
    }
    setChecking(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4 text-center">
      <h2 className="text-2xl font-bold">Verify Your Email</h2>
      <p>We’ve sent a verification link to your email address.</p>

      {resent && <p className="text-green-500">Verification email resent!</p>}

      <button onClick={handleResend} className="bg-yellow-500 text-white px-4 py-2 rounded">
        Resend Email
      </button>

      <button onClick={handleCheckVerification} disabled={checking} className="bg-blue-600 text-white px-4 py-2 rounded ml-2">
        {checking ? "Checking..." : "I've Verified"}
      </button>
    </div>
  );
};

export default VerifyEmailPage;
