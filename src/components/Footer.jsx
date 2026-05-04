import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaX } from 'react-icons/fa6';

export default function Footer() {
  const socials = [
    { icon: FaGithub, url: 'https://github.com/edyeluandrew', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/edyeluandrew', label: 'LinkedIn' },
    { icon: FaX, url: 'https://x.com/edyeluandrew1', label: 'X' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding py-12 border-t border-border-light">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
              EA
            </h3>
            <p className="text-text-secondary font-body text-sm">
              Software Developer & Product Builder
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 className="text-sm font-heading font-bold text-accent-lime uppercase tracking-wide mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-lime transition-colors duration-300 text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 className="text-sm font-heading font-bold text-accent-lime uppercase tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="icon-button"
                  title={label}
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-light my-8"></div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-text-muted text-sm text-center font-body"
        >
          © {currentYear} Edyelu Andrew. Built with React, Tailwind CSS, and Framer Motion.
        </motion.p>
      </div>
    </footer>
  );
}
