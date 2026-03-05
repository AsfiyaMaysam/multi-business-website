import { Phone, Mail, MapPin, User } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  const contactCards = [
    {
      icon: User,
      label: "Owner",
      value: "Mohammad Arif",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9611306777",
      link: "tel:9611306777",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hosapete, Karnataka",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@example.com",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-slate-300">
            We'd love to hear from you. Reach out for any inquiries.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center shadow-lg relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-full blur-lg opacity-50`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <card.icon className="text-white relative z-10" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm mb-1">{card.label}</p>
                    {card.link ? (
                      <a
                        href={card.link}
                        className="text-white text-xl hover:text-blue-300 transition-colors"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-white text-xl">{card.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl text-white mb-4 text-center">
                Available for All Businesses
              </h3>
              <p className="text-blue-100 mb-6 text-center">
                Whether you need industrial fuel, a family dinner, or property
                consultation, we're here to serve you.
              </p>
              <motion.a
                href="tel:9611306777"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-center bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all"
              >
                <span className="text-lg">Call Now: 9611306777</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
