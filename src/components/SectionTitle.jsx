import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textPrimary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-textMuted text-lg max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
