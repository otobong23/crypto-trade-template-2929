import { motion } from "framer-motion";
import { Shield, Zap, Server, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <div className="container px-4 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            About Trade Phere
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering individuals to grow their income through innovative cryptocurrency trading solutions
          </p>
        </motion.section>

        {/* Who We Are */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Who We Are</h2>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Welcome to Trade Phere!</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a focus on transparency, security, and innovation, we empower individuals to grow their income quickly and efficiently, backed by cutting-edge technology and expert support.
              </p>
            </div>
          </div>
        </motion.section>

        {/* About Trade Phere */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Trade Phere</h2>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Who we are and What we do!</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Welcome to the website of Trade Phere! Our investment platform is a product of careful preparation and fruitful work of experts in the field of Trading, highly profitable trade in cryptocurrencies and online marketing. Using modern methods of doing business and a personal approach to each client, we offer a unique investment model to people who want to use Bitcoin not only as a method of payment, but also as a reliable source of stable income.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trade Phere business uses only modern mining equipment and trades at the most stable markets, which minimizes the risk of financial loss to customers and guarantees them a stable income accrued every calendar day.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">We Lead with Reliability</h2>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Why Choose Us?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                If you find yourself here, you are definitely in search of reliable and profitable investment. Yes, you are just at the right place! Our company offers trust assets management of the highest quality on the basis of foreign exchange and profitable trade through Bitcoin exchanges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                There is no other worldwide financial market that can guarantee a daily ability to generate constant profit with the large price swings of Bitcoin. Proposed modalities for strengthening cooperation will be accepted by anyone who uses cryptocurrency and knows about its fantastic prospects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your deposit is working on an ongoing basis, and makes profit every day with the ability to withdraw profit instantly. Join our company today and start making high profits!
              </p>
            </div>
          </div>
        </motion.section>

        {/* Legal */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Legal</h2>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">We are verified, Reliable and Trusted!</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                As a UK-registered company, we operate with full transparency, adhering to strict regulations governing all crypto and financial trades in order to ensure trust and reliability.
              </p>
              <Button 
                asChild
                size="lg" 
                className="button-gradient"
              >
                <a href="/lovable-uploads/4e593699-b74e-41e1-a5cd-65e0314b31f9.png" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making Your Income Bigger</h2>
            <h3 className="text-2xl font-semibold text-blue-400">Trade Phere Best Features</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">1. Guaranteed Security</h4>
              <p className="text-gray-300">
                Our GeoTrust EV SSL Certificate guarantees the security of your transactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">2. Instant Payments</h4>
              <p className="text-gray-300">
                Get your payment instantly as soon as you request it!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">3. Robust Server Protection</h4>
              <p className="text-gray-300">
                TradePhere website uses a very powerful dedicated server with the highest level of protection.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default About;