import Command, { Direction } from "../command";
import { textFileToStringLines } from "../../utility/utility";

interface IPosition {
  horizontal: number;
  depth: number;
  aim: number;
}

export function dive(commands: Command[]): number {
  let position = { horizontal: 0, depth: 0, aim: 0 } as IPosition;
  commands.forEach((command) => {
    switch (command.direction) {
      case Direction.UP:
        position.aim -= command.value;
        break;
      case Direction.DOWN:
        position.aim += command.value;
        break;
      case Direction.FORWARD:
        position.horizontal += command.value;
        position.depth += position.aim * command.value;
        break;
      default:
        break;
    }
    return position;
  }, position);

  return position.depth * position.horizontal;
}

export function inputStringToCommands(pathToInput: string): Command[] {
  return textFileToStringLines(pathToInput).map((line) => {
    const [directionString, valueString] = line.split(" ");
    const value = parseInt(valueString);
    return new Command(directionString.toUpperCase(), value);
  });
}
