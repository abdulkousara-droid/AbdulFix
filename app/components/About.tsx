import Image from "next/image";
import { Code, Cpu, Tag, Users, Wrench, User } from "lucide-react";
import { useTranslations } from "next-intl";

// EDIT: put your photo in /public (for example /about.jpg) and write its path here.
// While this is null, a placeholder frame is shown.
const ABOUT_PHOTO: string | null = "/about.png";

const experts = [
    { icon: Cpu, key: "hardware" },
    { icon: Code, key: "software" },
];

const stats = [
    { value: "25+", key: "statHardware" },
    { value: "6+", key: "statTeam" },
    { value: "2018", key: "statSoftware" },
];

const badges = [
    { icon: Users, key: "badgeTeam" },
    { icon: Wrench, key: "badgeHome" },
    { icon: Tag, key: "badgePrice" },
];

export default function About() {
    const t = useTranslations("about");

    return (
        <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-24">
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

            <div className="mt-12 grid gap-10 rounded-[44px] border border-white/80 bg-white/70 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:p-10 md:grid-cols-2 lg:gap-14 lg:p-14">
                {/* Left: photo */ }
                <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-white to-[#D9DBE1] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] sm:min-h-[400px] md:min-h-[500px]">
                    {ABOUT_PHOTO ? (
                        <Image
                            src={ABOUT_PHOTO}
                            alt={t("photoAlt")}
                            fill
                            sizes="(min-width: 640px) 520px, (min-width: 1024px) 520px, 100vw"
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-tertiary">
                            <User size={40} strokeWidth={1.4} />
                            <p className="text-sm">{t("placeholder")}</p>
                        </div>
                    )}

                    <div className="absolute bottom-4 start-4 end-4 flex flex-wrap gap-1.5 sm:gap-2">
                        {stats.map((s) => (
                            <div
                                key={s.key}
                                className="rounded-2xl border border-white/70 bg-white/75 px-2.5 py-1.5 backdrop-blur-xl sm:px-3 sm:py-2"
                            >
                                <p className="text-base font-bold leading-none tracking-tight text-primary sm:text-lg">
                                    {s.value}
                                </p>
                                <p className="mt-0.5 text-[8.5px] text-secondary sm:text-[9px] sm:text-[11px]">{t(s.key)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: story */}
                <div className="flex flex-col gap-6">
                    {/* EDIT: write this in your own words */}
                    <p className="text-lg leading-relaxed text-secondary">
                        {t("story")}
                    </p>

                    <div className="flex flex-col gap-3">
                        {experts.map(({ icon: Icon, key }) => (
                            <div
                                key={key}
                                className="flex items-start gap-4 rounded-[28px] border border-white/80 bg-white/70 p-5"
                            >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                                <div>
                                    <p className="text-[17px] font-semibold text-primary">{t(`${key}Role`)}</p>
                                    <p className="text-[13px] font-medium text-tertiary">{t(`${key}Detail`)}</p>
                                    <p className="mt-2 text-[15px] leading-relaxed text-secondary">
                                        {t(`${key}Text`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {badges.map(({ icon: Icon, key }) => (
                            <span
                                key={key}
                                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/80 bg-white/70 ps-1.5 pe-3.5 text-[13px] font-semibold text-primary shadow-sm"
                            >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  <Icon size={13} strokeWidth={2} />
                </span>
                                {t(key)}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
