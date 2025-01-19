import { motion } from "framer-motion";
import projects from '../../projects'

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
    hidden: { opacity: 0, y: 20},
    visible: {
        opacity: 1, 
        transition: {
            duration: 1
        },
    },
};

function Projects () {
    return (
        <motion.section className="flex justify-center items-center" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration : 0.8 }}>
            <div className="py-8 px-16 max-w-4xl mx-auto">
                <h2 className="font-bold text-2xl pb-4">Proyectos</h2>
                <motion.div initial="hidden" whileInView="visible" variants={listAnimations}>
                    <motion.ul className='grid grid-cols-3 gap-4'>
                    {projects.map((project) => (
                        <motion.li className='flex border border-gray-200 p-4 mb-4 rounded-lg shadow-sm hover:shadow-md transition-all' key={project.id} variants={itemAnimations} whileHover={{
                            scale: 1,
                            transition: { duration: 0.3, ease: "easeOut"},
                        }}>
                        <div>
                            <div className='flex flex-col gap-2'>
                            <h3 className='font-bold text-xl'><a href={project.url} title={`Ver el proyecto ${project.name}`} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {project.highlights.map((highlight, index) => (
                                <span key={index} className='text-xs text-gray-600'>{highlight}</span>
                            ))}
                        </div>
                        </div>
                        </motion.li>
                    ))}
                    </motion.ul>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Projects;