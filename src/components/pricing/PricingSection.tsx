import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
import { useNavigate } from "react-router-dom";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => {
  const navigate = useNavigate()
  return (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button onClick={() => navigate('/dashboard', { replace: false })} className="button-gradient w-full">
        Start Trading
      </Button>
    </div>
  </CardSpotlight>
)}

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Trading Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Select the perfect trading plan with advanced features and competitive fees
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        <PricingTier
          name="Starter Plan"
          price="$500"
          description="Begin your trading journey with our starter package"
          features={[
            "Basic trading tools",
            "Market analysis",
            "Email support",
            "Mobile app access"
          ]}
        />
        <PricingTier
          name="Growth Plan"
          price="$1,000"
          description="Enhanced features for growing traders"
          features={[
            "Advanced charting",
            "Risk management tools",
            "Priority support",
            "API access",
            "Trading signals"
          ]}
        />
        <PricingTier
          name="Pro Plan"
          price="$5,000"
          description="Professional trading with premium features"
          features={[
            "Professional tools",
            "Advanced analytics",
            "Dedicated support",
            "Custom indicators",
            "Portfolio management",
            "Live market data"
          ]}
          isPopular
        />
        <PricingTier
          name="Elite Plan"
          price="$10,000"
          description="Elite trading experience with exclusive tools"
          features={[
            "Elite trading suite",
            "Personal advisor",
            "VIP support",
            "Custom strategies",
            "Advanced automation",
            "Institutional tools"
          ]}
        />
        <PricingTier
          name="Premier Plan"
          price="$200,000"
          description="Ultimate trading package for high-volume traders"
          features={[
            "Unlimited trading volume",
            "White-glove service",
            "24/7 dedicated support",
            "Custom infrastructure",
            "Institutional pricing",
            "Direct market access"
          ]}
        />
      </div>
    </section>
  );
};