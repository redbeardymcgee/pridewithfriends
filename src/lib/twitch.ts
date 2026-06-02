import { ApiClient } from "@twurple/api"
import { AppTokenAuthProvider } from "@twurple/auth"

function getTwitchClient(): ApiClient {
  const clientId = process.env.TWITCH_CLIENT_ID
  const clientSecret = process.env.TWITCH_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error(
      "Missing Twitch API credentials. Check the .env, .env.development, .env.local and .env.production files.",
    )
  }

  const authProvider = new AppTokenAuthProvider(clientId, clientSecret)
  return new ApiClient({ authProvider })
}

export async function getTwitchUsersByNames(names: string[]) {
  const apiClient = getTwitchClient()
  return await apiClient.users.getUsersByNames(names)
}
