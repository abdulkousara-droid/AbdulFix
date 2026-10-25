import { SiWhatsapp } from "react-icons/si";
import { useTranslations } from "next-intl";

const WHATSAPP = "34671891305";

export default function FloatingWhatsApp() {
    const t = useTranslations("floating");
    const tb = useTranslations("booking");

    return (
        <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(tb("waMessage"))}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("aria")}
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
        >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
            <SiWhatsapp size={28} aria-hidden />
        </a>
    );
}
