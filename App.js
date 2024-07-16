import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>

  );
  
}

export default App;