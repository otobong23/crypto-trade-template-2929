import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Plans = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      id: 1,
      name: "Starter Plan",
      price: 500,
      duration: "30 days",
      profit: "5-8%",
      features: [
        "Basic trading tools",
        "Email support",
        "Monthly market reports",
        "Risk management guide"
      ],
      popular: false,
      description: "Perfect for beginners starting their trading journey"
    },
    {
      id: 2,
      name: "Basic Plan",
      price: 1000,
      duration: "30 days",
      profit: "8-12%",
      features: [
        "Advanced trading tools",
        "Priority support",
        "Weekly market analysis",
        "Portfolio optimization",
        "Mobile trading app"
      ],
      popular: false,
      description: "Ideal for traders with some experience"
    },
    {
      id: 3,
      name: "Professional Plan",
      price: 5000,
      duration: "30 days",
      profit: "12-18%",
      features: [
        "Professional trading suite",
        "24/7 dedicated support",
        "Daily market insights",
        "Advanced analytics",
        "Personal trading advisor",
        "API access"
      ],
      popular: true,
      description: "For serious traders seeking maximum performance"
    },
    {
      id: 4,
      name: "Elite Plan",
      price: 10000,
      duration: "30 days",
      profit: "18-25%",
      features: [
        "Elite trading platform",
        "VIP support line",
        "Real-time market data",
        "Custom trading strategies",
        "Dedicated account manager",
        "Exclusive market research",
        "Advanced risk management"
      ],
      popular: false,
      description: "Premium features for elite traders"
    },
    {
      id: 5,
      name: "Institutional Plan",
      price: 200000,
      duration: "30 days",
      profit: "25-35%",
      features: [
        "Institutional-grade platform",
        "White-glove service",
        "Custom integration",
        "Institutional pricing",
        "Dedicated trading desk",
        "Regulatory compliance",
        "Multi-asset trading",
        "Unlimited API calls"
      ],
      popular: false,
      description: "Enterprise-level solutions for institutional clients"
    }
  ];

  const currentPlan = plans[1]; // Simulate user having Basic Plan

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
         <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{t('dashboard.plans.title')}</h1>
            <p className="text-gray-400">{t('dashboard.plans.subtitle')}</p>
          </div>
          <div className="flex gap-3">
             <Button asChild variant="outline">
              <Link to="/dashboard/deposit">
                <ArrowRight className="w-4 h-4 mr-2" />
                {t('dashboard.home.deposit')}
              </Link>
            </Button>
             <Button asChild variant="outline">
              <Link to="/dashboard/withdrawal">
                <ArrowRight className="w-4 h-4 mr-2" />
                {t('dashboard.home.withdraw')}
              </Link>
            </Button>
          </div>
        </div>

        {/* Current Plan */}
        <Card className="glass border-white/10 border-primary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Your Current Plan
              </CardTitle>
              <Badge className="bg-primary/20 text-primary">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                 <h3 className="text-xl font-bold text-white">{currentPlan.name}</h3>
                <p className="text-gray-400">{currentPlan.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {t('dashboard.plans.totalReturn')}: <span className="text-green-500 font-medium">{currentPlan.profit}</span> • 
                  {t('dashboard.plans.duration')}: <span className="text-primary font-medium">{currentPlan.duration}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">${currentPlan.price.toLocaleString()}</p>
                <p className="text-sm text-gray-400">Investment Amount</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
         <div>
          <h2 className="text-2xl font-bold text-white mb-6">{t('dashboard.plans.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`glass border-white/10 h-full ${plan.popular ? 'border-primary/50 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-white">
                      ${plan.price.toLocaleString()}
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                     <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{t('dashboard.plans.totalReturn')}:</span>
                        <span className="text-green-500 font-medium">{plan.profit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{t('dashboard.plans.duration')}:</span>
                        <span className="text-primary font-medium">{plan.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                     <Button 
                      className={`w-full ${plan.popular ? 'button-gradient' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      disabled={currentPlan.id === plan.id}
                    >
                      {currentPlan.id === plan.id ? 'Current Plan' : t('dashboard.plans.selectPlan')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Plans;