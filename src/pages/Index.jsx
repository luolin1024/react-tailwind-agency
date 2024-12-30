import Client from "../widgets/Client.jsx";
import Contact from "../widgets/Contact.jsx";
import Footer from "../widgets/Footer.jsx";
import { Header } from "../widgets/Header.jsx";
import Hero from "../widgets/Hero.jsx";
import Solutions from "../widgets/Solutions.jsx";
import Work from "../widgets/Work.jsx";

export const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-20">
        <Hero />
        <section className="md:p-20">
            <Solutions/>
        </section>
        <section className="mt-20">
            <Work/>
        </section>
        <section className="mt-20 md:w-3/5 mx-auto">
            <Client/>
        </section>
        <section className="mt-20">
            <Contact/>
        </section>
      </main>
      <Footer/>
    </div>
  );
};
