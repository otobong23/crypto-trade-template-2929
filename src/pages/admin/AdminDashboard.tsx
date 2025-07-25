import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle, 
  XCircle 
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

const AdminDashboard = () => {
  const stats = {
    totalUsers: 1250,
    totalTransactions: 5680,
    totalDeposits: 125000,
    totalWithdrawals: 89500,
    pendingTransactions: 23,
    completedTransactions: 5432,
    rejectedTransactions: 225
  };

  const recentTransactions = [
    { id: 1, user: "john_doe", type: "Deposit", amount: 1000, status: "Pending", date: "2024-01-15", crypto: "BTC" },
    { id: 2, user: "jane_smith", type: "Withdrawal", amount: 500, status: "Completed", date: "2024-01-14", crypto: "ETH" },
    { id: 3, user: "mike_wilson", type: "Deposit", amount: 750, status: "Pending", date: "2024-01-13", crypto: "USDT" },
    { id: 4, user: "sarah_connor", type: "Withdrawal", amount: 300, status: "Rejected", date: "2024-01-12", crypto: "BTC" },
    { id: 5, user: "alex_jones", type: "Deposit", amount: 2000, status: "Completed", date: "2024-01-11", crypto: "ETH" },
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">Platform overview and statistics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+12 new this week</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Transactions</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalTransactions.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+5.2% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Deposits</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">${stats.totalDeposits.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+8.1% this month</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Withdrawals</CardTitle>
              <TrendingDown className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">${stats.totalWithdrawals.toLocaleString()}</div>
              <p className="text-xs text-gray-400">-2.3% this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                Pending Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">{stats.pendingTransactions}</div>
              <p className="text-sm text-gray-400">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Completed Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">{stats.completedTransactions}</div>
              <p className="text-sm text-gray-400">Successfully processed</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Rejected Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-500">{stats.rejectedTransactions}</div>
              <p className="text-sm text-gray-400">Failed transactions</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-black/20">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(transaction.status)}
                    <div>
                      <p className="text-white font-medium">@{transaction.user}</p>
                      <p className="text-sm text-gray-400">{transaction.date} • {transaction.crypto}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`font-medium ${transaction.type === 'Deposit' ? 'text-green-500' : 'text-orange-500'}`}>
                        {transaction.type === 'Deposit' ? '+' : '-'}${transaction.amount}
                      </p>
                      <p className="text-sm text-gray-400">{transaction.type}</p>
                    </div>
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;