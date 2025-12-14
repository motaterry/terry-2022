import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center justify-center flex-shrink-0 w-5 h-5">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          className="sr-only"
          {...props}
        />
        <div
          className={cn(
            "absolute inset-0 w-5 h-5 border-2 rounded-none flex items-center justify-center transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0",
            checked
              ? "bg-primary border-primary"
              : "border-border bg-background",
            className
          )}
          style={checked ? {
            backgroundColor: 'hsl(var(--primary))',
            borderColor: 'hsl(var(--primary))'
          } : undefined}
        >
          <Check 
            className={cn(
              "absolute h-3.5 w-3.5 flex-shrink-0 transition-opacity",
              checked ? "text-foreground opacity-100" : "opacity-0"
            )}
            style={checked ? { color: 'hsl(var(--foreground))' } : undefined}
            strokeWidth={3}
          />
        </div>
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }

