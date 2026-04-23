import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/organizers")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://twitch.tv/asukii">asukii</a>
        </li>
        <li>
          <a href="https://twitch.tv/kaosmark2">kaosmark2</a>
        </li>
        <li>
          <a href="https://twitch/tv/hellofmira">mira newton</a>
        </li>
        <li>
          <a href="https://twitch.tv/nicksts">Nicky</a>
        </li>
        <li>
          <a href="https://twitch.tv/Transgentrified">Transgentrified</a>
        </li>
        <li>
          <a href="https://twitch.tv/panacea108">panacea108</a>
        </li>
        <li>
          <a href="https://twitch.tv/vmService">vmService</a>
        </li>
        <li>
          <a href="https://twitch.tv/redbeardymcgee">Redbeardy_McGee</a>
        </li>
      </ul>
    </div>
  )
}
