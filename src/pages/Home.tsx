import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';
import Techstacks from '../components/Techstacks';
import Industires from '../components/Industires';
import Trusted from '../components/Trusted';

const Home = (): JSX.Element => {
  return (
    <section id='home'>
      <Hero />
      {/* <Products /> */}
      <Services />
      <Pricing />
      <Techstacks />
      <Industires />
      <Trusted />
      {/* <About /> */}
      <Contact />
    </section>
  );
};

export default Home;
