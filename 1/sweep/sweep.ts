function sweep(sweeps: number[]): number {
  //return the number of elements that are bigger than the previous element
  let result = 0;
  for (let i = 1; i < sweeps.length; i++) {
    if (sweeps[i] > sweeps[i - 1]) {
      result += 1;
    }
  }
  return result;
}

export { sweep };
