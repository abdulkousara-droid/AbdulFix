"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslations } from "next-intl";

const WHATSAPP = "34671891305";
const waLink = (text: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

type Area = "Barcelona" | "Badalona";
type FormState = {
    name: string;
    phone: string;
    device: string;
    problem: string;
    area: Area;
    address: string;
    website: string; // hidden trap for bots
};
type Errors = Partial<
    Record<"name" | "phone" | "device" | "problem" | "address", string>
>;

const empty: FormState = {
    name: "",
    phone: "",
    device: "",
    problem: "",
    area: "Barcelona",
    address: "",
    website: "",
};

const input =
    "w-full rounded-full border border-black/10 bg-white/60 px-5 text-[15px] text-primary outline-none transition placeholder:text-tertiary focus:border-primary focus:bg-white h-[52px]";

function Field({
                  label,
                  error,
                  children,
              }: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
            {label}
            {children}
            {error && <span className="text-xs font-normal text-red-600">{error}</span>}
        </label>
    );
}

export default function Booking() {
    const t = useTranslations("booking");

    function validate(f: FormState): Errors {
        const e: Errors = {};
        if (f.name.trim().length < 2) e.name = t("errName");
        if (!/^\+?[0-9\s-]{9,16}$/.test(f.phone.trim()))
            e.phone = t("errPhone");
        if (f.device.trim().length < 2) e.device = t("errDevice");
        if (f.problem.trim().length < 3) e.problem = t("errProblem");
        if (f.address.trim().length < 5) e.address = t("errAddress");
        return e;
    }

    const [form, setForm] = useState<FormState>(empty);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const set = (key: keyof FormState, value: string) =>
        setForm((f) => ({ ...f, [key]: value }));

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (status === "sending") return;

        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length) return;

        if (form.website) {
            setStatus("sent"); // a bot filled the hidden field: pretend it worked
            return;
        }

        setStatus("sending");
        try {
            await addDoc(collection(db, "bookings"), {
                name: form.name.trim(),
                phone: form.phone.trim(),
                device: form.device.trim(),
                problem: form.problem.trim(),
                area: form.area,
                address: form.address.trim(),
                status: "new",
                createdAt: serverTimestamp(),
            });
            setForm(empty);
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="book" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-24">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                    {t("title")}
                </h2>
                <p className="mt-4 text-lg text-secondary">
                    {t("subtitle")}
                </p>
            </div>

            <div className="mt-12 grid gap-10 rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:rounded-[44px] sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
                {/* Left */}
                <div className="flex flex-col gap-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                        {t("cardLabel")}
                    </p>
                    <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-primary sm:text-5xl">
                        {t("cardTitle")}
                    </h2>
                    <p className="text-lg leading-relaxed text-secondary">
                        {t("cardText")}
                    </p>

                    <div>
                        <a
                            href={waLink(t("waMessage"))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)] transition hover:scale-[1.02] hover:bg-[#1FBE5A]"
                        >
                            <SiWhatsapp size={20} aria-hidden />
                            {t("whatsapp")}
                        </a>
                    </div>

                    {/* Repair photo: fills the space under the button */}
                    <div className="relative mt-2 min-h-[260px] flex-1 overflow-hidden rounded-[24px] border border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] sm:rounded-[32px]">
                        <Image
                            src="/repair.png"
                            alt={t("photoAlt")}
                            fill
                            sizes="(min-width: 1024px) 520px, 100vw"
                            className="object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[13px] font-semibold text-primary backdrop-blur-xl">
                            {t("photoBadge")}
                        </div>
                    </div>
                </div>

                {/* Right */}
                {status === "sent" ? (
                    <div className="flex flex-col items-center justify-center gap-4 rounded-[24px] bg-neutral/80 p-8 text-center sm:rounded-[32px]">
                        <CheckCircle2 size={44} strokeWidth={1.6} className="text-primary" />
                        <h3 className="text-2xl font-bold tracking-tight text-primary">
                            {t("thanksTitle")}
                        </h3>
                        <p className="max-w-sm text-secondary">
                            {t("thanksText")}
                        </p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="mt-2 text-sm font-medium text-secondary underline underline-offset-4 hover:text-primary"
                        >
                            {t("another")}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                        {/* Hidden trap for bots */}
                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            value={form.website}
                            onChange={(e) => set("website", e.target.value)}
                            className="absolute -left-[9999px] h-0 w-0 opacity-0"
                        />

                        <Field label={t("name")} error={errors.name}>
                            <input
                                className={input}
                                placeholder={t("namePh")}
                                autoComplete="name"
                                maxLength={100}
                                value={form.name}
                                onChange={(e) => set("name", e.target.value)}
                            />
                        </Field>

                        <Field label={t("phone")} error={errors.phone}>
                            <input
                                className={input}
                                type="tel"
                                inputMode="tel"
                                placeholder="+34"
                                autoComplete="tel"
                                maxLength={20}
                                value={form.phone}
                                onChange={(e) => set("phone", e.target.value)}
                            />
                        </Field>

                        <Field label={t("device")} error={errors.device}>
                            <input
                                className={input}
                                placeholder={t("devicePh")}
                                maxLength={100}
                                value={form.device}
                                onChange={(e) => set("device", e.target.value)}
                            />
                        </Field>

                        <Field label={t("problem")} error={errors.problem}>
              <textarea
                  className={`${input} h-28 resize-none rounded-3xl py-3.5`}
                  placeholder={t("problemPh")}
                  maxLength={500}
                  value={form.problem}
                  onChange={(e) => set("problem", e.target.value)}
              />
                        </Field>

                        <div className="flex flex-col gap-2 text-sm font-medium text-primary">
                            {t("area")}
                            <div className="flex gap-2">
                                {(["Barcelona", "Badalona"] as Area[]).map((a) => (
                                    <button
                                        key={a}
                                        type="button"
                                        onClick={() => set("area", a)}
                                        aria-pressed={form.area === a}
                                        className={`h-11 flex-1 rounded-full border text-[15px] font-medium transition-colors ${
                                            form.area === a
                                                ? "border-primary bg-primary text-white"
                                                : "border-black/10 bg-white/60 text-secondary hover:bg-white"
                                        }`}
                                    >
                                        {a}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Field label={t("address")} error={errors.address}>
                            <input
                                className={input}
                                placeholder={t("addressPh")}
                                autoComplete="street-address"
                                maxLength={200}
                                value={form.address}
                                onChange={(e) => set("address", e.target.value)}
                            />
                        </Field>


                        {status === "error" && (
                            <p className="text-sm text-red-600">
                                {t("error")}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="mt-2 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-medium text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
                        >
                            {status === "sending" ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    {t("sending")}
                                </>
                            ) : (
                                t("submit")
                            )}
                        </button>

                        <p className="text-center text-xs text-tertiary">
                            {t("privacy")}
                        </p>

                    </form>
                )}
            </div>
        </section>
    );
}
