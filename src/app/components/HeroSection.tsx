import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("sas-enterprises");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 pt-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mohammad Arif
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 mb-8"
          >
            Building Excellence Across Industries
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            From industrial fuel solutions to culinary delights and trusted real
            estate services — serving Hosapete with quality and integrity.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "⚡",
                title: "SAS Enterprises",
                desc: "Coal & Coke Trading",
                gradient: "from-slate-700 to-slate-900",
                delay: 0.7,
              },
              {
                icon: "🍽️",
                title: "Laziz Restaurant",
                desc: "Family Dining Experience",
                gradient: "from-orange-500 to-red-600",
                delay: 0.8,
              },
              {
                icon: "🏠",
                title: "Real Estate Services",
                desc: "Your Trusted Property Partner",
                gradient: "from-blue-600 to-blue-800",
                delay: 0.9,
              },
            ].map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: business.delay }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200/50 dark:border-slate-700/50 group"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${business.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{business.icon}</span>
                </motion.div>
                <h3 className="text-xl mb-2 text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {business.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{business.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            whileHover={{ y: 5 }}
          >
            <span>Explore Our Businesses</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
