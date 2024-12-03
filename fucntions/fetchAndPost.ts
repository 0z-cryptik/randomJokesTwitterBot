import { API_Response } from "../types/responseType";
import { tweet } from "./trySumn";

export const fetchAndPost = async () => {
  const response = await fetch(
    "https://randomjokesapi.onrender.com/getJoke"
  );
  const responseJson: API_Response = await response.json();

  if (responseJson.Ok) {
    tweet(responseJson.Joke);
  }
};
