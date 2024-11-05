import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const {
    user: { userId },
    loading,
  } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!userId && !loading) navigate("/login");
  }, [userId, navigate, loading]);
  if (userId) return children;
}

export default ProtectedRoute;
