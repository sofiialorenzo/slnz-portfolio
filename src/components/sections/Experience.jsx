import { motion } from "framer-motion";
const listAnimation = {
    hidden:{ opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20},
    visible: { opacity: 1, y: 0, transition: { duration: 1}},
};

function Experience () {
    return (
        <motion.section className="flex justify-center items-center flex-col py-16" initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}>
            <div className="py-8 px-16 max-w-4xl mx-auto">
                <div className="flex items-center w-full pb-8">
                <h2 className="font-bold text-3xl tracking-wide">Experiencia</h2>
                <hr className="flex-grow border-2 border-violet-800 mx-4"/>
                </div>
                <motion.div initial="hidden" whileInView="visible" variants={listAnimation}>
                    <motion.ul className="flex flex-col gap-8">
                        <motion.li variants={itemAnimation}>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                <h3 className="font-bold text-xl text-gray-900">Desarrollo FrontEnd y Diseño UX/UI</h3>
                                <p className="font-medium text-lg text-gray-600">Diseño y desarrollo web - Freelance</p>
                                </div>
                                <time className="text-gray-600 text-sm">2023 - Actualmente</time>
                                </header>
                                <footer>
                                    <p>Diseño de interfaces centradas en la usabilidad y accesibilidad. Arquitectura de la información, prototipos, wireframes y mockups.Maquetación web responsiva y adaptable. Implementación de interactividad y animacionesen interfaces. </p>
                                </footer>
                            </article>
                        </motion.li>
                        <motion.li variants={itemAnimation}>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">Atención al cliente</h3>
                                    <p className="font-medium text-lg text-gray-600">Bazar y regalos - Puerto Madryn, Chubut</p>
                                </div>
                                <time className="text-gray-600 text-sm">2021 - 2022</time>
                                </header>
                            </article>
                            <footer>
                                <p>Atención personalizada, enfocada en las necesidades de los clientes. Gestión de inventario y organización del espacio de venta. Resolución de consultas y manejo de situaciones con enfoque en la satisfacción del cliente. Asesoramiento sobre productos para el hogar y recomendaciones según preferencias.</p>
                            </footer>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Experience;