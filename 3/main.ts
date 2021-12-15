import { textFileToStringLines } from "../utility/utility"
import { diagnose } from "./diagnose/diagnose";

function main() {
  const pathToInput = "3/input.txt";
  const input = textFileToStringLines(pathToInput)
  const result = diagnose(input);
  console.log(result);
}

main();
