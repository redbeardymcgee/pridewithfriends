import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/setup")({
  component: RouteComponent,
})

function TutorialText({ text }: { text: string }) {
  return <strong className="text-red-300">{text}</strong>
}

function ExampleText({ text }: { text: string }) {
  return <em className="text-orange-300">{text}</em>
}

function CampaignSetup() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-300 text-xl" id="campaign-setup">
        <Link hash="campaign-setup" to=".">
          Campaign Setup
        </Link>
      </h2>
      <p>
        If you are a streamer and want to have your own individual donation
        tracker, overlay, incentives and milestones, follow these instructions.
      </p>
      <br />
      <ol className="list-decimal pl-10">
        <li>
          Click {/* FIXME: Update link for new campaign */}
          <a
            href="https://tilt.fyi/mqTk1CP3dQ"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>{" "}
          (<strong className="text-red-400">WARNING:</strong>
          <em> This is not updated yet</em>)
        </li>
        <li>
          Click <TutorialText text="Support this campaign" />
        </li>
        <li>
          Fill in the <TutorialText text="Campaign Name" /> (e.g{" "}
          <ExampleText text="Pride With Friends 2026 [YOURNAME]" />)
        </li>
        <li>
          Add a description (e.g.{" "}
          <ExampleText
            text="[YOURNAME] climbs spires and slays hearts with friends to support
            the Trevor Project!"
          />
          )
        </li>
        <li>Link your Twitch account name or skip</li>
        <li>
          {/* TODO: Create PWF explainer/invite video? */}
          Skip the Youtube video
        </li>
        <li>Skip Image</li>
        <li>
          Set your own campaign goal! $100 is the minimum on Tiltify, but you
          are under zero pressure to reach it at all. Every penny counts towards
          supporting a good cause, and combines with the whole campaign!
        </li>
        <li>
          {" "}
          Click <TutorialText text="Create Campaign" />
        </li>
      </ol>
      <br />
      <p>
        You will now be at the Campaign Dashboard for Pride With Friends. This
        is where you edit any additional information. You do not have to change
        or add anything here, but it is the place where you configure donation
        incentives and milestones. After setting those up, you click the blue
        publish button and start adding the campaign and donate urls to your
        stream panels and bot commands! You will also find the overlays section,
        for adding your own donation tracker and alerts to your stream.
      </p>
    </div>
  )
}

function OverlaySetup() {
  return (
    <div className="m-5" id="overlay">
      <h2 className="text-cyan-300 text-xl" id="overlay-setup">
        <Link hash="overlay-setup" to=".">
          Overlay Setup
        </Link>
      </h2>
      <p>
        Once you have completed the above steps, setup the tracker and overlay.
      </p>
      <br />
      <ol className="list-decimal pl-10">
        <li>
          From the published campaign dashboard, click{" "}
          <TutorialText text="Overlays" /> on the top bar
        </li>
        <li>Create new overlay</li>
        <li>
          Choose <TutorialText text="Blank Slate" /> to start from an empty
          overlay
        </li>
        <li>
          Choose <TutorialText text="The Default" /> to start with a basic
          overlay that already includes the <TutorialText text="Alert Box" />{" "}
          and <TutorialText text="Event List" /> and a QR code for mobile users
        </li>
        <li>
          Use the editor to add and remove widgets, edit colors, add sounds,
          move them around and more
        </li>
        <li>Save the changes with the button above the overlay preview</li>
        <li>Copy the overlay URL</li>
        <li>
          Add the overlay as a <TutorialText text="Browser Source" /> in OBS
        </li>
      </ol>
      <br />
      <p>
        You can edit this overlay on this page at any time, even while
        broadcasting. If you want to control the placement of each part of your
        overlay in OBS:
      </p>
      <br />
      <ul className="list-disc pl-10">
        <li>
          Use the steps above, starting with the{" "}
          <TutorialText text="Blank Slate" />.
        </li>
        <li>
          Add <strong>one</strong> overlay element, such as the{" "}
          <TutorialText text="Alert Box" /> or{" "}
          <TutorialText text="Event List" />
        </li>
        <li>Edit it to your needs</li>
        <li>
          Save it, copy the overlay url, and add it as a browser source to OBS
        </li>
        <li>
          Repeat for <strong>each</strong> overlay element
        </li>
        <li>
          Now you can control each element of the overlay individually in OBS
        </li>
      </ul>
    </div>
  )
}

