import { cn } from "#/lib/utils"

export function DocsH2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-cyan-300 text-xl">{children}</h2>
}

export function DocsH3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-cyan-200 text-lg">{children}</h3>
}

export function TutorialText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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

export function ExampleText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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

export function WarningText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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
