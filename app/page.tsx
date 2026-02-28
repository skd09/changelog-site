import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed atmospheric grid */}
      <div className="grid-bg" aria-hidden="true" />

      <Nav />

      <main id="main-content">
        <Hero />
        <Features />
        <About />
      </main>

      <Footer />
    </>
  );
}
