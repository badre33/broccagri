import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // BroccAgri Primary selon charte
        default: "bg-brand-green text-white hover:brightness-95 rounded-[12px] font-semibold shadow-md",
        // BroccAgri Secondary selon charte  
        secondary: "bg-brand-green-light text-white hover:brightness-95 rounded-[12px] font-semibold shadow-md",
        // BroccAgri Ghost selon charte
        ghost: "bg-transparent text-brand-green border border-brand-green hover:bg-brand-green hover:text-white rounded-[12px] font-semibold",
        // Accent Jaune Soleil
        accent: "bg-brand-sun text-brand-slate hover:brightness-95 rounded-[12px] font-semibold shadow-md",
        // Variantes UI standards
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[12px]",
        outline: "border border-neutral-300 bg-background hover:bg-accent hover:text-accent-foreground rounded-[12px]",
        link: "text-brand-green underline-offset-4 hover:underline",
        // Variantes spéciales BroccAgri
        hero: "bg-brand-green text-white hover:brightness-95 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-[12px] font-semibold",
        success: "bg-success text-success-foreground hover:brightness-95 rounded-[12px] font-semibold shadow-md",
        premium: "bg-gradient-to-r from-brand-green to-brand-sun text-white hover:shadow-xl transform hover:scale-105 rounded-[12px] font-semibold",
        cart: "bg-brand-sun text-brand-slate hover:brightness-95 rounded-full shadow-md hover:shadow-lg transform hover:scale-105",
        soil: "bg-brand-soil text-white hover:brightness-95 rounded-[12px] font-semibold shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }