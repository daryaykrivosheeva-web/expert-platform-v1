import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Landing />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
