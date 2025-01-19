import { motion } from "framer-motion";
import Skills from "./Skills";
import Study from "./Study";

function About() {
    return (
      <motion.section className="flex justify-center items-center flex-col" initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}>
        <div className="pb-8 px-16 max-w-4xl mx-auto">
          <div className="flex items-center w-full">
          <h2 className="font-bold text-2xl">Sobre mí</h2>
          <hr className="flex-grow border-2 border-violet-800 mx-4"/>
          </div>
          <p className="text-gray-800 mt-4">
          Me especializo en Desarrollo Front End y Diseño UX/UI, con un fuerte interés en crear interfaces intuitivas y funcionales. Combino mi creatividad con habilidades técnicas para desarrollar productos digitales que aporten valor.
          Busco oportunidades que me permitan crecer profesionalmente y aplicar mis conocimientos para generar soluciones digitales de calidad.
          </p>
        </div>
        <div className="flex max-w-4xl w-full justify-between items-start">
        <Skills />
        <Study />
        </div>
      </motion.section>
    );
  }
  
  export default About;
  