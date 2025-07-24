import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: "user" | "admin";
}

const ProtectedRoute = ({ children, requiredRole = "user" }: ProtectedRouteProps) => {
  const token = localStorage.getItem(requiredRole === "admin" ? "adminToken" : "authToken");
  const userRole = localStorage.getItem("userRole");

  // Check if user is authenticated
  if (!token) {
    return <Navigate to={requiredRole === "admin" ? "/admin/login" : "/login"} replace />;
  }

  // Check if user has required role for admin routes
  if (requiredRole === "admin" && userRole !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;