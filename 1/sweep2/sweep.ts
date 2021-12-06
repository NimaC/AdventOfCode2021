import sweep from "../sweep1/sweep";

export default function (sweeps: number[]): number {
  const slidingWindowAggregates = getAggregates(sweeps);
  return sweep(slidingWindowAggregates);
}

function getAggregates(sweeps: number[]): number[] {
  const slidingWindowAggregates: number[] = [];
  for (let i = 1; i < sweeps.length - 1; i++) {
    const curAggregate = sweeps[i - 1] + sweeps[i] + sweeps[i + 1];
    slidingWindowAggregates.push(curAggregate);
  }
  return slidingWindowAggregates;
}
