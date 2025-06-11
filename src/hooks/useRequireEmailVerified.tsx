import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { reload } from "firebase/auth";

export const useRequireEmailVerified = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await reload(user);
        if (!user.emailVerified) {
          navigate("/verify-email");
        }
      }
    };

    checkVerification();
  }, [navigate]);
};
