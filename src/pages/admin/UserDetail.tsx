import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Edit, Save, X, User } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

const UserDetail = () => {
  const { t } = useTranslation();
  const { userId } = useParams();
  const { toast } = useToast();
  const [editingField, setEditingField] = useState<string | null>(null);

  // Dummy user data - in real app, fetch based on userId
  const [userData, setUserData] = useState({
    id: userId,
    firstName: "John",
    lastName: "Doe",
    username: "john_doe",
    email: "john@example.com",
    balance: 15420.50,
    status: "Active",
    joinDate: "2024-01-15",
    lastLogin: "2024-01-20",
    totalDeposits: 25000,
    totalWithdrawals: 9579.50,
    phoneNumber: "+1234567890",
    address: "123 Main St, New York, NY",
  });

  const [tempValue, setTempValue] = useState("");

  const handleEdit = (field: string, currentValue: string | number) => {
    setEditingField(field);
    setTempValue(currentValue.toString());
  };

  const handleSave = (field: string) => {
    setUserData({ ...userData, [field]: tempValue });
    setEditingField(null);
    toast({
      title: t('admin.userDetail.updatedSuccessfully'),
      description: t('admin.userDetail.fieldUpdated', { field }),
    });
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500";
      case "Inactive":
        return "bg-gray-500/10 text-gray-500";
      case "Suspended":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const renderEditableField = (label: string, field: string, value: string | number, type: string = "text") => (
    <div className="space-y-2">
      <Label className="text-gray-400">{label}</Label>
      {editingField === field ? (
        <div className="flex gap-2">
          <Input
            type={type}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="bg-black/50"
          />
          <Button size="sm" onClick={() => handleSave(field)}>
            <Save className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
          <span className="text-white">{value}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => handleEdit(field, value)}
          >
            <Edit className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {userData.firstName} {userData.lastName}
            </h1>
            <p className="text-gray-400">@{userData.username}</p>
          </div>
          <Badge className={getStatusColor(userData.status)}>
            {userData.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white">{t('admin.userDetail.personalInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {renderEditableField(t('admin.userDetail.firstName'), "firstName", userData.firstName)}
              {renderEditableField(t('admin.userDetail.lastName'), "lastName", userData.lastName)}
              {renderEditableField(t('admin.userDetail.username'), "username", userData.username)}
              {renderEditableField(t('admin.userDetail.email'), "email", userData.email, "email")}
              {renderEditableField(t('admin.userDetail.phoneNumber'), "phoneNumber", userData.phoneNumber, "tel")}
              {renderEditableField(t('admin.userDetail.address'), "address", userData.address)}
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white">{t('admin.userDetail.accountInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {renderEditableField(t('admin.userDetail.balance'), "balance", userData.balance, "number")}
              
              <div className="space-y-2">
                <Label className="text-gray-400">{t('admin.userDetail.accountStatus')}</Label>
                {editingField === "status" ? (
                  <div className="flex gap-2">
                    <select
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10"
                    >
                      <option value="Active">{t('admin.userDetail.active')}</option>
                      <option value="Inactive">{t('admin.userDetail.inactive')}</option>
                      <option value="Suspended">{t('admin.userDetail.suspended')}</option>
                    </select>
                    <Button size="sm" onClick={() => handleSave("status")}>
                      <Save className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <Badge className={getStatusColor(userData.status)}>
                      {userData.status}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit("status", userData.status)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-gray-400">{t('admin.userDetail.joinDate')}</Label>
                <div className="p-3 rounded-lg bg-black/20">
                  <span className="text-white">{userData.joinDate}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-400">{t('admin.userDetail.lastLogin')}</Label>
                <div className="p-3 rounded-lg bg-black/20">
                  <span className="text-white">{userData.lastLogin}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Summary */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{t('admin.userDetail.financialSummary')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">{t('admin.userDetail.currentBalance')}</p>
                <p className="text-2xl font-bold text-white">${userData.balance.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">{t('admin.userDetail.totalDeposits')}</p>
                <p className="text-2xl font-bold text-green-500">${userData.totalDeposits.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black/20">
                <p className="text-gray-400 text-sm">{t('admin.userDetail.totalWithdrawals')}</p>
                <p className="text-2xl font-bold text-orange-500">${userData.totalWithdrawals.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UserDetail;