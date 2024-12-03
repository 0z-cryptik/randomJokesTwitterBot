import { fetchAndPost } from "./fucntions/fetchAndPost.js";
import express, { Express, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", async (_, res: Response) => {
  try {
    await fetchAndPost();
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
