import { textFileToStringLines } from "../../utility/utility";
import { diagnose } from "./diagnose";

describe("Diagnose Functionality", () => {
  it("test case", () => {
    const pathToInput = "3/exampleInput.txt";
    const inputBinaries = textFileToStringLines(pathToInput);
    const result = diagnose(inputBinaries);
    expect(result).toBe(198);
  });
});
