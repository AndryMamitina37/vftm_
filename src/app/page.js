// components
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// sections
import Hero from "./home/hero";
import Contenu3 from "./home/contenu3";
import Contenu2 from "./home/content";
export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contenu2 />
      <Contenu3 />
      <Footer />
    </>
  );
}
