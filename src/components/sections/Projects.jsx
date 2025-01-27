import { motion } from "framer-motion";
import projects from '../../projects';

const listAnimations = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
};

const itemAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

function Projects() {
    return (
        <motion.section
            className="flex justify-center items-center flex-col pb-20"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="py-8 px-8 sm:px-16 max-w-5xl mx-auto">
                <h2
                    className="text-3xl font-bold pb-6 tracking-tight"
                    style={{ color: "var(--headingTwo-color)" }}
                >
                    Proyectos
                </h2>
                <motion.div initial="hidden" whileInView="visible" variants={listAnimations}>
                    <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.li
                                className="flex flex-col justify-between border rounded-lg shadow-xs hover:shadow-md transition-all p-6" style={{ borderColor: "var(--border-color)" }}
                                key={project.id}
                                variants={itemAnimations}
                                whileHover={{
                                    scale: 1,
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                            >
                                <div className="mb-4">
                                    <h3
                                        className="font-bold text-lg hover:underline"
                                        style={{ color: "var(--headingOne-color)" }}
                                    >
                                        <a
                                            href={project.url}
                                            title={`Ver el proyecto ${project.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm mt-2" style={{ color: "var(--text-color)" }}>
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.highlights.map((highlight, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-xs py-1 px-2 rounded-full"
                                            style={{ color: "var(--span-color)" }}
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Projects;
