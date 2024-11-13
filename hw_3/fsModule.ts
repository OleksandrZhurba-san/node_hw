import { mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import * as readLine from "node:readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let createdDir: string | undefined;

async function createDir(folderName: string): Promise<string | undefined> {
  try {
    const projectFolder: string = join(__dirname, folderName);
    const dirCreation = await mkdir(projectFolder, { recursive: true });
    console.log("Directory has been create: ", dirCreation);
    return projectFolder;
  } catch (error) {
    console.error("Failed to create folder", error);
    return undefined;
  }
}

async function rmDir(folder: string | undefined): Promise<void> {
  if (!folder) {
    console.log("No directory to delete!")
    return;
  }
  try {
    await rm(folder, { recursive: true })
    console.log(`${folder} successfully has been deleted`);
  } catch (error) {
    console.log(`Error while removing ${folder}`)
  }
}

async function createFile(fileName: string) {
  try {
    await writeFile(fileName, "Welcome to Node.js");
  } catch (error) {
    console.log(`failed to create file ${fileName}`, error)
  }
}
async function readFromFile(fileName: string) {
  try {
    const data = await readFile(fileName, { encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

rl.question("1. Create folder\n2. Create File\nEnter number of your option: ", (answer: string) => {

  if (answer === "1") {
    rl.question("enter the name of new folder: ", (folderName: string) => {
      createDir(folderName).then((data) => {
        createdDir = data;

        if (createdDir) {
          rl.question("Do you want to delte folder? (y)es/(n)o : ", (answer: string) => {
            if (answer.toLowerCase() === "y") {
              rmDir(createdDir);
              rl.close();
            } else {
              console.log("Thx for your time!")
              rl.close();
            }
          })
        } else {
          rl.close();
        }
      })
        .catch((error) => {
          console.log(error);
          rl.close();
        })
    });
  } else if (answer === "2") {
    rl.question("enter file name: ", (fileName: string) => {
      createFile(fileName).then(() => {
        readFromFile(fileName).then(() => rl.close());
      })
    });
  }
})


