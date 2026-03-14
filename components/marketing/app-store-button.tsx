import { AppleLogoIcon, ArrowRightIcon } from "@/components/marketing/icons";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AppStoreButtonProps = {
  className?: string;
  variant?: "dark" | "light";
  size?: "default" | "compact";
  note?: string;
  showArrow?: boolean;
};

export function AppStoreButton({
  className,
  variant = "dark",
  size = "default",
  note = "Available on the",
  showArrow = true,
}: AppStoreButtonProps) {
  const compact = size === "compact";

  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative inline-flex items-center overflow-hidden border transition duration-200 ease-out hover:-translate-y-0.5",
        compact
          ? "gap-3 rounded-full px-4 py-3"
          : "gap-4 rounded-[1.5rem] px-5 py-4",
        variant === "dark"
          ? "border-slate-900/10 bg-[linear-gradient(135deg,_#0a1222_0%,_#142640_58%,_#19324d_100%)] text-white shadow-[0_22px_52px_rgba(8,17,34,0.24)]"
          : "border-white/35 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96)_0%,_rgba(236,245,255,0.92)_100%)] text-slate-900 shadow-[0_22px_52px_rgba(20,44,104,0.2)]",
        className,
      )}
      aria-label="Download Neurova on the App Store"
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-80",
          variant === "dark"
            ? "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(102,231,204,0.16),_transparent_28%)]"
            : "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.58),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(90,149,255,0.12),_transparent_30%)]",
        )}
      />

      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center",
          compact ? "h-11 w-11 rounded-full" : "h-12 w-12 rounded-[1.05rem]",
          variant === "dark"
            ? "bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
            : "bg-slate-900/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
        )}
      >
        <AppleLogoIcon className={compact ? "h-5 w-5" : "h-6 w-6"} />
      </span>

      <span className="relative min-w-0 flex-1">
        {compact ? (
          <span className="block whitespace-nowrap text-sm font-semibold tracking-[-0.02em]">
            Download on App Store
          </span>
        ) : (
          <>
            <span
              className={cn(
                "block text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
                variant === "dark" ? "text-white/68" : "text-slate-500",
              )}
            >
              {note}
            </span>
            <span className="mt-1 block text-lg font-semibold tracking-[-0.03em]">
              App Store
            </span>
          </>
        )}
      </span>

      {showArrow ? (
        <span
          className={cn(
            "relative inline-flex shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-0.5",
            compact ? "h-9 w-9" : "h-10 w-10",
            variant === "dark" ? "bg-white/10" : "bg-slate-900/6",
          )}
        >
          <ArrowRightIcon
            className={cn(
              compact ? "h-4 w-4" : "h-[18px] w-[18px]",
              variant === "dark" ? "text-white/88" : "text-slate-700",
            )}
          />
        </span>
      ) : null}
    </a>
  );
}
