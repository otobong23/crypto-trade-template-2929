import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";

const AllUsers = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, firstName: "John", lastName: "Doe", username: "john_doe", email: "john@example.com", balance: 15420.50, status: "Active", joinDate: "2024-01-15" },
    { id: 2, firstName: "Jane", lastName: "Smith", username: "jane_smith", email: "jane@example.com", balance: 8750.25, status: "Active", joinDate: "2024-01-10" },
    { id: 3, firstName: "Mike", lastName: "Wilson", username: "mike_wilson", email: "mike@example.com", balance: 22100.75, status: "Active", joinDate: "2024-01-08" },
    { id: 4, firstName: "Sarah", lastName: "Connor", username: "sarah_connor", email: "sarah@example.com", balance: 450.00, status: "Suspended", joinDate: "2024-01-05" },
    { id: 5, firstName: "Alex", lastName: "Jones", username: "alex_jones", email: "alex@example.com", balance: 33250.10, status: "Active", joinDate: "2024-01-03" },
    { id: 6, firstName: "Emma", lastName: "Davis", username: "emma_davis", email: "emma@example.com", balance: 7890.50, status: "Active", joinDate: "2024-01-01" },
    { id: 7, firstName: "Robert", lastName: "Brown", username: "robert_brown", email: "robert@example.com", balance: 12600.25, status: "Inactive", joinDate: "2023-12-28" },
    { id: 8, firstName: "Lisa", lastName: "Taylor", username: "lisa_taylor", email: "lisa@example.com", balance: 19850.75, status: "Active", joinDate: "2023-12-25" },
  ];

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500/10 text-green-500";
      case "inactive":
        return "bg-gray-500/10 text-gray-500";
      case "suspended":
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
            <h1 className="text-3xl font-bold text-white">{t('admin.users.title')}</h1>
            <p className="text-gray-400">{t('admin.users.subtitle')}</p>
          </div>
          <div className="text-white">
            {t('admin.users.totalUsers')}: <span className="font-bold">{users.length}</span>
          </div>
        </div>

        {/* Search Filter */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{t('admin.users.filterUsers')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t('admin.users.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/50"
              />
            </div>
          </CardContent>
        </Card>

        {/* Users List */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{t('admin.users.usersList', { count: filteredUsers.length })}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {user.firstName[0]}{user.lastName[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-sm text-gray-400">@{user.username}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-white font-medium">${user.balance.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">{t('admin.users.balance')}</p>
                    </div>
                    
                    <Badge className={getStatusColor(user.status)}>
                      {t(`common.status.${user.status.toLowerCase()}`)}
                    </Badge>
                    
                    <div className="flex gap-2">
                      <Link to={`/admin/users/${user.id}`}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
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

export default AllUsers;