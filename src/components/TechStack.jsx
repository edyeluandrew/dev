import { motion } from 'framer-motion';

export default function TechStack() {
  const categories = [
    {
      name: 'Frontend',
      items: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
      name: 'Backend',
      items: ['Go', 'Node.js', 'Django', 'PostgreSQL'],
    },
    {
      name: 'Product & Tools',
      items: ['Stellar', 'GitHub', 'Vercel'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="tech"
      className="section-spacing section-padding relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/3 to-transparent -z-10"></div>

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4">
            Tech <span className="text-accent-lime">Stack</span>
          </h2>
          <p className="text-lg text-text-secondary font-body">
            The tools and technologies I work with daily to build scalable, elegant digital products.
          </p>
        </motion.div>

        {/* Grouped capabilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="card-dark"
            >
              <h3 className="text-lg font-heading font-bold text-accent-lime mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="tech-tag cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-accent-lime via-accent-purple to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
