import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
    const t = useTranslations("faq");
    const faqs = [1, 2, 3, 4, 5, 6, 7];

    return (
        <section id="faq" className="mx-auto w-full max-w-3xl scroll-mt-28 px-6 pb-24">
            <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                    {t("label")}
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                    {t("title")}
                </h2>
                <p className="mt-4 text-lg text-secondary">
                    {t("subtitle")}
                </p>
            </div>

            <div className="mt-12 flex flex-col gap-3">
                {faqs.map((n) => (
                    <details
                        key={n}
                        className="group rounded-[24px] border border-white/80 bg-white/70 px-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-colors open:bg-white/90 sm:rounded-[28px]"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold text-primary sm:text-[17px] [&::-webkit-details-marker]:hidden">
                            {t(`q${n}`)}
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                <Plus size={18} strokeWidth={2} />
              </span>
                        </summary>
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-secondary sm:text-[15px]">
                            {t(`a${n}`)}
                        </p>
                    </details>
                ))}
            </div>

            <p className="mt-8 text-center text-sm text-secondary sm:text-[15px]">
                {t("still")}{" "}
                <a
                    href="#book"
                    className="font-medium text-primary underline underline-offset-4"
                >
                    {t("cta")}
                </a>
                .
            </p>
        </section>
    );
}
