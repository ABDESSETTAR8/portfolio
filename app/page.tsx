import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectLibrary from "@/components/ProjectLibrary";
import FounderBio from "@/components/FounderBio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Credentials />
      <FeaturedProjects />
      <ProjectLibrary />
      <FounderBio />
      <Footer />
    </main>
  );
}
