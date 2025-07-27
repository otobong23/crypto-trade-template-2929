import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import api from "@/lib/api";
import { AxiosError } from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - replace with actual authentication
    setTimeout(async () => {
      if (username && password) {
        try {
          const response = await api.post<signResponse>('/auth/signin', { username, password })
          toast({
            title: "Login Successful",
            description: response.data.message,
          });
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("userRole", "user");
          // Redirect to login would happen here
          window.location.href = "/dashboard";
        } catch (err) {
          if (err instanceof AxiosError) {
            toast({
              title: "Error",
              description: err.response?.data.message,
              variant: "destructive",
            });
          } else {
            toast({
              title: "Error",
              description: 'Failed to load Login. Please try again later or reload page',
              variant: "destructive",
            });
          }
        }
      } else {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="glass border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <p className="text-muted-foreground">Sign in to your Trade Phere account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-black/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-black/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full button-gradient"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up here
                </Link>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <Link to="/" className="text-primary hover:underline">
                  Back to Home
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;