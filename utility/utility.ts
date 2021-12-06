import { readFileSync } from "fs";

// expects number on each line in a txt file
function textFileToNumbers(filePath: string): number[] {
  const fileContent = readFileSync(filePath, "utf8");
  return fileContent
    .trim()
    .split("\n")
    .map((line) => {
      return parseInt(line, 10);
    });
}

export { textFileToNumbers };
