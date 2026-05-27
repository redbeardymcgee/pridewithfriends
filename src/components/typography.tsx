import { cn } from "#/lib/utils"
import { GradientText, type GradientTextProps } from "./GradientText"

interface TextProps {
  children: React.ReactNode
  className?: string
}

export function DocsH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="justify-self-center text-3xl text-cyan-300">{children}</h2>
  )
}

export function DocsH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="justify-self-center text-2xl text-cyan-200">{children}</h3>
  )
}

export function TutorialText({ children, className }: TextProps) {
  return (
    <strong
      className={cn(
        "rounded px-1 text-blue-500 text-shadow-blue-800 text-shadow-sm",
        className,
      )}
    >
      {children}
    </strong>
  )
}

export function ExampleText({ children, className }: TextProps) {
  return (
    <em
      className={cn(
        "rounded px-1 text-orange-300 text-shadow-orange-800 text-shadow-sm",
        className,
      )}
    >
      {children}
    </em>
  )
}

export function WarningText({ children, className }: TextProps) {
  return (
    <strong
      className={cn(
        "rounded px-1 text-red-400 text-shadow-red-800 text-shadow-sm",
        className,
      )}
    >
      {children}
    </strong>
  )
}

export function PrideGradient({ children, className }: TextProps) {
  return <span className={cn("pride-gradient", className)}>{children}</span>
}
