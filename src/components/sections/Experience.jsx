import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const listAnimation = {
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

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const experiences = [
  {
    title: "Desarrollo FrontEnd y Diseño UX/UI",
    subtitle: "Diseño y desarrollo web - Freelance",
    date: "2023 - Actualmente",
    description:
      "Diseño de interfaces centradas en la usabilidad y accesibilidad. Arquitectura de la información, prototipos, wireframes y mockups. Maquetación web responsiva y adaptable. Implementación de interactividad y animaciones en interfaces.",
  },
  {
    title: "Atención al cliente",
    subtitle: "Bazar y regalos",
    date: "2020 - 2022",
    description:
      "Atención personalizada, enfocada en las necesidades de los clientes. Gestión de inventario y organización del espacio de venta. Resolución de consultas y manejo de situaciones con enfoque en la satisfacción del cliente. Asesoramiento sobre productos para el hogar y recomendaciones según preferencias.",
  },
];

function Experience() {
const [shouldAnimate, setShouldAnimate] = useState(window.innerWidth >= 768);

useEffect(() => {
  const handleResize = () => {
    setShouldAnimate(window.innerWidth >= 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <section
      className="flex justify-center items-center flex-col py-16">
      <div className="py-12 px-8 sm:px-16 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center w-full mb-6 gap-4">
          <h2
            className="font-bold text-2xl md:text-3xl tracking-wide"
            style={{ color: "var(--headingTwo-color)" }}
          >
            Experiencia
          </h2>
          <hr
            className="flex-grow border-2 md:mx-4"
            style={{ borderColor: "var(--border-color)" }}
          />
        </div>

        <motion.div initial={shouldAnimate ? "hidden" : undefined} whileInView={shouldAnimate ? "visible" : undefined } variants={shouldAnimate ? listAnimation : undefined}>
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.li
                key={index}
                variants={shouldAnimate ? itemAnimation : undefined}
                className="p-6 rounded-2xl border shadow-sm"
                style={{ borderColor: "var(--border-color)" }}
              >
                <article>
                  <header className="flex flex-col gap-2 mb-4">
                    <h3
                      className="font-semibold text-xl"
                      style={{ color: "var(--headingTwo-color)" }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className="font-medium text-lg"
                      style={{ color: "var(--headingOne-color)" }}
                    >
                      {exp.subtitle}
                    </p>
                    <time
                      className="text-sm italic"
                      style={{ color: "var(--span-color)" }}
                    >
                      {exp.date}
                    </time>
                  </header>
                  <footer>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-color)" }}
                    >
                      {exp.description}
                    </p>
                  </footer>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
