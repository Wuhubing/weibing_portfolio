import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Intro from './components/pages/Intro'; 
import Research from './components/pages/Research';
import Skills from './components/pages/Skills';
import ScrollToTop from './components/pages/ScrollToTop';
import Contact from './components/pages/Contact';
import Map from './components/pages/Map';
import Footer from './components/pages/Footer';
import Experience from './components/pages/Experience';
import './App.css';

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <Intro />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Contact />
        <Map />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;