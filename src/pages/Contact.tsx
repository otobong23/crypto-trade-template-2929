import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.drift.hide();
  }, [])

  const openChat = () => {
    window.drift?.api?.openChat();
  };

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
            <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.form.title')}</h2>
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
                  <label className="block text-sm font-medium mb-2">{t('contact.form.lastName')}</label>
                  <Input
                    placeholder={t('contact.form.lastName')}
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
              <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('contact.info.email')}</h3>
                    <p className="text-gray-300">support@tradephere.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('contact.info.location')}</h3>
                    <p className="text-gray-300">5600 - 100 King St W, Toronto, ON, Canada</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('contact.info.phone')}</h3>
                    <p className="text-gray-300">(236) 596-1054</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('contact.hours.title')}</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.saturday')}</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.sunday')}</span>
                  <span>{t('contact.hours.closed')}</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('contact.chat.title')}</h3>
              <p className="text-gray-300 mb-6">
                {t('contact.chat.description')}
              </p>
              <Button
                onClick={() => openChat()}
                className="w-full button-gradient"
              >
                {t('contact.chat.openChat')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      

      <Footer />
    </div>
  );
};

export default Contact;