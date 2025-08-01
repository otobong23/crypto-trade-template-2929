import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Settings, Key, Wallet } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { useTranslation } from "react-i18next";

const AdminSettings = () => {
  const { t } = useTranslation();
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
        title: t("common.error"),
        description: t("admin.settings.passwordsDoNotMatch"),
        variant: "destructive",
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        title: t("common.error"), 
        description: t("admin.settings.passwordTooShort"),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t("admin.settings.passwordUpdated"),
      description: t("admin.settings.passwordUpdatedSuccess"),
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
      title: t("admin.settings.addressesUpdated"),
      description: t("admin.settings.walletAddressesUpdated"),
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Settings className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-white">{t("admin.settings.title")}</h1>
            <p className="text-gray-400">{t("admin.settings.subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Password Change */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Key className="w-5 h-5" />
                {t("admin.settings.changePassword")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">{t("admin.settings.currentPassword")}</Label>
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
                  <Label htmlFor="newPassword">{t("admin.settings.newPassword")}</Label>
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
                  <Label htmlFor="confirmPassword">{t("admin.settings.confirmPassword")}</Label>
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
                  {t("admin.settings.updatePassword")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Wallet Addresses */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                {t("admin.settings.walletAddresses")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWalletUpdate} className="space-y-4">
                <div>
                  <Label htmlFor="bitcoin">{t("admin.settings.bitcoinAddress")}</Label>
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
                  <Label htmlFor="ethereum">{t("admin.settings.ethereumAddress")}</Label>
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
                  <Label htmlFor="usdt">{t("admin.settings.usdtAddress")}</Label>
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
                  {t("admin.settings.updateAddresses")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* System Information */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{t("admin.settings.systemInformation")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">{t("admin.settings.platformVersion")}</p>
                <p className="text-lg font-bold text-white">v2.1.0</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">{t("admin.settings.lastUpdated")}</p>
                <p className="text-lg font-bold text-white">2024-01-20</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">{t("admin.settings.serverStatus")}</p>
                <p className="text-lg font-bold text-green-500">{t("admin.settings.online")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;