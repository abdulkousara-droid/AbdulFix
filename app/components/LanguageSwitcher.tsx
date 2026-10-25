"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="flex rounded-full bg-black/5 p-1 text-xs font-semibold">
            {routing.locales.map((l) => (
                <button
                    key={l}
                    type="button"
                    onClick={() => router.replace(pathname, { locale: l })}
                    aria-pressed={l === locale}
                    className={`rounded-full px-3 py-1.5 uppercase transition-colors ${
                        l === locale
                            ? "bg-primary text-white"
                            : "text-secondary hover:text-primary"
                    }`}
                >
                    {l}
                </button>
            ))}
        </div>
    );
}