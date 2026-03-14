import Image from "next/image";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

type DeviceMockupProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
      )}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/78 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-700 shadow-soft backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-500 to-mint-400" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.9rem] lg:leading-[1.05]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-subtle sm:text-lg">{description}</p>
    </div>
  );
}

export function DeviceMockup({
  src,
  alt,
  caption,
  priority = false,
  className,
  sizes = "(max-width: 768px) 72vw, 320px",
}: DeviceMockupProps) {
  return (
    <figure className={cn("group relative", className)}>
      <div className="absolute inset-x-6 inset-y-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(88,165,255,0.45),_transparent_58%)] blur-2xl transition duration-500 group-hover:opacity-90" />
      <div className="device-shell relative">
        <div className="device-shell-inner">
          <div className="device-notch" />
          <Image
            src={src}
            alt={alt}
            width={1242}
            height={2688}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium text-subtle">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function FaqCards({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group rounded-[1.6rem] border border-line/70 bg-white/88 p-6 shadow-soft backdrop-blur-xl"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
            {item.question}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line/70 bg-page text-xl text-brand-700 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 pr-8 text-sm leading-7 text-subtle sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
