import { cn } from "@/lib/cn";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type Props = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary: "text-white border border-transparent shadow-sm",
  secondary:
    "text-[var(--text)] border border-[var(--border)] bg-white/85 backdrop-blur hover:bg-white",
  ghost:
    "text-[var(--text)] border border-transparent bg-transparent hover:bg-white/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button(props: Props) {
  const {
    variant = "secondary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const primaryStyle =
    variant === "primary"
      ? {
          background: "var(--grad-cta)",
        }
      : undefined;

  const classes = cn(base, variants[variant], sizes[size], "lift", className);

  if (props.as === "a") {
    const { href, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} style={primaryStyle} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      style={primaryStyle}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
