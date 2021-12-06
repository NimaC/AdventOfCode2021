import { textFileToStringLines } from "../utility/utility";
import sweep from "./sweep2/sweep";

function main() {
  const pathToInput = "1/input.txt";
  const input = textFileToStringLines(pathToInput).map((line) => {
    return parseInt(line, 10);
  });
  const result = sweep(input);
  console.log(result);
}

main();
