import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/lib/auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  if (!isAuthenticated()) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
        state={{ from: location }}
        replace
      />
    );
  }
  return <>{children}</>;
}

export default ProtectedRoute;
