import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white hover:bg-accent-hover shadow-elevation-1 hover:shadow-elevation-2 active:scale-[0.98]",
        secondary:
          "bg-navy/5 text-navy hover:bg-navy/10 border border-navy/15 active:scale-[0.98]",
        outline:
          "border-2 border-navy/25 bg-transparent hover:bg-navy/5 text-navy active:scale-[0.98]",
        ghost:
          "hover:bg-navy/5 text-navy active:scale-[0.98]",
        link:
          "text-accent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-7 py-2.5",
        sm: "h-9 rounded-lg px-5 text-xs",
        lg: "h-13 rounded-xl px-9 text-base",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
