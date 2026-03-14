import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SvgBase({ className, children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3z" />
      <path d="M5 16l.7 2.3L8 19l-2.3.7L5 22l-.7-2.3L2 19l2.3-.7L5 16z" />
      <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z" />
    </SvgBase>
  );
}

export function FlashcardsIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M8 7.5h8.5a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2z" />
      <path d="M6 15.5H5A2.5 2.5 0 0 1 2.5 13V7A2.5 2.5 0 0 1 5 4.5h8A2.5 2.5 0 0 1 15.5 7v.5" />
      <path d="M9.5 11.5h5" />
      <path d="M9.5 14.5h3.5" />
    </SvgBase>
  );
}

export function ScanIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M7 3H5a2 2 0 0 0-2 2v2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 17v2a2 2 0 0 0 2 2h2" />
      <path d="M6 12h12" />
      <path d="M8 9.5h8" />
      <path d="M8 14.5h8" />
    </SvgBase>
  );
}

export function RepeatIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a3 3 0 0 1 3-3h15" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v2a3 3 0 0 1-3 3H3" />
    </SvgBase>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-4" />
    </SvgBase>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M7 18a4 4 0 0 1-.4-8A6 6 0 0 1 18 8a4 4 0 0 1 .3 8H7z" />
      <path d="M12 10v8" />
      <path d="M9.5 15.5L12 18l2.5-2.5" />
    </SvgBase>
  );
}

export function StreakIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M12 3c1.2 2 1.8 3.4 1.8 4.4A2.8 2.8 0 0 1 11 10a5.4 5.4 0 0 1-1.4-.2C9.5 7.4 10.3 5.4 12 3z" />
      <path d="M18 13c0 4-2.7 8-6 8s-6-4-6-8c0-2.7 1.6-4.8 4.3-6 .1 2 1.2 3 2.7 3 1.7 0 3-1.4 3-3.2 1.4 1.1 2 3 2 6.2z" />
    </SvgBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M12 3l7 3v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3z" />
      <path d="M9.5 12.5l1.8 1.8 3.2-4.1" />
    </SvgBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 8l8 5 8-5" />
    </SvgBase>
  );
}

export function TimeIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </SvgBase>
  );
}

export function PrivacyIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M7.5 10V8.5a4.5 4.5 0 0 1 9 0V10" />
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path d="M12 13.5v3" />
    </SvgBase>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.2l2.3 2.4 4.7-5.1" />
    </SvgBase>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </SvgBase>
  );
}
