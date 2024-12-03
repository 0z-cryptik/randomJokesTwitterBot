import { twitterClient } from "../twitterStuff/twitter_client.js";

export const tweet = async (text: string) => {
  try {
    await twitterClient.v2.tweet(text);
    console.log(`posted ${text}`);
  } catch (e) {
    console.error(e);
  }
};
