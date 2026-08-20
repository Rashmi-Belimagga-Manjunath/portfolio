import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import HowIThink from "@/components/HowIThink";
import BuildWithAI from "@/components/BuildWithAI";
import Research from "@/components/Research";
import Writing from "@/components/Writing";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="section-divider" />
        <SelectedWork />
        <div className="section-divider" />
        <HowIThink />
        <div className="section-divider" />
        <BuildWithAI />
        <div className="section-divider" />
        <Research />
        <div className="section-divider" />
        <Writing />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Personal />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
