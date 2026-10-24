import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";

const PHONE_DISPLAY = "+34 671 891 305";
const PHONE_LINK = "34671891305";

// EDIT: paste your profile links. Empty ones are hidden automatically.
const socials = [
    { name: "TikTok", icon: SiTiktok, href: "" },
    { name: "Instagram", icon: SiInstagram, href: "" },
    { name: "Facebook", icon: SiFacebook, href: "" },
].filter((s) => s.href);

const links = [
    { label: "Repairs", href: "/#repairs" },
    { label: "About us", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Book a repair", href: "/#book" },
];

export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-6xl px-6 pb-10">
            <div className="rounded-[44px] border border-white/80 bg-white/70 p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:p-12">
                <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/logo.svg" alt="" width={64} height={28} />
                            <span className="text-2xl font-bold tracking-tight text-primary">
                Abdel<span className="font-normal text-tertiary">Fix</span>
              </span>
                        </Link>
                        <p className="max-w-xs text-[15px] leading-relaxed text-secondary">
                            Phone and tablet repair, hardware and software. We pick up, we fix
                            and we deliver.
                        </p>

                        {socials.length > 0 && (
                            <div className="flex gap-2">
                                {socials.map(({ name, icon: Icon, href }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral text-primary transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                            Explore
                        </p>
                        <ul className="mt-4 flex flex-col gap-1 text-[15px] font-medium">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="inline-block rounded-full px-0 py-1.5 text-secondary transition-colors hover:text-primary"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                            Contact
                        </p>
                        <ul className="mt-4 flex flex-col gap-3 text-[15px] text-secondary">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="shrink-0 text-primary" />
                                Barcelona and Badalona
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-primary" />
                                <a href={`tel:+${PHONE_LINK}`} className="hover:text-primary">
                                    {PHONE_DISPLAY}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="shrink-0 text-primary" />
                                {/* EDIT: your real opening hours */}
                                Mon to Sat, 10:00 to 20:00
                            </li>
                        </ul>

                        <a
                            href={`https://wa.me/${PHONE_LINK}?text=${encodeURIComponent("Hi AbdelFix, I need a repair.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#1FBE5A]"
                        >
                            <SiWhatsapp size={18} aria-hidden />
                            WhatsApp us
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-tertiary sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 AbdelFix. All rights reserved.</p>
                    <p>
                        All brand names and logos belong to their owners. AbdelFix is an
                        independent repair service.
                    </p>
                </div>
            </div>
        </footer>
    );
}