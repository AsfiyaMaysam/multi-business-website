import { useState } from "react";
import { X, Star, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDialog({ isOpen, onClose }: MenuDialogProps) {
  const menuItems = [
    {
      name: "Mutton Mandi",
      description: "Aromatic rice with tender mutton, traditional spices",
      popular: true,
    },
    {
      name: "Shawarma",
      description: "Marinated meat wrapped in soft flatbread",
      popular: false,
    },
    {
      name: "Mutton Ghee Roast",
      description: "Spicy mutton cooked in aromatic ghee",
      popular: false,
    },
    {
      name: "Chicken Tikka",
      description: "Grilled chicken marinated in special spices",
      popular: false,
    },
    {
      name: "Dum Biryani",
      description: "Slow-cooked fragrant rice with succulent meat",
      popular: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-red-600 to-orange-500 opacity-0"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl mb-2 relative z-10">Our Specialties</h2>
                <p className="text-orange-100 relative z-10">Taste the authentic flavors</p>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg text-slate-900 dark:text-white">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <span className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs px-2 py-1 rounded-full">
                              <Star size={12} fill="currentColor" />
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-300">
                  <MapPin size={20} className="text-orange-600" />
                  <span>Station Road, Hosapete</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-4 text-center cursor-pointer"
                >
                  <p className="text-lg mb-1">Visit us to explore our full menu</p>
                  <p className="text-sm text-orange-100">Call: 9611306777</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
