import { fetchAndPost } from "./fucntions/fetchAndPost";
import { CronJob } from "cron";

const job = new CronJob("0 */8 * * *", fetchAndPost);

job.start();
