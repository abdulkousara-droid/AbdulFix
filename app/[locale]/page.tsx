import { setRequestLocale } from "next-intl/server";
import Hero from "@/app/components/Hero";
import Brands from "@/app/components/Brands";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import FAQ from "@/app/components/FAQ";
import Booking from "@/app/components/Booking";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

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