function BotSetup() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-500 text-xl" id="bot-setup">
        <Link hash="bot-setup" to=".">
          Bot Setup
        </Link>
      </h2>
      <p>
        A <TutorialText text="Timer" /> message to promote the event during the
        week:
      </p>
      <br />
      <p>
        Join us from June 27-29 for #PrideWithFriends 2025, a coop themed
        community fundraiser supporting the Trevor Project!
      </p>
      <br />
      <p>
        Do you use a different bot? Let us know and we will write instructions!
      </p>
      <br />
      <h3 className="text-cyan-200 text-lg" id="streamelements">
        <Link hash="streamelements" to=".">
          For <strong>StreamElements</strong>:
        </Link>
      </h3>
      <ol className="list-decimal pl-10">
        <li>Login to your StreamElements Dashboard</li>
        <li>
          On the left sidebar, click <TutorialText text="BOT" /> to expand the
          section
        </li>
        <li>
          Click <TutorialText text="Timers" />{" "}
        </li>
        <li>
          Click <TutorialText text="ADD NEW TIMER" />
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
      <h3 className="text-cyan-200 text-lg" id="nightbot">
        <Link hash="nightbot" to=".">
          For <strong>Nightbot</strong>:
        </Link>
      </h3>
      <ol className="list-decimal pl-10">
        <li>Login to your Nightbot Dashboard</li>
        <li>
          On the left sidebar, click <TutorialText text="Timers" />
        </li>
        <li>
          Click <TutorialText text="+ Add" />
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
      <h3 className="text-cyan-200 text-lg" id="streamlabs">
        <Link hash="streamlabs" to=".">
          For <strong>Streamlabs</strong>:
        </Link>
      </h3>
      <ol className="list-decimal pl-10">
        <li>Login to your Streamlabs Dashboard</li>
        <li>
          On the left sidebar, click <TutorialText text="Cloudbot" />
        </li>
        <li>
          Click <TutorialText text="Add Timer" />
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
          Turn the <TutorialText text="Line Minimum" /> down to zero
        </li>
      </ol>
      <br />
      <p>
        For commands that chat can trigger on demand, follow the same
        instructions as above but click on <TutorialText text="Commands" />{" "}
        instead of <TutorialText text="Timers" /> and proceed as usual.
      </p>
    </div>
  )
}

function LinkSetup() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-300 text-xl" id="donation-link-setup">
        <Link hash="donation-link-setup" to=".">
          Set up your Donation Links!
        </Link>
      </h2>
      <ol className="list-decimal pl-10">
        <li>
          Visit your campaign dashboard by at{" "}
          <a
            href="https://app.tiltify.com/hub"
            rel="noreferrer"
            target="_blank"
          >
            https://app.tiltify.com/hub
          </a>{" "}
          or clicking the menu on the top right of the Tiltify page.
        </li>
        <li>
          Click the campaign you created earlier{" "}
          <ExampleText text="Pride With Friends 2025 [YOURNAME]" />
        </li>
        <li>
          Use the share or copy buttons to get a valid link
          <ul className="list-inside list-disc pl-10">
            <li>
              <TutorialText text="Share" />{" "}
            </li>
            <li>
              <TutorialText text="Copy Donate URL" />
            </li>
            <li>
              <TutorialText text="Copy Campaign URL" />.
            </li>
          </ul>
        </li>
        <br />
        <li>
          Using your Twitch channel chatbot of choice, add or edit your{" "}
          <code>!donate</code>/<code>!pwf</code>/<code>!pride</code> command to
          include the donate URL copied from the <TutorialText text="Share" />{" "}
          panel.
        </li>
      </ol>
    </div>
  )
}

function PanelSetup() {
  return (
    <div>
      <h2 className="text-cyan-300 text-xl" id="donation-panel">
        Donation Panel
      </h2>
      <ol className="list-disc pl-10">
        <li>
          From the Twitch homepage, click your profile icon in the top right to
          open the options menu.
        </li>
        <li>
          Click <TutorialText text="Channel" /> to go to your Twitch channel.
        </li>
        <li>
          Click <TutorialText text="About" /> under the video player
        </li>
        <li>
          Click <TutorialText text="Edit Panel" /> under{" "}
          <TutorialText text="About Me" />
        </li>
        <li>Click the large gray plus symbol</li>
        <li>Click add a text or image panel</li>
        <li>
          Click <TutorialText text="Add Image" />
        </li>
        <li>TODO: PUT IMAGE FOR DOWNLOAD HERE</li>
        <li>
          Fill out the description with a message similar to this, edited to
          your liking:
          <p>
            <ExampleText
              text="Donate to the Trevor Project directly by clicking this panel!
                  Donations are non-refundable, but deeply appreciated!"
            />
          </p>
        </li>
        <li>
          Fill in the <TutorialText text="Image Links to" /> box with your{" "}
          <Link hash="donation-link-setup" to=".">
            donation URL
          </Link>
        </li>
        <li>
          Click <TutorialText text="Submit" /> and you’re done!
        </li>
      </ol>
    </div>
  )
}

function CampaignTracker() {
  return (
    <div className="m-5">
      <h2 className="text-cyan-300 text-xl" id="campaign-tracker">
        <Link hash="campaign-tracker" to=".">
          Campaign Tracker
        </Link>
      </h2>
      {/* TODO: Provide more direct instructions */}
      <p>
        For those of you who <strong>are</strong> streaming, but do not want to
        implement your own individual campaign and overlays, you may use this
        overlay as a <TutorialText text="Browser Source" /> in OBS! Just paste
        this into the <TutorialText text="Browser Source" /> and set it to{" "}
        <code>1920x1080</code> resolution
      </p>
      <br />
      <a
        href="https://overlays.tiltify.com/1IZ_AXFieYk0RtJOGKsXRJrXD4m7BgcS"
        rel="noreferrer"
        target="_blank"
      >
        Overlay
      </a>{" "}
      <span className="text-red-500">WARNING:</span> Old link!
      <br />
      <br />
      <p>
        This overlay shows the total progress of the{" "}
        <strong>entire campaign</strong>. It is <strong>not suitable</strong>{" "}
        for streamers who have configured their individual campaign and overlays
        for the event. For the rest of you who are streaming for the event but
        not setting up your own overlays, you can use this to let your viewers
        track the total progress live as they hang out with you.
      </p>
    </div>
  )
}

function RouteComponent() {
  return (
    <div>
      <CampaignSetup />
      <br />
      <OverlaySetup />
      <br />
      <BotSetup />
      <br />
      <LinkSetup />
      <br />
      <PanelSetup />
      <br />
      <CampaignTracker />
    </div>
  )
}
