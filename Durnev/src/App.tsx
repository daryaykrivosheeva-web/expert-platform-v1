import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import About from "./components/About";
import Sport from "./components/Sport";
import HowToGet from "./components/HowToGet";
import Achievements from "./components/Achievements";
import FAQ from "./components/FAQ";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[2px] focus:bg-ink focus:px-4 focus:py-2 focus:text-on-dark"
      >
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Offer />
        <About />
        <Sport />
        <HowToGet />
        <Achievements />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
