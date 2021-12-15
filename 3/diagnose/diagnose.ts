export function diagnose(binaries: string[]): number {
  const positionCount: number[] = Array.from(
    { length: binaries[0].length },
    () => 0
  );
  binaries.forEach((binary) => {
    [...binary].forEach((curVal, index) => {
      positionCount[index] += curVal === "1" ? 1 : 0;
    });
  });
  const halfPoint = Math.round(binaries.length / 2)
  const gamma = positionCount.map((value, index) => {
    return value >= halfPoint ? 1 : 0;
  });
  const epsilon = gamma.map((v) => v === 1 ? 0 : 1);
  return binaryArrayToDecimal(gamma) * binaryArrayToDecimal(epsilon)
}

function binaryArrayToDecimal(binaryArray: (0 | 1)[]): number {
  return parseInt(binaryArray.join(''), 2);
}
