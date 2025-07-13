import React, { useState, useEffect } from "react";
import { ToastProvider } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RequireAuth({ isLoggedIn, children }) {
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
      toast.success(`Welcome back, ${role}!`);
    }
  }, []);

  const handleLogin = (role) => {
    localStorage.setItem("role", role);
    setUserRole(role);
    setIsLoggedIn(true);
    toast.success(`Logged in as ${role}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setUserRole("");
    toast.success("Logged out successfully");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route
                path="/login"
                element={
                  isLoggedIn ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <LoginPage onLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth isLoggedIn={isLoggedIn}>
                    <AdminDashboard userRole={userRole} onLogout={handleLogout} />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;