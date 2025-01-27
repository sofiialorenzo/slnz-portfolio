import { motion } from "framer-motion";
import Skills from "./Skills";
import Study from "./Study";

function About() {
    return (
      <motion.section className="flex justify-center items-center flex-col" initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}>
        <div className="max-w-5xl px-8 md:px-16 mx-auto">
          <div className="flex items-center w-full mb-6">
          <h2 className="font-bold text-3xl tracking-wide" style={{ color: "var(--headingTwo-color)"}}>Sobre mí</h2>
          <hr className="flex-grow border-2 mx-4" style={{ borderColor: "var(--border-color)"}}/>
          </div>
          <p className="text-md md:text-lg leading-relaxed" style={{ color: "var(--text-color)"}}>
          Me especializo en Desarrollo Front End y Diseño UX/UI, con un fuerte interés en crear interfaces intuitivas y funcionales. Combino mi creatividad con habilidades técnicas para desarrollar productos digitales que aporten valor.
          Busco oportunidades que me permitan crecer profesionalmente y aplicar mis conocimientos para generar soluciones digitales de calidad.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-stretch max-w-5xl w-full mt-12 gap-8">
          <div className="flex-1">
        <Skills />
          </div>
          <div className="flex-1">
        <Study />
          </div>
        </div>
      </motion.section>
    );
  }
  
  export default About;
  