import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
