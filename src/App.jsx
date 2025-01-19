import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <body className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      </main>
    </body>
  );
}

export default App;
