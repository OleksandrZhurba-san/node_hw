import { logMsg, readLog } from "./logger";

const file: string = "./info.log";

for (let i = 0; i < 5; ++i) {
  logMsg(`This is our log line #${i}\n`);
}
readLog(file);

