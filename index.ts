import { fetchAndPost } from "./fucntions/fetchAndPost.js";
import { CronJob } from "cron";

const job = new CronJob("*/10 * * * *", fetchAndPost);

job.start();
