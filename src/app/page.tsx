import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import BuildWithAI from "@/components/BuildWithAI";
import Writing from "@/components/Writing";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <SelectedWork />
        <BuildWithAI />
        <Writing />
        <Research />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
