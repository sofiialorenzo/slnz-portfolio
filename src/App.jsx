import { ThemeProvider } from './context/ThemeContext'; 
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';


function App() {
  return (
    <ThemeProvider>
      <div style={{ backgroundColor: "var(--bg-color)"}}>
      <Nav />
      <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      </main>
      <Footer />
      </div>
      </ThemeProvider>
  );
}

export default App;
