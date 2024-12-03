import { config } from "dotenv";
import { myOauth } from "../Oauth/myOauth.js";

config();

const API_URL = "https://api.x.com/2/tweets";

const accessToken = process.env.ACCESS_TOKEN;
const accessTokenSecret = process.env.ACCESS_SECRET;

export const tweet = async (tweetText: string) => {
  try {
    const requestData = {
      text: tweetText
    };

    const authHeader = myOauth.toHeader(
      myOauth.authorize({url: API_URL, method: "POST"}, {
        key: accessToken,
        secret: accessTokenSecret
      })
    );

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...authHeader,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(errorData);
    }

    const responseData = await response.json();
    console.log("Tweet posted successfully:", responseData);
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};
