import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaX } from 'react-icons/fa6';

export default function Contact() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/edyeluandrew', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/edyeluandrew', label: 'LinkedIn' },
    { icon: FaX, url: 'https://x.com/edyeluandrew1', label: 'X' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="section-spacing section-padding relative overflow-hidden"
    >
      {/* Background accent elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/5 via-transparent to-accent-purple/5 -z-10"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
          >
            Let's build something
            <br />
            <span className="text-accent-lime">that matters.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed font-body"
          >
            Open to opportunities, collaborations, and meaningful projects. Whether you have an idea to build, a problem to solve, or just want to connect, let's talk.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="button-secondary flex items-center justify-center gap-3 group"
              >
                <Icon className="text-lg group-hover:text-accent-lime transition-colors duration-300" />
                {label}
              </motion.a>
            ))}
          </motion.div>

          {/* Email & Phone CTA */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-border-light">
            <p className="text-text-muted text-sm mb-6 font-body">
              Or reach out directly:
            </p>
            <div className="flex flex-col gap-4">
              <motion.a
                href="mailto:edyeluandrew1@gmail.com"
                className="text-3xl md:text-4xl font-heading font-bold text-text-primary hover:text-accent-lime transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                edyeluandrew1@gmail.com
              </motion.a>
              <motion.a
                href="tel:+256764331334"
                className="text-2xl md:text-3xl font-heading font-bold text-text-secondary hover:text-accent-lime transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                +256 764 331 334
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
