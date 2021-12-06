import { textFileToNumbers } from "../utility/utility";
import { sweep } from "./sweep/sweep";

function main() {
  const pathToInput = "1/input.txt";
  const input = textFileToNumbers(pathToInput);
  const result = sweep(input);
  console.log(result);
}

main();
