import { Link } from "@tanstack/react-router"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-(--line) border-t px-4 pt-10 pb-14 text-(--sea-ink-soft)">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} Pride With Friends. All rights reserved.
        </p>
        <p>
          <Link to="/organizers">Organizers</Link>
        </p>
        <p className="island-kicker m-0">Built with TanStack Start</p>
      </div>
    </footer>
  )
}
