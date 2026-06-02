import { ApiClient } from "@twurple/api"
import { AppTokenAuthProvider } from "@twurple/auth"

const clientId = process.env.TWITCH_CLIENT_ID
const clientSecret = process.env.TWITCH_CLIENT_SECRET

if (!clientId || !clientSecret) {
  throw new Error(
    "Missing Twitch API credentials. Check the .env, .env.development, .env.local and .env.production files.",
  )
}

const twitchClient = new ApiClient({
  authProvider: new AppTokenAuthProvider(clientId, clientSecret),
})

export async function getTwitchUsersByNames(names: string[]) {
  return await twitchClient.users.getUsersByNames(names)
}
