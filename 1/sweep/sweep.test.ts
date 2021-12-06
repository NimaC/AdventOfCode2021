import { sweep } from "./sweep";

describe("Sonar Sweep Functionality", () => {
  it("empty case", () => {
    const sweepInput = [];
    expect(sweep(sweepInput)).toBe(0);
  });

  it("single item", () => {
    const sweepInput = [1];
    expect(sweep(sweepInput)).toBe(0);
  });

  it("basic case", () => {
    const sweepInput = [1, 2, 3];
    expect(sweep(sweepInput)).toBe(2);
  });
});
