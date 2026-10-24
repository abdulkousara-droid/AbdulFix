import {
    BadgeCheck,
    BatteryCharging,
    Bug,
    Camera,
    DatabaseBackup,
    Droplets,
    Gauge,
    PlugZap,
    RefreshCw,
    RotateCcw,
    ShieldCheck,
    Smartphone,
    Stethoscope,
    Tag,
    Volume2,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; text: string };

const hardware: Item[] = [
    { icon: Smartphone, title: "Screen replacement", text: "Cracked, dead or unresponsive screens" },
    { icon: BatteryCharging, title: "Battery replacement", text: "Draining fast or shutting down" },
    { icon: PlugZap, title: "Charging port", text: "Loose, dirty or not charging" },
    { icon: Droplets, title: "Water damage", text: "Cleaning and repair after liquid damage" },
    { icon: Camera, title: "Camera repair", text: "Blurry, cracked or not opening" },
    { icon: Volume2, title: "Speaker and microphone", text: "No sound, low sound or no voice" },
];

const software: Item[] = [
    { icon: RefreshCw, title: "Updates and flashing", text: "System updates and software reinstall" },
    { icon: Gauge, title: "Slow or freezing phone", text: "Speed it up and fix crashes" },
    { icon: Bug, title: "Virus and malware removal", text: "Clean your device and secure it" },
    { icon: RotateCcw, title: "Factory reset and setup", text: "Fresh start, set up like new" },
    { icon: DatabaseBackup, title: "Data backup and transfer", text: "Keep your photos and contacts safe" },
    { icon: Stethoscope, title: "Software diagnostics", text: "Find out what is wrong before we fix it" },
];

const promises: Item[] = [
    { icon: Tag, title: "Fair prices", text: "You know the price before we start" },
    // EDIT: add the real warranty length, for example "3 months warranty on every repair"
    { icon: ShieldCheck, title: "Warranty", text: "Included with every repair" },
    // EDIT: only write "100% original parts" if that is really true
    { icon: BadgeCheck, title: "Quality parts", text: "Tested before they go into your device" },
    { icon: Zap, title: "Fast service", text: "We work to get your device back quickly" },
];

function ServiceCard({
                         label,
                         title,
                         items,
                     }: {
    label: string;
    title: string;
    items: Item[];
}) {
    return (
        <div className="rounded-[40px] border border-white/80 bg-white/70 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                {label}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-primary">
                {title}
            </h3>

            <ul className="mt-6 flex flex-col gap-1">
                {items.map(({ icon: Icon, title, text }) => (
                    <li
                        key={title}
                        className="flex items-center gap-4 rounded-2xl p-2.5 transition-colors hover:bg-neutral"
                    >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
              <Icon size={20} strokeWidth={1.8} />
            </span>
                        <div>
                            <p className="text-[15px] font-semibold text-primary">{title}</p>
                            <p className="text-sm text-secondary">{text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Services() {
    return (
        <section id="repairs" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-24">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                    Repairs
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                    Every repair, one team.
                </h2>
                <p className="mt-4 text-lg text-secondary">
                    Hardware and software repairs for phones and tablets.
                </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <ServiceCard label="Hardware" title="Fixing what is broken" items={hardware} />
                <ServiceCard label="Software" title="Making it run right" items={software} />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {promises.map(({ icon: Icon, title, text }) => (
                    <div
                        key={title}
                        className="flex items-start gap-4 rounded-[28px] border border-white/80 bg-white/70 p-5 backdrop-blur-xl"
                    >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <Icon size={20} strokeWidth={1.8} />
            </span>
                        <div>
                            <p className="text-[15px] font-semibold text-primary">{title}</p>
                            <p className="mt-0.5 text-sm text-secondary">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}