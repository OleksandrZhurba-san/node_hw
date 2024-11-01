import { appendFile, readFile} from "fs";

export function logMsg(msg: string) {
  appendFile("./info.log", msg, (err) => {
    if (err) {
      console.log(err)
      return;
    }
  })
}
export function readLog(path: string){
  readFile(path, "utf8", (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    console.log(data);
  })
}
