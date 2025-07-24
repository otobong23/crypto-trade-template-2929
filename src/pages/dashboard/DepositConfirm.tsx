import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Copy, Upload, CheckCircle, QrCode } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const DepositConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Get crypto and amount from navigation state
  const { selectedCrypto, amount } = location.state || {};

  if (!selectedCrypto || !amount) {
    navigate("/dashboard/deposit");
    return null;
  }

  const cryptoData = {
    BTC: { 
      name: "Bitcoin", 
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      currentPrice: 45250.50,
      network: "Bitcoin Network"
    },
    ETH: { 
      name: "Ethereum", 
      address: "0x742d35Cc6634C0532925a3b8D4521d296a4e8C58",
      currentPrice: 2850.75,
      network: "Ethereum Network (ERC-20)"
    },
    USDT: { 
      name: "Tether", 
      address: "0x742d35Cc6634C0532925a3b8D4521d296a4e8C58",
      currentPrice: 1.00,
      network: "Ethereum Network (ERC-20)"
    },
  };

  const crypto = cryptoData[selectedCrypto as keyof typeof cryptoData];
  const cryptoAmount = (parseFloat(amount) / crypto.currentPrice).toFixed(8);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Address copied to clipboard",
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleConfirmDeposit = async () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please upload payment receipt",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate file upload delay
    setTimeout(() => {
      toast({
        title: "Deposit Submitted",
        description: "Your deposit is now pending review. You will be notified once processed.",
      });
      setIsUploading(false);
      navigate("/dashboard/history");
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Complete Deposit</h1>
          <p className="text-gray-400">Send {selectedCrypto} to the address below</p>
        </div>

        {/* Deposit Summary */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Deposit Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-black/20">
              <span className="text-gray-400">Amount (USD)</span>
              <span className="text-white font-medium">${amount}</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-black/20">
              <span className="text-gray-400">Cryptocurrency</span>
              <span className="text-white font-medium">{crypto.name} ({selectedCrypto})</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-black/20">
              <span className="text-gray-400">Current Rate</span>
              <span className="text-white font-medium">${crypto.currentPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-gray-400">Amount to Send</span>
              <span className="text-primary font-bold">{cryptoAmount} {selectedCrypto}</span>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Address */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              Wallet Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-gray-400">Network</Label>
              <div className="p-3 rounded-lg bg-black/20 text-white">
                {crypto.network}
              </div>
            </div>
            
            <div>
              <Label className="text-gray-400">Send to this address</Label>
              <div className="flex gap-2">
                <div className="flex-1 p-3 rounded-lg bg-black/20 text-white font-mono text-sm break-all">
                  {crypto.address}
                </div>
                <Button
                  onClick={() => copyToClipboard(crypto.address)}
                  variant="outline"
                  size="icon"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center">
                <div className="text-black text-center">
                  <QrCode className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-sm">QR Code</p>
                  <p className="text-xs">{selectedCrypto} Address</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Receipt */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Upload Payment Receipt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="receipt" className="text-gray-400">
                Upload screenshot or receipt of your transaction
              </Label>
              <div className="mt-2">
                <input
                  id="receipt"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <label
                  htmlFor="receipt"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-gray-400 text-sm">
                    {selectedFile ? selectedFile.name : "Click to upload receipt"}
                  </p>
                </label>
              </div>
            </div>

            {selectedFile && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-500">Receipt uploaded: {selectedFile.name}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Confirm Button */}
        <Card className="glass border-white/10">
          <CardContent className="pt-6">
            <Button 
              onClick={handleConfirmDeposit}
              disabled={!selectedFile || isUploading}
              className="w-full button-gradient"
            >
              {isUploading ? "Processing..." : "Confirm Deposit"}
            </Button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Your deposit will be processed within 24 hours after confirmation
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DepositConfirm;