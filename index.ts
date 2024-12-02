import { config } from "dotenv";
import { twitterClient } from "./twitter_client";

config();

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Hello world");
  } catch (e) {
    console.error(e);
  }
};

tweet();
