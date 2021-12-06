import { readFileSync } from "fs";

// expects number on each line in a txt file
function textFileToStringLines(filePath: string): string[] {
  const fileContent = readFileSync(filePath, "utf8");
  return fileContent.trim().split("\n");
}

export { textFileToStringLines as textFileToStringLines };
