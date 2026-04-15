import About from '../components/About'
import Certificate from '../components/Certificate'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;