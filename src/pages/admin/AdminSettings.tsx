import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Settings, Key, Wallet } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

const AdminSettings = () => {
  const { toast } = useToast();
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [walletAddresses, setWalletAddresses] = useState({
    bitcoin: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    ethereum: "0x742d35Cc6634C0532925a3b8D4521d296a4e8C58",
    usdt: "0x742d35Cc6634C0532925a3b8D4521d296a4e8C58",
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match",
        variant: "destructive",
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        title: "Error", 
        description: "Password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Password Updated",
      description: "Admin password has been changed successfully",
    });

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleWalletUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Wallet Addresses Updated",
      description: "Cryptocurrency wallet addresses have been updated",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Settings className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Settings</h1>
            <p className="text-gray-400">Manage system configuration</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Password Change */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Key className="w-5 h-5" />
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    required
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ 
                      ...passwordData, 
                      currentPassword: e.target.value 
                    })}
                    className="bg-black/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    required
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ 
                      ...passwordData, 
                      newPassword: e.target.value 
                    })}
                    className="bg-black/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ 
                      ...passwordData, 
                      confirmPassword: e.target.value 
                    })}
                    className="bg-black/50"
                  />
                </div>
                
                <Button type="submit" className="w-full button-gradient">
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Wallet Addresses */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Cryptocurrency Wallet Addresses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWalletUpdate} className="space-y-4">
                <div>
                  <Label htmlFor="bitcoin">Bitcoin (BTC) Address</Label>
                  <Input
                    id="bitcoin"
                    type="text"
                    required
                    value={walletAddresses.bitcoin}
                    onChange={(e) => setWalletAddresses({ 
                      ...walletAddresses, 
                      bitcoin: e.target.value 
                    })}
                    className="bg-black/50 font-mono text-sm"
                  />
                </div>
                
                <div>
                  <Label htmlFor="ethereum">Ethereum (ETH) Address</Label>
                  <Input
                    id="ethereum"
                    type="text"
                    required
                    value={walletAddresses.ethereum}
                    onChange={(e) => setWalletAddresses({ 
                      ...walletAddresses, 
                      ethereum: e.target.value 
                    })}
                    className="bg-black/50 font-mono text-sm"
                  />
                </div>
                
                <div>
                  <Label htmlFor="usdt">USDT Address</Label>
                  <Input
                    id="usdt"
                    type="text"
                    required
                    value={walletAddresses.usdt}
                    onChange={(e) => setWalletAddresses({ 
                      ...walletAddresses, 
                      usdt: e.target.value 
                    })}
                    className="bg-black/50 font-mono text-sm"
                  />
                </div>
                
                <Button type="submit" className="w-full button-gradient">
                  Update Wallet Addresses
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* System Information */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">Platform Version</p>
                <p className="text-lg font-bold text-white">v2.1.0</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">Last Backup</p>
                <p className="text-lg font-bold text-white">2024-01-20</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">Server Status</p>
                <p className="text-lg font-bold text-green-500">Online</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;