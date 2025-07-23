import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

const Withdrawal = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const cryptos = [
    { symbol: "BTC", name: "Bitcoin", balance: 0.285 },
    { symbol: "ETH", name: "Ethereum", balance: 4.52 },
    { symbol: "USDT", name: "Tether", balance: 5000 },
  ];

  const handleWithdrawal = () => {
    if (!selectedCrypto || !amount || !address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Withdrawal Requested",
      description: "Your withdrawal is being processed",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Withdraw Funds</h1>
          <p className="text-gray-400">Select cryptocurrency and enter withdrawal details</p>
        </div>

        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Select Cryptocurrency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.symbol}
                  onClick={() => setSelectedCrypto(crypto.symbol)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedCrypto === crypto.symbol
                      ? "border-primary bg-primary/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-bold text-primary">{crypto.symbol}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{crypto.name}</p>
                        <p className="text-sm text-gray-400">{crypto.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{crypto.balance} {crypto.symbol}</p>
                      <p className="text-sm text-gray-400">Available</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Withdrawal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address">Wallet Address</Label>
              <Input
                id="address"
                placeholder="Enter wallet address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-black/50"
              />
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black/50"
              />
            </div>
            <Button onClick={handleWithdrawal} className="w-full button-gradient">
              Request Withdrawal
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Withdrawal;