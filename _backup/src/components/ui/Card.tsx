import { cn } from "@/lib/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card rounded-3xl p-6 sm:p-7", className)}>
      {children}
    </div>
  );
}
