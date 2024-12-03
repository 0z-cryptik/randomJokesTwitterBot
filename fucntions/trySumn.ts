import { config } from "dotenv";
import { myOauth } from "../Oauth/myOauth.js";

config();

const API_URL = "https://api.x.com/1.1/statuses/update.json";

const accessToken = process.env.ACCESS_TOKEN;
const accessTokenSecret = process.env.ACCESS_SECRET;

export const tweet = async (tweetText: string) => {
  try {
    const data = new FormData();
    data.append("status", tweetText);

    const requestData = {
      url: API_URL,
      method: "POST"
    };

    const authHeader = myOauth.toHeader(
      myOauth.authorize(requestData, {
        key: accessToken,
        secret: accessTokenSecret
      })
    );

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...authHeader
      },
      body: data
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error posting tweet: ${errorData}`);
    }

    const responseData = await response.json();
    console.log("Tweet posted successfully:", responseData);
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};
