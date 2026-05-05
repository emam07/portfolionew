import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BinaryQuote from './components/BinaryQuote';
import BellRinger from './components/BellRinger';
import Contacts from './components/Contact';

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(34,211,238,0.18),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(59,130,246,0.10),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent_85%)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects/>
        <BinaryQuote/>
        <BellRinger/>
        <Contacts/>

      </div>
    </div>
  );
};

export default App;
