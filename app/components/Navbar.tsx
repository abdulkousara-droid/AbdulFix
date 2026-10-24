import Image from "next/image";
import Link from "next/link";

const links = [
    { label: "Repairs", href: "#repairs" },
    { label: "About us", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    return (
        <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
            <nav className="flex items-center justify-between rounded-full border border-white/80 bg-white/70 px-5 py-2.5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="" width={80} height={28} />
                    <span className="text-3xl font-bold tracking-tight text-primary">
            Abdel<span className="font-normal text-tertiary">Fix</span>
          </span>
                </Link>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-1 md:flex">
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
            </nav>
        </header>
    );
}