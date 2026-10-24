import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
    SiApple,
    SiGoogle,
    SiHonor,
    SiHuawei,
    SiLg,
    SiMotorola,
    SiNokia,
    SiOneplus,
    SiOppo,
    SiSamsung,
    SiSony,
    SiVivo,
    SiXiaomi,
} from "react-icons/si";

type Brand = {
    name: string;
    color: string; // tile color
    on?: string; // text/logo color (default white)
    icon?: IconType;
    size?: number; // optional logo size
    wordmark?: boolean; // the logo already spells the name
    textClass?: string; // style for brands without a logo
};

const rowOne: Brand[] = [
    { name: "Apple", color: "#1D1D1F", icon: SiApple },
    { name: "Samsung", color: "#1428A0", icon: SiSamsung, wordmark: true },
    { name: "Xiaomi", color: "#FF6900", icon: SiXiaomi },
    { name: "Oppo", color: "#1D9A6C", icon: SiOppo, wordmark: true },
    { name: "Huawei", color: "#CF0A2C", icon: SiHuawei },
    { name: "Vivo", color: "#415FFF", icon: SiVivo, wordmark: true },
];

const rowTwo: Brand[] = [
    { name: "Nokia", color: "#124191", icon: SiNokia, wordmark: true },
    { name: "Motorola", color: "#E1140A", icon: SiMotorola },
    { name: "Pixel", color: "#FBBC04", on: "#1D1D1F", icon: SiGoogle },
    { name: "Sony", color: "#222222", icon: SiSony, wordmark: true },
    { name: "OnePlus", color: "#F5010C", icon: SiOneplus },
    { name: "Honor", color: "#00A0E9", icon: SiHonor, wordmark: true },
    { name: "LG", color: "#A50034", icon: SiLg, wordmark: true, size: 44 },
];

function Tile({ brand }: { brand: Brand }) {
    const Icon = brand.icon;
    return (
        <div
            style={{ backgroundColor: brand.color, color: brand.on ?? "#ffffff" } as CSSProperties}
            className="flex h-16 w-[176px] shrink-0 items-center justify-center gap-2 rounded-[20px] ring-1 ring-inset ring-white/25 transition-transform duration-300 hover:scale-110"
        >
            {Icon && <Icon size={brand.size ?? (brand.wordmark ? 76 : 22)} aria-hidden />}
            {brand.wordmark ? (
                <span className="sr-only">{brand.name}</span>
            ) : (
                <span className={brand.textClass ?? "text-[20px] font-semibold"}>
          {brand.name}
        </span>
            )}
        </div>
    );
}

function Row({ brands, reverse = false }: { brands: Brand[]; reverse?: boolean }) {
    // Four identical groups. The animation moves by half, so the loop never jumps.
    return (
        <div className={`flex w-max py-2 ${reverse ? "marquee-right" : "marquee-left"}`}>
            {Array.from({ length: 4 }).map((_, g) => (
                <div
                    key={g}
                    className="flex shrink-0 gap-4 pr-4"
                    aria-hidden={g > 0 || undefined}
                >
                    {brands.map((b) => (
                        <Tile key={b.name} brand={b} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function Brands() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
            <div className="overflow-hidden rounded-[40px] border border-white/80 bg-white/70 py-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                <h2 className="px-6 text-center text-2xl font-bold tracking-[-0.03em] text-primary sm:text-3xl">
                    We repair every major brand
                </h2>

                <div className="mt-5 flex flex-col [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                    <Row brands={rowOne} />
                    <Row brands={rowTwo} reverse />
                </div>

                <p className="mt-5 px-6 text-center text-xs text-tertiary">
                    All brand names and logos belong to their owners. AbdelFix is an
                    independent repair service.
                </p>
            </div>
        </section>
    );
}