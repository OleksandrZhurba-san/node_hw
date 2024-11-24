import { readFile, writeFile } from "node:fs/promises"
import "dotenv/config"
import readLine from "node:readline"

const fileName: string = process.env.FILENAME || "myfile.txt";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function readFromFile(fileName: string): Promise<string | undefined> {
  try {
    const data = await readFile(fileName, { encoding: "utf-8" });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function createFile(fileName: string, data: string): Promise<void> {
  try {
    await writeFile(fileName, data);
  } catch (error) {
    console.log(`failed to create file ${fileName}`, error)
  }
}


rl.question("Input text: ", async (data: string) => {
  try {
    createFile(fileName, data)

    console.log(`File ${fileName} has been created`);
    const fileContent = await readFromFile(fileName);
    console.log("File output: ", fileContent);
  } catch (err) {
    console.error("An error: ", err)
  } finally {
    rl.close();
  }
})
