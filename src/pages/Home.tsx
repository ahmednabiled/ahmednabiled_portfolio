import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';


export const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};