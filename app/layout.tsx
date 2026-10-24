import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "AbdelFix",
    description: "Phone and tablet repair in Barcelona and Badalona.",
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                    {children}
                <Footer />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}