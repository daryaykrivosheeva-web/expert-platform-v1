import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Results from "./components/Results";
import Cases from "./components/Cases";
import GovService from "./components/GovService";
import AI from "./components/AI";
import Digitalization from "./components/Digitalization";
import Entrepreneurs from "./components/Entrepreneurs";
import Book from "./components/Book";
import SocialValue from "./components/SocialValue";
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
        <About />
        <Timeline />
        <Results />
        <Cases />
        <GovService />
        <AI />
        <Digitalization />
        <Entrepreneurs />
        <Book />
        <SocialValue />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
