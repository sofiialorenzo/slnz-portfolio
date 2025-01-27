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
            <div className="py-12 px-8 sm:px-16 max-w-5xl mx-auto">
                <div className="flex items-center w-full pb-8">
                <h2 className="font-bold text-3xl tracking-wide" style={{ color: "var(--headingTwo-color)"}}>Experiencia</h2>
                <hr className="flex-grow border-2 mx-4" style={{ borderColor: "var(--border-color)"}}/>
                </div>
                <motion.div initial="hidden" whileInView="visible" variants={listAnimation}>
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Experience Item 1 */}
            <motion.li
              variants={itemAnimation}
              className="p-6 rounded-2xl border shadow-sm" style={{ borderColor: "var(--border-color)"}}
            >
              <article>
                <header className="flex flex-col gap-2 mb-4">
                  <h3
                    className="font-semibold text-xl"
                    style={{ color: "var(--headingTwo-color)" }}
                  >
                    Desarrollo FrontEnd y Diseño UX/UI
                  </h3>
                  <p
                    className="font-medium text-lg"
                    style={{ color: "var(--headingOne-color)" }}
                  >
                    Diseño y desarrollo web - Freelance
                  </p>
                  <time
                    className="text-sm italic"
                    style={{ color: "var(--span-color)" }}
                  >
                    2023 - Actualmente
                  </time>
                </header>
                <footer>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-color)" }}
                  >
                    Diseño de interfaces centradas en la usabilidad y
                    accesibilidad. Arquitectura de la información, prototipos,
                    wireframes y mockups. Maquetación web responsiva y
                    adaptable. Implementación de interactividad y animaciones
                    en interfaces.
                  </p>
                </footer>
              </article>
            </motion.li>

            {/* Experience Item 2 */}
            <motion.li
              variants={itemAnimation}
              className="p-6 rounded-2xl border shadow-sm" style={{ borderColor: "var(--border-color)"}}
            >
              <article>
                <header className="flex flex-col gap-2 mb-4">
                  <h3
                    className="font-semibold text-xl"
                    style={{ color: "var(--headingTwo-color)" }}
                  >
                    Atención al cliente
                  </h3>
                  <p
                    className="font-medium text-lg"
                    style={{ color: "var(--headingOne-color)" }}
                  >
                    Bazar y regalos - Puerto Madryn, Chubut
                  </p>
                  <time
                    className="text-sm italic"
                    style={{ color: "var(--span-color)" }}
                  >
                    2020 - 2022
                  </time>
                </header>
                <footer>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-color)" }}
                  >
                    Atención personalizada, enfocada en las necesidades de los
                    clientes. Gestión de inventario y organización del espacio
                    de venta. Resolución de consultas y manejo de situaciones
                    con enfoque en la satisfacción del cliente. Asesoramiento
                    sobre productos para el hogar y recomendaciones según
                    preferencias.
                  </p>
                </footer>
              </article>
            </motion.li>
          </motion.ul>
        </motion.div>
            </div>
        </motion.section>
    )
}

export default Experience;