export enum Direction {
  FORWARD,
  DOWN,
  UP,
}

export default class Command {
  direction: Direction;
  value: number;

  constructor(direction: string, value: number) {
    this.direction = Direction[direction];
    this.value = value;
  }
}
