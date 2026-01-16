import { cn } from "@/lib/cn";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold text-text-2 backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}
