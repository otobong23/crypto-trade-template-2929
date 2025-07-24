import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

const Deposit = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const cryptos = [
    { symbol: "BTC", name: "Bitcoin", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { symbol: "ETH", name: "Ethereum", address: "0x742d35Cc6634C0532925a3b8D4521d296a4e8C58" },
    { symbol: "USDT", name: "Tether", address: "0x742d35Cc6634C0532925a3b8D4521d296a4e8C58" },
  ];

  const handleCryptoSelect = (crypto: typeof cryptos[0]) => {
    setSelectedCrypto(crypto.symbol);
  };

  const handleDeposit = () => {
    if (!selectedCrypto || !amount) {
      toast({
        title: "Error",
        description: "Please select crypto and enter amount",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to confirmation page with selected crypto and amount
    navigate("/dashboard/deposit/confirm", {
      state: { selectedCrypto, amount }
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Deposit Funds</h1>
          <p className="text-gray-400">Select cryptocurrency and amount to deposit</p>
        </div>

        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Select Cryptocurrency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.symbol}
                  onClick={() => handleCryptoSelect(crypto)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedCrypto === crypto.symbol
                      ? "border-primary bg-primary/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary">{crypto.symbol}</span>
                    </div>
                    <p className="text-white font-medium">{crypto.name}</p>
                    <p className="text-sm text-gray-400">{crypto.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Deposit Amount</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black/50"
              />
            </div>
            <Button onClick={handleDeposit} className="w-full button-gradient">
              Proceed to Deposit
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Deposit;