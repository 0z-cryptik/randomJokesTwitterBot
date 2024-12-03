import { fetchAndPost } from "./fucntions/fetchAndPost";
import { VercelResponse } from '@vercel/node';

const handler = async (_, res: VercelResponse) => {
  try {
    await fetchAndPost();
    res.status(200).send("Bot executed successfully!");
  } catch (error) {
    console.error("Error executing bot:", error);
    res.status(500).send("Bot execution failed.");
  }
};

export default handler;
