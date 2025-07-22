import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);

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
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                  <Input 
                    placeholder={t('contact.form.name')} 
                    className="bg-black/50 border-white/20 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Enter your last name" 
                    className="bg-black/50 border-white/20 focus:border-blue-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                <Input 
                  type="email" 
                  placeholder={t('contact.form.email')} 
                  className="bg-black/50 border-white/20 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.subject')}</label>
                <Input 
                  placeholder={t('contact.form.subject')} 
                  className="bg-black/50 border-white/20 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                <Textarea 
                  placeholder={t('contact.form.message')} 
                  rows={5}
                  className="bg-black/50 border-white/20 focus:border-blue-400"
                />
              </div>
              <Button className="w-full button-gradient" size="lg">
                {t('contact.form.send')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Address</h3>
                    <p className="text-gray-300">support@tradephere.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Location</h3>
                    <p className="text-gray-300">5600 - 100 King St W, Toronto, ON, Canada</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone Number</h3>
                    <p className="text-gray-300">(236) 596-1054</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Need Quick Help?</h3>
              <p className="text-gray-300 mb-6">
                For immediate assistance, use our live chat feature or send us an email. Our support team is ready to help!
              </p>
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="w-full button-gradient"
              >
                Open Live Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Chat Box */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isChatOpen ? 'w-80 h-96' : 'w-16 h-16'}`}>
        {!isChatOpen ? (
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 rounded-full button-gradient shadow-lg hover:shadow-xl"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-2xl h-full flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-semibold">Live Chat Support</h3>
              <Button
                onClick={() => setIsChatOpen(false)}
                variant="ghost"
                size="icon"
                className="w-8 h-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Chat Content */}
            <div className="flex-1 p-4 space-y-4">
              <div className="bg-blue-500/20 rounded-lg p-3">
                <p className="text-sm">Hello! How can we help you today?</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 ml-8">
                <p className="text-sm">Hi, I have questions about the trading plans.</p>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <p className="text-sm">I'd be happy to help! You can also email us at support@tradephere.com for detailed information.</p>
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1 bg-black/50 border-white/20 text-sm"
                />
                <Button size="sm" className="button-gradient">
                  Send
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;