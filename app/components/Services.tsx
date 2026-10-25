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
import { useTranslations } from "next-intl";

 type Item = { key: string; icon: LucideIcon };

 const hardware: Item[] = [
     { key: "screen", icon: Smartphone },
     { key: "battery", icon: BatteryCharging },
     { key: "port", icon: PlugZap },
     { key: "water", icon: Droplets },
     { key: "camera", icon: Camera },
     { key: "audio", icon: Volume2 },
 ];

 const software: Item[] = [
     { key: "updates", icon: RefreshCw },
     { key: "slow", icon: Gauge },
     { key: "virus", icon: Bug },
     { key: "reset", icon: RotateCcw },
     { key: "backup", icon: DatabaseBackup },
     { key: "diagnostics", icon: Stethoscope },
 ];

 const promises: Item[] = [
     { key: "price", icon: Tag },
     { key: "warranty", icon: ShieldCheck },
     { key: "parts", icon: BadgeCheck },
     { key: "fast", icon: Zap },
 ];

function ServiceCard({ group, items }: { group: "hardware" | "software"; items: Item[] }) {
    const t = useTranslations("services");

    return (
        <div className="rounded-[40px] border border-white/80 bg-white/70 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                {t(`${group}.label`)}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-primary">
                {t(`${group}.title`)}
            </h3>

            <ul className="mt-6 flex flex-col gap-1">
                {items.map(({ icon: Icon, key }) => (
                    <li
                        key={key}
                        className="flex items-center gap-4 rounded-2xl p-2.5 transition-colors hover:bg-neutral"
                    >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                        <div>
                            <p className="text-[15px] font-semibold text-primary">{t(`${group}.${key}.title`)}</p>
                            <p className="text-sm text-secondary"> {t(`${group}.${key}.text`)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Services() {
    const t = useTranslations("services");

    return (
        <section id="repairs" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-24">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                    {t("label")}
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                    {t("title")}
                </h2>
                <p className="mt-4 text-lg text-secondary">
                    {t("subtitle")}
                </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <ServiceCard group="hardware" items={hardware} />
                <ServiceCard group="software" items={software} />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {promises.map(({ icon: Icon, key }) => (
                    <div
                        key={key}
                        className="flex items-start gap-4 rounded-[28px] border border-white/80 bg-white/70 p-5 backdrop-blur-xl"
                    >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                        <div>
                            <p className="text-[15px] font-semibold text-primary">{t(`promises.${key}.title`)}</p>
                            <p className="mt-0.5 text-sm text-secondary">{t(`promises.${key}.text`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
