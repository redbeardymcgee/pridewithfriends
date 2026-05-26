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

export function PrideGradient({
  children,
  className = "inline-flex",
  animationSpeed = 8,
  showBorder = false,
  direction = "vertical",
  pauseOnHover = false,
  yoyo = false,
}: GradientTextProps) {
  return (
    <GradientText
      animationSpeed={animationSpeed}
      className={className}
      // NOTE: Based on Gilbert Baker flag
      colors={[
        "#FF6599",
        "#FF0000",
        "#FF8E00",
        "#FFFF00",
        "#008E00",
        "#00C0C0",
        "#400098",
        "#8E008E",
      ]}
      direction={direction}
      pauseOnHover={pauseOnHover}
      showBorder={showBorder}
      yoyo={yoyo}
    >
      {children}
    </GradientText>
  )
}
