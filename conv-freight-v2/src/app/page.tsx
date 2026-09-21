import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FlightBoard } from "../components/FlightBoard";
import { Rates } from "../components/Rates";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { QuoteBand } from "../components/QuoteBand";
import { Footer } from "../components/Footer";
import { MobileActionBar } from "../components/MobileActionBar";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FlightBoard />
      <Rates />
      <Services />
      <Process />
      <Testimonials />
      <QuoteBand />
      <Footer />
      <MobileActionBar />
    </>
  );
}
