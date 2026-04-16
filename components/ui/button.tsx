import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bitcoin/60 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-bitcoin text-black hover:bg-bitcoin/90",
        secondary:
          "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10",
        ghost:
          "bg-transparent text-zinc-100 hover:bg-white/10"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ asChild, className, variant, size, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

