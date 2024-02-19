import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutUs />
    </main>
  );
}
