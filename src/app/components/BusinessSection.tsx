import { CheckCircle, Target, Eye } from "lucide-react";
import { Gallery } from "./Gallery";
import { motion } from "motion/react";

interface BusinessSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  whyChooseUs: string[];
  mission: string;
  vision: string;
  galleryImages: string[];
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
  extraContent?: React.ReactNode;
}

export function BusinessSection({
  id,
  title,
  subtitle,
  description,
  services,
  whyChooseUs,
  mission,
  vision,
  galleryImages,
  gradientFrom,
  gradientTo,
  icon,
  extraContent,
}: BusinessSectionProps) {
  return (
    <section id={id} className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className={`w-20 h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full blur-xl opacity-50`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative z-10">{icon}</div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">{subtitle}</p>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Extra Content (for Menu button) */}
        {extraContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            {extraContent}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services/Products */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-950/50 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">
              Our Services / Products
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle
                      className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                  </motion.div>
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">Why Choose Us</h3>
            <ul className="space-y-3">
              {whyChooseUs.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle
                      className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                  </motion.div>
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="text-orange-600 dark:text-orange-400" size={28} />
              </motion.div>
              <h3 className="text-2xl text-slate-900 dark:text-white">Mission</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">{mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="text-blue-600 dark:text-blue-400" size={28} />
              </motion.div>
              <h3 className="text-2xl text-slate-900 dark:text-white">Vision</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">{vision}</p>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl mb-8 text-center text-slate-900 dark:text-white">
            Gallery
          </h3>
          <Gallery images={galleryImages} />
        </motion.div>
      </div>
    </section>
  );
}
