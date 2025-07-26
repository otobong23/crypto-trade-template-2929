import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  History as HistoryIcon, 
  Search, 
  Filter,
  Download,
  CheckCircle,
  Clock,
  XCircle,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Dummy transaction data
  const transactions = [
    { 
      id: "TXN001", 
      type: "Deposit", 
      amount: 1000, 
      crypto: "BTC", 
      status: "Completed", 
      date: "2024-01-15 14:30",
      fee: 0.5,
      hash: "0x1234...abcd"
    },
    { 
      id: "TXN002", 
      type: "Withdrawal", 
      amount: 500, 
      crypto: "ETH", 
      status: "Pending", 
      date: "2024-01-14 09:15",
      fee: 2.5,
      hash: "0x5678...efgh"
    },
    { 
      id: "TXN003", 
      type: "Deposit", 
      amount: 750, 
      crypto: "USDT", 
      status: "Completed", 
      date: "2024-01-13 16:45",
      fee: 1.0,
      hash: "0x9abc...ijkl"
    },
    { 
      id: "TXN004", 
      type: "Withdrawal", 
      amount: 300, 
      crypto: "BTC", 
      status: "Rejected", 
      date: "2024-01-12 11:20",
      fee: 0.0,
      hash: "0xdef0...mnop"
    },
    { 
      id: "TXN005", 
      type: "Deposit", 
      amount: 2000, 
      crypto: "ETH", 
      status: "Completed", 
      date: "2024-01-11 08:00",
      fee: 3.0,
      hash: "0x1234...qrst"
    },
    { 
      id: "TXN006", 
      type: "Withdrawal", 
      amount: 150, 
      crypto: "USDT", 
      status: "Completed", 
      date: "2024-01-10 13:30",
      fee: 0.5,
      hash: "0x5678...uvwx"
    },
    { 
      id: "TXN007", 
      type: "Deposit", 
      amount: 800, 
      crypto: "BTC", 
      status: "Pending", 
      date: "2024-01-09 19:15",
      fee: 0.8,
      hash: "0x9abc...yzab"
    },
    { 
      id: "TXN008", 
      type: "Withdrawal", 
      amount: 250, 
      crypto: "ETH", 
      status: "Completed", 
      date: "2024-01-08 10:45",
      fee: 1.5,
      hash: "0xdef0...cdef"
    }
  ];

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

  const getTypeIcon = (type: string) => {
    return type === "Deposit" ? (
      <ArrowDownLeft className="w-4 h-4 text-green-500" />
    ) : (
      <ArrowUpRight className="w-4 h-4 text-orange-500" />
    );
  };

  // Filter transactions
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.crypto.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || transaction.type.toLowerCase() === filterType;
    const matchesStatus = filterStatus === "all" || transaction.status.toLowerCase() === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Statistics
  const stats = {
    total: transactions.length,
    completed: transactions.filter(t => t.status === "Completed").length,
    pending: transactions.filter(t => t.status === "Pending").length,
    rejected: transactions.filter(t => t.status === "Rejected").length,
    totalDeposited: transactions.filter(t => t.type === "Deposit" && t.status === "Completed").reduce((sum, t) => sum + t.amount, 0),
    totalWithdrawn: transactions.filter(t => t.type === "Withdrawal" && t.status === "Completed").reduce((sum, t) => sum + t.amount, 0)
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
         <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{t('dashboard.history.title')}</h1>
            <p className="text-gray-400">{t('dashboard.history.subtitle')}</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card className="glass border-white/10">
            <CardContent className="p-4">
               <div className="text-2xl font-bold text-white">{stats.total}</div>
              <p className="text-xs text-gray-400">Total Transactions</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
              <p className="text-xs text-gray-400">Completed</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
              <p className="text-xs text-gray-400">Pending</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-500">{stats.rejected}</div>
              <p className="text-xs text-gray-400">Rejected</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardContent className="p-4">
               <div className="text-2xl font-bold text-green-500">${stats.totalDeposited.toLocaleString()}</div>
              <p className="text-xs text-gray-400">Total Deposited</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardContent className="p-4">
               <div className="text-2xl font-bold text-orange-500">${stats.totalWithdrawn.toLocaleString()}</div>
              <p className="text-xs text-gray-400">Total Withdrawn</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="glass border-white/10">
           <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="w-5 h-5" />
              {t('dashboard.history.filterByType')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">{t('common.search')}</label>
                <div className="relative">
                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder={t('dashboard.history.searchTransactions')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/50"
                  />
                </div>
              </div>

               <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">{t('dashboard.history.type')}</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="bg-black/50">
                    <SelectValue />
                  </SelectTrigger>
                   <SelectContent>
                    <SelectItem value="all">{t('dashboard.history.allTypes')}</SelectItem>
                    <SelectItem value="deposit">Deposit</SelectItem>
                    <SelectItem value="withdrawal">Withdrawal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

               <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">{t('dashboard.history.status')}</label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="bg-black/50">
                    <SelectValue />
                  </SelectTrigger>
                   <SelectContent>
                    <SelectItem value="all">{t('dashboard.history.allStatuses')}</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card className="glass border-white/10">
           <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <HistoryIcon className="w-5 h-5" />
              {t('dashboard.history.title')} ({filteredTransactions.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(transaction.type)}
                      {getStatusIcon(transaction.status)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{transaction.id}</p>
                      <p className="text-sm text-gray-400">{transaction.date}</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">{transaction.type}</p>
                      <p className="text-sm text-gray-400">{transaction.crypto}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className={`font-medium ${transaction.type === 'Deposit' ? 'text-green-500' : 'text-orange-500'}`}>
                        {transaction.type === 'Deposit' ? '+' : '-'}${transaction.amount}
                      </p>
                      <p className="text-sm text-gray-400">Fee: ${transaction.fee}</p>
                    </div>
                    
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                    
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
              
              {filteredTransactions.length === 0 && (
                 <div className="text-center py-8">
                  <p className="text-gray-400">{t('dashboard.history.noTransactions')}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default History;