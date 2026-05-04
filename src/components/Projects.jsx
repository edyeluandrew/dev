import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Assign grid sizes to projects for bento layout
  const projectsWithLayout = projects.map((proj, idx) => ({
    ...proj,
    gridSize: idx === 0 ? 'lg:col-span-2' : idx === 1 ? 'lg:row-span-2' : '',
  }));

  return (
    <section
      id="work"
      className="section-spacing section-padding relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/3 via-transparent to-transparent -z-10"></div>

      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4">
            Featured <span className="text-accent-lime">Work</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl font-body">
            A selection of recent projects showcasing my approach to web design, full-stack development, and product thinking.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[320px]"
        >
          {projectsWithLayout.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group card-editorial overflow-hidden relative flex flex-col justify-between ${project.gridSize}`}
            >
              {/* Background image or gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
                      {project.name}
                    </h3>
                    <span className="badge text-xs">{project.status}</span>
                  </div>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed font-body line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.disabled ? (
                  <button className="button-disabled w-full text-sm">
                    {project.buttonText}
                  </button>
                ) : project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary w-full text-center block text-sm"
                  >
                    {project.buttonText}
                  </a>
                ) : (
                  <button className="button-secondary w-full text-sm">
                    {project.buttonText}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
