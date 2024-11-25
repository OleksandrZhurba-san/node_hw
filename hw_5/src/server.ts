import http, { IncomingMessage, ServerResponse } from "http";
import "dotenv/config";
import { appendFile } from "node:fs";

const PORT: string = process.env.PORT || "3000";

function logMessage(message: string, logType: "info" | "error") {
  const logFile = logType === "info" ? "info.log" : "errors.log";
  appendFile(logFile, message, (error) => {
    if (error) {
      console.error(`Failed to write to ${logFile}:`, error);
    } else if (logType === "error") {
      console.error("An error occurred. Check errors.log for details.");
    }
  });
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  try {
    res.setHeader("Content-Type", "text-plain");
    if (req.method === "GET" && req.url === "/") {
      res.statusCode = 200;
      const infoMessage =
        `${new Date().toISOString()} - Info: Successful response for ${req.method} ${req.url}\n`;
      logMessage(infoMessage, "info");
      res.end("This is your home page")
    } else if (req.method === "PUT" && req.url === "/") {
      res.statusCode = 200;
      const infoMessage =
        `${new Date().toISOString()} - Info: Successful response for ${req.method} ${req.url}\n`;
      logMessage(infoMessage, "info");
      res.end("This is your PUT method")
    } else if (req.method === "DELETE" && req.url === "/") {
      res.statusCode = 200;
      const infoMessage =
        `${new Date().toISOString()} - Info: Successful response for ${req.method} ${req.url}\n`;
      logMessage(infoMessage, "info");
      res.end("This is your DELETE method")
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  } catch (err) {
    const errorMessages = `${new Date().toISOString()} - Error: ${err}\n`
    logMessage(errorMessages, "error")
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
})

