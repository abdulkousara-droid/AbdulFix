import Image from "next/image";
import { Code, Cpu, Tag, Users, Wrench, User } from "lucide-react";

// EDIT: put your photo in /public (for example /about.jpg) and write its path here.
// While this is null, a placeholder frame is shown.
const ABOUT_PHOTO: string | null = "/about.png";

const experts = [
    {
        icon: Cpu,
        role: "The hardware expert",
        detail: "Electrical engineer · 25+ years",
        // EDIT: confirm this matches what your dad really does
        text: "Repairs phones and tablets down to the components on the board, finding the exact fault instead of swapping parts and hoping.",
    },
    {
        icon: Code,
        role: "The software expert",
        detail: "Software engineer · since 2018",
        text: "Handles system repair, recovery, updates and diagnostics, and gets your device running right again.",
    },
];

const stats = [
    { value: "25+", label: "years of hardware repair" },
    { value: "6+", label: "years working as a team" },
    { value: "2018", label: "software engineer since" },
];

const badges = [
    { icon: Users, label: "Father-and-son team" },
    { icon: Wrench, label: "Repaired at home by experts" },
    { icon: Tag, label: "Clear price before we start" },
];

export default function About() {
    return (
        <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-24">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                    About us
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                    Two generations. One team.
                </h2>
                <p className="mt-4 text-lg text-secondary">
                    Hardware and software repair, from the circuit board to the operating
                    system.
                </p>
            </div>

            <div className="mt-12 grid gap-10 rounded-[44px] border border-white/80 bg-white/70 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:p-10 lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:p-14">
                {/* Left: photo */ }
                <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-white to-[#D9DBE1] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                    {ABOUT_PHOTO ? (
                        <Image
                            src={ABOUT_PHOTO}
                            alt="Father and son repair team"
                            fill
                            sizes="(min-width: 1024px) 520px, 100vw"
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-tertiary">
                            <User size={40} strokeWidth={1.4} />
                            <p className="text-sm">[Add a photo of you and your dad]</p>
                        </div>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-2xl border border-white/70 bg-white/75 px-4 py-2.5 backdrop-blur-xl"
                            >
                                <p className="text-xl font-bold leading-none tracking-tight text-primary">
                                    {s.value}
                                </p>
                                <p className="mt-1 text-[11px] text-secondary">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: story */}
                <div className="flex flex-col gap-6">
                    {/* EDIT: write this in your own words */}
                    <p className="text-lg leading-relaxed text-secondary">
                        AbdelFix is a father-and-son team. My dad is an electrical engineer
                        with more than 25 years of experience repairing phones and tablets.
                        I am a software engineer, and I have worked beside him for over six
                        years. Between us we cover both halves of every repair: the
                        hardware that breaks and the software that makes it run.
                    </p>

                    <div className="flex flex-col gap-3">
                        {experts.map(({ icon: Icon, role, detail, text }) => (
                            <div
                                key={role}
                                className="flex items-start gap-4 rounded-[28px] border border-white/80 bg-white/70 p-5"
                            >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                                <div>
                                    <p className="text-[17px] font-semibold text-primary">{role}</p>
                                    <p className="text-[13px] font-medium text-tertiary">{detail}</p>
                                    <p className="mt-2 text-[15px] leading-relaxed text-secondary">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {badges.map(({ icon: Icon, label }) => (
                            <span
                                key={label}
                                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/80 bg-white/70 pl-1.5 pr-3.5 text-[13px] font-semibold text-primary shadow-sm"
                            >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  <Icon size={13} strokeWidth={2} />
                </span>
                                {label}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}