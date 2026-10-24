import { Plus } from "lucide-react";

const faqs = [
    {
        q: "How does pickup and delivery work?",
        a: "Send us your request, and we agree a time to collect your device from your address in Barcelona or Badalona. We repair it and bring it back to your door.",
    },
    {
        q: "Is pickup and delivery really free?",
        a: "Yes. Pickup and delivery are free in Barcelona and Badalona.",
    },
    {
        q: "Will I know the price before you start?",
        a: "Yes. We check the problem first and tell you the price before we repair anything. If you do not want to go ahead, there is no obligation.",
    },
    {
        // EDIT: write your real repair times
        q: "How long does a repair take?",
        a: "Many repairs, like screens and batteries, are done the same day or within 24 hours. Harder hardware problems can take longer, and we will tell you the time when we give you the price.",
    },
    {
        // EDIT: write the real warranty length, for example "3 months"
        q: "Do you offer a warranty?",
        a: "Yes, every repair comes with a warranty. We will tell you exactly how long it lasts when we confirm your repair.",
    },
    {
        // EDIT: only keep "no charge" if that is really your policy
        q: "What if you cannot fix my device?",
        a: "We will tell you honestly, and you will not be charged for a repair we could not complete.",
    },
    {
        q: "Do you repair tablets too?",
        a: "Yes. We repair phones and tablets, hardware and software, from all the major brands.",
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="mx-auto w-full max-w-3xl scroll-mt-28 px-6 pb-24">
            <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-tertiary">
                    FAQ
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                    Good questions.
                </h2>
                <p className="mt-4 text-lg text-secondary">
                    The things people ask us first.
                </p>
            </div>

            <div className="mt-12 flex flex-col gap-3">
                {faqs.map(({ q, a }) => (
                    <details
                        key={q}
                        className="group rounded-[28px] border border-white/80 bg-white/70 px-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-colors open:bg-white/90"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[17px] font-semibold text-primary [&::-webkit-details-marker]:hidden">
                            {q}
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                <Plus size={18} strokeWidth={2} />
              </span>
                        </summary>
                        <p className="pb-6 pr-12 text-[15px] leading-relaxed text-secondary">
                            {a}
                        </p>
                    </details>
                ))}
            </div>

            <p className="mt-8 text-center text-[15px] text-secondary">
                Still have a question?{" "}
                <a
                    href="#book"
                    className="font-medium text-primary underline underline-offset-4"
                >
                    Send us a message
                </a>
                .
            </p>
        </section>
    );
}