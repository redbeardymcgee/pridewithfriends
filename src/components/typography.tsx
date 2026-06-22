import { cn } from "#/lib/utils"

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
  return (
    <span className={cn("pride-gradient text-shadow-none", className)}>
      {children}
    </span>
  )
}

export function ContactHandle({ children, className }: TextProps) {
  return (
    <span
      className={cn(
        "rounded-full bg-primary/10 px-1 py-1 font-medium text-primary text-xs",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function ProseText({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "m-0 max-w-3xl text-(--sea-ink-soft) text-base text-shadow-blue-800 text-shadow-sm leading-relaxed",
        className,
      )}
    >
      {children}
    </p>
  )
}
