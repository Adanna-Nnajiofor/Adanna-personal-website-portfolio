"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorkSection from "../components/WorkSection";
import ResumeSection from "../components/ResumeSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveSection(id);
              router.replace(`#${id}`, undefined);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [router]);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <main className="snap-y snap-mandatory h-full overflow-y-scroll scroll-smooth">
        <section id="home" className="snap-start">
          <HomeSection />
        </section>
        <section id="about" className="snap-start">
          <AboutSection />
        </section>
        <section id="services" className="snap-start">
          <ServicesSection />
        </section>
        <section id="work" className="snap-start">
          <WorkSection />
        </section>
        <section id="resume" className="snap-start">
          <ResumeSection />
        </section>
        <section id="blog" className="snap-start">
          <BlogSection />
        </section>
        <section id="contact" className="snap-start">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
