"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Repairs", href: "#repairs" },
    { label: "About us", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
            <nav className="relative flex items-center justify-between rounded-full border border-white/80 bg-white/70 px-4 py-2.5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:px-5">
                <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
                    <Image src="/logo.svg" alt="" width={80} height={28} />
                    <span className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                        Abdel<span className="font-normal text-tertiary">Fix</span>
                    </span>
                </Link>

                {/* Desktop links + CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <div className="flex items-center gap-1">
                        {links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="rounded-full px-4 py-2 text-sm font-medium text-secondary transition-all duration-200 hover:bg-tertiary hover:text-white"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#book"
                        className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                    >
                        Book a repair
                    </a>
                </div>

                {/* Mobile: hamburger */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-primary transition-colors hover:bg-white"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="absolute right-0 left-0 top-full z-50 mt-2 overflow-hidden rounded-[28px] border border-white/80 bg-white/90 p-3 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:hidden">
                    <div className="flex flex-col gap-1">
                        {links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block rounded-full px-6 py-3 text-center text-sm font-medium text-secondary transition-all duration-200 hover:bg-tertiary hover:text-white"
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="#book"
                            onClick={() => setOpen(false)}
                            className="mt-2 block rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                        >
                            Book a repair
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
