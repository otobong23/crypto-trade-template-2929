import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle, 
  XCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import MarketOverviewWidget from "@/components/MarketOverviewWidget";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const userStats = {
    totalBalance: 12450.50,
    totalProfit: 2340.75,
    totalLoss: 450.25,
    activeInvestments: 5
  };

  const recentTransactions = [
    { id: 1, type: "Deposit", amount: 1000, status: "Completed", date: "2024-01-15", crypto: "BTC" },
    { id: 2, type: "Withdrawal", amount: 500, status: "Pending", date: "2024-01-14", crypto: "ETH" },
    { id: 3, type: "Deposit", amount: 750, status: "Completed", date: "2024-01-13", crypto: "USDT" },
    { id: 4, type: "Withdrawal", amount: 300, status: "Rejected", date: "2024-01-12", crypto: "BTC" },
    { id: 5, type: "Deposit", amount: 2000, status: "Completed", date: "2024-01-11", crypto: "ETH" },
  ];

  const marketData = [
    { symbol: "BTC", price: 45250.50, change: 2.45, positive: true },
    { symbol: "ETH", price: 2850.75, change: -1.23, positive: false },
    { symbol: "USDT", price: 1.00, change: 0.01, positive: true },
    { symbol: "BNB", price: 320.25, change: 5.67, positive: true },
    { symbol: "ADA", price: 0.45, change: -3.21, positive: false },
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
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
         <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{t('dashboard.home.welcome')}, John!</h1>
            <p className="text-gray-400">Here's your trading overview</p>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
          </Avatar>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass border-white/10">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{t('dashboard.home.totalBalance')}</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${userStats.totalBalance.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{t('dashboard.home.dailyProfit')}</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">${userStats.totalProfit.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+8.2% this month</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Loss</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">${userStats.totalLoss.toLocaleString()}</div>
              <p className="text-xs text-gray-400">-2.1% this month</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/10">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{t('dashboard.home.activeInvestments')}</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{userStats.activeInvestments}</div>
              <p className="text-xs text-gray-400">2 new this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card className="glass border-white/10">
             <CardHeader>
              <CardTitle className="text-white">{t('dashboard.home.recentTransactions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <p className="text-white font-medium">{transaction.type}</p>
                        <p className="text-sm text-gray-400">{transaction.date} • {transaction.crypto}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${transaction.type === 'Deposit' ? 'text-green-500' : 'text-orange-500'}`}>
                        {transaction.type === 'Deposit' ? '+' : '-'}${transaction.amount}
                      </p>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
               <Button variant="outline" className="w-full mt-4">
                {t('dashboard.home.viewAll')}
              </Button>
            </CardContent>
          </Card>

          {/* Live Market Watch */}
          <Card className="glass border-white/10">
             <CardHeader>
              <CardTitle className="text-white">{t('dashboard.home.marketWatch')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketData.map((coin) => (
                  <div key={coin.symbol} className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{coin.symbol}</span>
                      </div>
                      <span className="text-white font-medium">{coin.symbol}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">${coin.price.toLocaleString()}</p>
                      <div className={`flex items-center gap-1 text-sm ${coin.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {coin.positive ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {coin.change.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
               <Button variant="outline" className="w-full mt-4">
                {t('dashboard.home.viewAll')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Market Chart */}
        <Card className="glass border-white/10">
           <CardHeader>
            <CardTitle className="text-white">{t('dashboard.home.portfolioOverview')}</CardTitle>
          </CardHeader>
          <CardContent>
            <MarketOverviewWidget height="400" />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;