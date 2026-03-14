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
  const isSoft = variant === "light";

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
        isSoft
          ? "border-white/28 bg-[linear-gradient(135deg,_rgba(255,255,255,0.10)_0%,_rgba(255,255,255,0.02)_18%),linear-gradient(135deg,_#5078ff_0%,_#5c92ff_48%,_#66e3c9_100%)] text-white shadow-[0_22px_54px_rgba(53,84,184,0.24)]"
          : "border-white/18 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0.03)_18%),linear-gradient(135deg,_#3d61ee_0%,_#5a95ff_52%,_#61e7cc_100%)] text-white shadow-[0_22px_54px_rgba(46,76,171,0.24)]",
        className,
      )}
      aria-label="Download Neurova on the App Store"
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-80",
          isSoft
            ? "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.34),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_30%)]"
            : "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.10),_transparent_30%)]",
        )}
      />

      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center",
          compact ? "h-11 w-11 rounded-full" : "h-12 w-12 rounded-[1.05rem]",
          isSoft
            ? "bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            : "bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]",
        )}
      >
        <AppleLogoIcon
          className={cn(
            compact ? "h-5 w-5" : "h-6 w-6",
            "text-white",
          )}
        />
      </span>

      <span className="relative min-w-0 flex-1">
        {compact ? (
          <span className="block whitespace-nowrap text-sm font-semibold tracking-[-0.02em] text-white">
            Download on App Store
          </span>
        ) : (
          <>
            <span
              className={cn(
                "block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/82",
              )}
            >
              {note}
            </span>
            <span className="mt-1 block text-lg font-semibold tracking-[-0.03em] text-white">
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
            isSoft ? "bg-white/18" : "bg-white/14",
          )}
        >
          <ArrowRightIcon
            className={cn(
              compact ? "h-4 w-4" : "h-[18px] w-[18px]",
              "text-white",
            )}
          />
        </span>
      ) : null}
    </a>
  );
}
