import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaX } from 'react-icons/fa6';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/edyeluandrew', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/edyeluandrew', label: 'LinkedIn' },
    { icon: FaX, url: 'https://x.com/edyeluandrew1', label: 'X' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 40 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 section-padding relative overflow-hidden"
    >
      {/* Background accent elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 -left-20 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Main Heading - Editorial Split */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-text-primary">
                Edyelu
                <br />
                <span className="text-accent-lime">Andrew</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-xl md:text-2xl text-text-muted font-heading font-medium leading-relaxed">
                Software Developer.<br />
                Product Builder.<br />
                Systems Thinker.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed max-w-lg mb-8 font-body"
            >
              Building web products, backend systems, and digital experiences with strong engineering and visual taste.
            </motion.p>

            {/* Expertise Line */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-text-muted uppercase tracking-wide font-body mb-12 font-medium"
            >
              React • Go • Backend Systems • Fintech • Stellar
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#work" className="button-primary">
                View Work
              </a>
              <a href="#contact" className="button-secondary">
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 relative"
          >
            {/* Image Card - Editorial Style */}
            <div className="relative">
              {/* Accent frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-lime/30 via-transparent to-accent-purple/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main image container */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-xl overflow-hidden card-editorial group"
              >
                <img
                  src={heroImage}
                  alt="Edyelu Andrew"
                  className="w-full h-auto object-cover aspect-square md:aspect-auto"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop';
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.div>

              {/* Accent dot elements */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-32 h-32 border border-border-accent rounded-full opacity-20"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
                className="absolute -top-8 -left-8 w-24 h-24 border border-border-accent rounded-full opacity-20"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
