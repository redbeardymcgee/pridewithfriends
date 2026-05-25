import { createFileRoute, Link } from "@tanstack/react-router"
import { TutorialText } from "#/components/typography"

export const Route = createFileRoute("/docs/bot-setup")({
  component: BotSetup,
})

function BotSetup() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-500 text-xl">
        <Link to="/docs/bot-setup">Chat commands</Link>
      </h2>
      <p>
        A <TutorialText>Timer</TutorialText> message to promote the event during
        the week:
      </p>
      <br />
      <p>
        Join us from June 27-29 for #PrideWithFriends 2025, a coop themed
        community fundraiser supporting the Trevor Project!
      </p>
      <br />
      <h3 className="text-cyan-200 text-lg">
        <Link hash="streamelements" to="/docs/bot-setup">
          For <strong>StreamElements</strong>:
        </Link>
      </h3>
      <ol className="list-decimal pl-10">
        <li>Login to your StreamElements Dashboard</li>
        <li>
          On the left sidebar, click <TutorialText>BOT</TutorialText> to expand
          the section
        </li>
        <li>
          Click <TutorialText>Timers</TutorialText>{" "}
        </li>
        <li>
          Click <TutorialText>ADD NEW TIMER</TutorialText>
        </li>
        <li>
          Name the command (<code>pwf-timer</code>, for example)
        </li>
        <li>Paste the above message, and edit to your needs</li>
        <li>
          Set the online and offline intervals to values that suit your stream's
          chat activity without spamming the chatbox (usually about 15 minutes
          is fine)
        </li>
        <li>Turn the chat lines down to zero</li>
      </ol>
      <br />
      <h3 className="text-cyan-200 text-lg">
        <Link hash="nightbot" to="/docs/bot-setup">
          For <strong>Nightbot</strong>:
        </Link>
      </h3>
      <ol className="list-decimal pl-10">
        <li>Login to your Nightbot Dashboard</li>
        <li>
          On the left sidebar, click <TutorialText>Timers</TutorialText>
        </li>
        <li>
          Click <TutorialText>+ Add</TutorialText>
        </li>
        <li>
          Name the command (<code>pwf-timer</code>, for example)
        </li>
        <li>Paste the above message, and edit to your needs</li>
        <li>
          Set the interval to a value that suits your stream's chat activity
          without spamming the chatbox (usually about 15 minutes is fine)
        </li>
        <li>Turn the chat lines down to zero</li>
      </ol>
      <br />
      <h3 className="text-cyan-200 text-lg">
        <Link hash="streamlabs" to="/docs/bot-setup">
          For <strong>Streamlabs</strong>:
        </Link>
      </h3>
      <ol className="list-decimal pl-10">
        <li>Login to your Streamlabs Dashboard</li>
        <li>
          On the left sidebar, click <TutorialText>Cloudbot</TutorialText>
        </li>
        <li>
          Click <TutorialText>Add Timer</TutorialText>
        </li>
        <li>
          Name the command (<code>pwf-timer</code>, for example)
        </li>
        <li>Paste the above message, and edit to your needs</li>
        <li>
          Set the interval to a value that suits your stream's chat activity
          without spamming the chatbox (usually about 15 minutes is fine)
        </li>
        <li>
          Turn the <TutorialText>Line Minimum</TutorialText> down to zero
        </li>
      </ol>
      <br />
      <p>
        For commands that chat can trigger on demand, follow the same
        instructions as above but click on <TutorialText>Commands</TutorialText>{" "}
        instead of <TutorialText>Timers</TutorialText> and proceed as usual.
      </p>
    </div>
  )
}
