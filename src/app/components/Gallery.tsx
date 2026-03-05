import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          className="relative overflow-hidden rounded-xl aspect-[4/3] group"
        >
          <ImageWithFallback
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
