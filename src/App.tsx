import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Plans from "./pages/dashboard/Plans";
import Wallet from "./pages/dashboard/Wallet";
import History from "./pages/dashboard/History";
import Market from "./pages/dashboard/Market";
import Deposit from "./pages/dashboard/Deposit";
import Withdrawal from "./pages/dashboard/Withdrawal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/plans" element={<Plans />} />
            <Route path="/dashboard/wallet" element={<Wallet />} />
            <Route path="/dashboard/history" element={<History />} />
            <Route path="/dashboard/market" element={<Market />} />
            <Route path="/dashboard/deposit" element={<Deposit />} />
            <Route path="/dashboard/withdrawal" element={<Withdrawal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;