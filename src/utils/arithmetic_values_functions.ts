type DataType = number[];

enum NumberConstants {
  FIXED_VALUE = 6,
  ZERO = 0,
  ONE = 1,
  TWO = 2,
}

export const getArithmeticMean = (data: DataType): string => {
  const START_VALUE = 0;
  return (
    data.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      START_VALUE,
    ) / data.length
  ).toFixed(NumberConstants.FIXED_VALUE);
};

export const getMedian = (data: DataType): string => {
  const values = [...data];
  const v = values.sort((a, b) => a - b);
  const mid = Math.floor(v.length / NumberConstants.TWO);
  return (
    v.length % NumberConstants.TWO !== NumberConstants.ZERO
      ? v[mid]
      : (v[mid - NumberConstants.ONE] + v[mid]) / NumberConstants.TWO
  ).toFixed(NumberConstants.FIXED_VALUE);
};

export const getStandardDeviation = (data: DataType): string => {
  const mean = data.reduce((s, n) => s + n) / data.length;
  const variance =
    data.reduce((s, n) => s + (n - mean) ** NumberConstants.TWO, NumberConstants.ZERO) /
    (data.length - NumberConstants.ONE);
  return Math.sqrt(variance).toFixed(NumberConstants.FIXED_VALUE);
};

export const getMode = (data: DataType): string => {
  const numMapping: { [key: string]: number } = {};
  let greatestFreq = 0;
  let mode = 0;
  data.forEach(number => {
    numMapping[number] =
      (numMapping[number] || NumberConstants.ZERO) + NumberConstants.ONE;

    if (greatestFreq < numMapping[number]) {
      greatestFreq = numMapping[number];
      mode = number;
    }
  });
  return mode.toFixed(NumberConstants.FIXED_VALUE);
};
