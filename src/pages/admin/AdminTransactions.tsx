import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  Download, 
  CheckCircle, 
  XCircle, 
  Clock,
  Filter
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

const AdminTransactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const { toast } = useToast();

  const [transactions, setTransactions] = useState([
    { id: 1, user: "john_doe", type: "Deposit", amount: 1000, status: "Pending", date: "2024-01-15", crypto: "BTC", receipt: true },
    { id: 2, user: "jane_smith", type: "Withdrawal", amount: 500, status: "Completed", date: "2024-01-14", crypto: "ETH", receipt: false },
    { id: 3, user: "mike_wilson", type: "Deposit", amount: 750, status: "Pending", date: "2024-01-13", crypto: "USDT", receipt: true },
    { id: 4, user: "sarah_connor", type: "Withdrawal", amount: 300, status: "Rejected", date: "2024-01-12", crypto: "BTC", receipt: false },
    { id: 5, user: "alex_jones", type: "Deposit", amount: 2000, status: "Completed", date: "2024-01-11", crypto: "ETH", receipt: true },
    { id: 6, user: "emma_davis", type: "Deposit", amount: 1500, status: "Pending", date: "2024-01-10", crypto: "BTC", receipt: true },
    { id: 7, user: "robert_brown", type: "Withdrawal", amount: 800, status: "Pending", date: "2024-01-09", crypto: "USDT", receipt: false },
    { id: 8, user: "lisa_taylor", type: "Deposit", amount: 3000, status: "Completed", date: "2024-01-08", crypto: "ETH", receipt: true },
  ]);

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.crypto.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === "all" || transaction.type.toLowerCase() === filterType.toLowerCase();
    const matchesStatus = filterStatus === "all" || transaction.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleAccept = (id: number) => {
    setTransactions(prev => 
      prev.map(t => t.id === id ? { ...t, status: "Completed" } : t)
    );
    toast({
      title: "Transaction Approved",
      description: "Transaction has been marked as completed",
    });
  };

  const handleReject = (id: number) => {
    setTransactions(prev => 
      prev.map(t => t.id === id ? { ...t, status: "Rejected" } : t)
    );
    toast({
      title: "Transaction Rejected",
      description: "Transaction has been rejected",
      variant: "destructive",
    });
  };

  const handleDownloadReceipt = (transaction: any) => {
    toast({
      title: "Downloading Receipt",
      description: `Receipt for ${transaction.user}'s transaction`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Rejected":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "Rejected":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">All Transactions</h1>
            <p className="text-gray-400">Manage platform transactions</p>
          </div>
          <div className="text-white">
            Total: <span className="font-bold">{filteredTransactions.length}</span>
          </div>
        </div>

        {/* Filters */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by username, type, or crypto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/50"
                />
              </div>
              
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="p-3 rounded-lg bg-black/50 text-white border border-white/10"
              >
                <option value="all">All Types</option>
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
              </select>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="p-3 rounded-lg bg-black/50 text-white border border-white/10"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Transactions ({filteredTransactions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(transaction.status)}
                    <div>
                      <p className="text-white font-medium">@{transaction.user}</p>
                      <p className="text-sm text-gray-400">
                        {transaction.date} • {transaction.crypto} • {transaction.type}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`font-medium ${transaction.type === 'Deposit' ? 'text-green-500' : 'text-orange-500'}`}>
                        {transaction.type === 'Deposit' ? '+' : '-'}${transaction.amount}
                      </p>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      {transaction.receipt && transaction.type === 'Deposit' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDownloadReceipt(transaction)}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                      
                      {transaction.status === 'Pending' && (
                        <>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleAccept(transaction.id)}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleReject(transaction.id)}
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminTransactions;