import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { TechStack } from "@/components/sections/TechStack";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Journey />
        <FeaturedProject />
        <OtherProjects />
        <TechStack />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
