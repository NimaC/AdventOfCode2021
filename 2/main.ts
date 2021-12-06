import { dive, inputStringToCommands } from "./dive2/dive";

function main() {
  const pathToInput = "2/input.txt";
  const inputCommands = inputStringToCommands(pathToInput);
  const result = dive(inputCommands);
  console.log(result);
}

main();
