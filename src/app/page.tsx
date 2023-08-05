import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Intro />
      <About />
      <Contact />
    </main>
  );
}
