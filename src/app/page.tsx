import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUs";
import GetSupport from "./components/GetSupport";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutUs />
      <GetSupport />
      <Services />
      <HowWeWork />
      <Testimonials />
    </main>
  );
}
