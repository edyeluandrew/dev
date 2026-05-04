import { motion } from 'framer-motion';

export default function About() {
  const sections = [
    {
      title: 'Who I Am',
      description: 'A software developer and product builder from Uganda, passionate about solving real-world problems with elegant technology.',
    },
    {
      title: 'What I Build',
      description: 'Full-stack web products, scalable backend systems, fintech solutions, and digital experiences that blend strong engineering with thoughtful design.',
    },
    {
      title: 'My Focus',
      description: 'Building products that matter. I specialize in web technologies, backend architecture, and systems that power modern digital products.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="section-spacing section-padding relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/3 to-transparent -z-10"></div>

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4">
            About <span className="text-accent-lime">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-lime to-accent-purple rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="card-dark p-8 md:p-10"
            >
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                {section.title}
              </h3>
              <p className="text-text-secondary leading-relaxed font-body">
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-lg text-text-secondary leading-relaxed font-body">
            I approach each project with a focus on craftsmanship, scalability, and user experience. Whether designing frontend interactions or architecting backend systems, I believe great software starts with clear thinking and intentional design decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
