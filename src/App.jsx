
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HairstyleGallery from "./components/HairstyleGallery";
import AboutStylist from "./components/AboutStylist";
import BookingSteps from "./components/BookingSteps";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HairstyleGallery />
        <AboutStylist />
        <BookingSteps />
      </main>

      <Footer />
    </>
  );
}
