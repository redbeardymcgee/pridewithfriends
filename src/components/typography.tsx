import { cn } from "#/lib/utils"

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
