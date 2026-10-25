import { ArrowRight, Package, Truck, Wrench } from "lucide-react";
import PhoneVisual from "./PhoneVisual";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");

    const steps = [
        { label: t("step1"), icon: Package },
        { label: t("step2"), icon: Wrench  },
        { label: t("step3"), icon: Truck  },
    ];

    return (
        <section className="relative isolate overflow-x-clip">
            {/* Soft light glows behind the content */}
            <div className="pointer-events-none absolute right-[6%] top-10 -z-10 h-[460px] w-[460px] rounded-full bg-white blur-[90px]" />
            <div className="pointer-events-none absolute -left-24 top-[420px] -z-10 h-[360px] w-[360px] rounded-full bg-[#C9CBD2]/60 blur-[90px]" />

            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 py-16 lg:min-h-[calc(100vh-7rem)] lg:flex-row lg:justify-between lg:py-10">
                {/* Image: Appears first on mobile, last on desktop */}
                <div className="shrink-0 order-first lg:order-last">
                    <PhoneVisual />
                </div>

                {/* Text: Appears last on mobile, first on desktop */}
                <div className="max-w-xl order-last lg:order-first">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                        {t("label")}
                    </p>

                    <h1 className="mt-5 text-[48px] font-bold leading-[1.02] tracking-[-0.03em] text-primary sm:text-6xl lg:text-[80px]">
                        <span className="text-primary">{t("line1")}</span>
                        <br />
                        <span className="font-light text-secondary">{t("line2")}</span>
                    </h1>

                    <p className="mt-7 max-w-md text-lg leading-relaxed text-secondary">
                        {t("text")}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        {steps.map(({ label, icon: Icon }, i) => (
                            <div key={label} className="flex items-center gap-2">
                                <div className="flex h-9 items-center gap-2 rounded-full border border-white/80 bg-white/70 pl-1.5 pr-3.5 text-[13px] font-semibold text-primary shadow-sm backdrop-blur-xl">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <Icon size={13} strokeWidth={2} />
                  </span>
                                    {label}
                                </div>
                                {i < steps.length - 1 && (
                                    <ArrowRight size={14} className="text-tertiary" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#book"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-[15px] font-medium text-white transition-transform hover:scale-[1.02] sm:px-7"
                        >
                            {t("book")}
                        </a>
                        <a
                            href="#repairs"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 text-[15px] font-medium text-primary backdrop-blur-xl transition-colors hover:bg-white sm:px-7"
                        >
                            {t("repairs")}
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[13px] font-medium text-tertiary">
                        <span>{t("trust1")}</span>
                        <span>{t("trust2")}</span>
                        <span>{t("trust3")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
