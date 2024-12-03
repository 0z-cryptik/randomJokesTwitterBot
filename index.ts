import { fetchAndPost } from "./fucntions/fetchAndPost.js";
import { CronJob } from "cron";

const job = new CronJob("0 */8 * * *", fetchAndPost);

job.start();
