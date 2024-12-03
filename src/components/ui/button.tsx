import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors duration-300 overflow-hidden relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-[#E73A66] text-neutral-50 relative overflow-hidden hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-neutral-900 before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        destructive:
          "bg-red-500 text-neutral-50 relative overflow-hidden hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90 [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-red-600 before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        outline:
          "border border-neutral-200 text-white relative overflow-hidden hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-neutral-100 before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        secondary:
          "bg-[#191919] text-white relative overflow-hidden hover:bg-neutral-100/80 dark:bg-neutral-800 hover:text-black dark:text-neutral-50 dark:hover:bg-neutral-800/80 [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-neutral-100 before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        ghost:
          "text-neutral-900 relative overflow-hidden hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-neutral-100 before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        cart: "bg-[#D9D9D9] text-[#636363] font-normal text-sm relative overflow-hidden hover:text-white [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#E73A66] before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        carousel: "bg-[#2C2C2C] text-white relative overflow-hidden [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-neutral-800 before:transition-all before:duration-300 hover:before:left-0 before:z-0",
        categories: "bg-[#EFF4F9] text-[#636363] font-bold uppercase relative overflow-hidden hover:text-neutral-900 [&>span]:relative [&>span]:z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#E2E8ED] before:transition-all before:duration-300 hover:before:left-0 before:z-0"
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };