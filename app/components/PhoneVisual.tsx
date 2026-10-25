import Image from "next/image";
import { Package, Truck, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PhoneVisual() {
    const t = useTranslations("phone");

    const steps = [
        { label: t("pickedUp"), icon: Package, done: true },
        { label: t("repaired"), icon: Wrench, done: true },
        { label: t("onTheWay"), icon: Truck, done: false },
    ];

    return (
        // Outer box sets the size per screen; the inner box is fixed 440x600 and scaled to fit
        <div className="h-[420px] w-[308px] sm:h-[510px] sm:w-[374px] lg:h-[600px] lg:w-[440px]">
            <div className="relative h-[600px] w-[440px] origin-top-left rtl:origin-top-right scale-[0.7] sm:scale-[0.85] lg:scale-100">
                {/* Phone shadow: sits behind the phone, only shows outside its edges */}
                <div className="absolute left-[140px] top-0 h-[600px] w-[300px] rounded-[60px] shadow-[0_60px_90px_rgba(20,24,36,0.18),0_10px_24px_rgba(20,24,36,0.08)] ring-1 ring-black/[0.04]" />

                {/* Phone, camera, screwdriver and wrench */}
                <Image
                    src="/phone.png"
                    alt=""
                    width={440}
                    height={600}
                    priority
                    className="absolute inset-0"
                />

                {/* Text and steps card, placed over the phone screen */}
                <div className="absolute bottom-[34px] left-[174px] right-[34px] flex flex-col gap-[14px]">
                    <p className="text-[12px] font-medium uppercase tracking-[3px] text-secondary">
                        {t("label")}
                    </p>

                    <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-1.5px] text-primary rtl:leading-[1.3]">
                        {t("title1")}
                        <br />
                        {t("title2")}
                    </h2>

                    <div className="flex flex-col gap-[14px] rounded-[24px] border border-white/90 bg-gradient-to-br from-white/80 to-white/30 p-[18px] shadow-[0_8px_20px_rgba(20,24,36,0.06)] backdrop-blur-xl">
                        {steps.map(({ label, icon: Icon, done }) => (
                            <div
                                key={label}
                                className="flex items-center gap-[14px] text-base font-medium text-primary"
                            >
                                <span
                                    className={
                                        done
                                            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white"
                                            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-primary/20 bg-white/70 text-primary"
                                    }
                                >
                                    <Icon size={22} strokeWidth={1.8} />
                                </span>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}