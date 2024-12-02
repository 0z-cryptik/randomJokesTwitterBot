import { twitterClient } from "../twitterStuff/twitter_client";

export const tweet = async (text: string) => {
  try {
    await twitterClient.v2.tweet(text);
  } catch (e) {
    console.error(e);
  }
};