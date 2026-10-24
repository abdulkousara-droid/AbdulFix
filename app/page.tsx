import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";

export default function Home() {
    return (
        <main>
            <Hero />
            <Brands />
            <Services />
            <About />
            <FAQ />
            <Booking />
        </main>
    );
}