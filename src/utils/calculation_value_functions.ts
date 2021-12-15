type DataType = number[];

export const getArithmeticMean = (data: DataType): string => {
  const START_VALUE = 0;
  const FIXED_VALUE = 6;

  return (
    data.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      START_VALUE,
    ) / data.length
  ).toFixed(FIXED_VALUE);
};

export const getMedian = (data: DataType): string => {
  const ZERO = 0;
  const ONE = 1;
  const TWO = 2;
  const FIXED_VALUE = 6;

  const values = [...data];
  const v = values.sort((a, b) => a - b);
  const mid = Math.floor(v.length / TWO);
  return (v.length % TWO !== ZERO ? v[mid] : (v[mid - ONE] + v[mid]) / TWO).toFixed(
    FIXED_VALUE,
  );
};

export const getStandardDeviation = (data: DataType): string => {
  const ZERO = 0;
  const ONE = 1;
  const TWO = 2;
  const FIXED_VALUE = 6;

  const mean = data.reduce((s, n) => s + n) / data.length;
  const variance =
    data.reduce((s, n) => s + (n - mean) ** TWO, ZERO) / (data.length - ONE);
  return Math.sqrt(variance).toFixed(FIXED_VALUE);
};

export const getMode = (data: DataType): string => {
  const ZERO = 0;
  const ONE = 1;
  const SIX = 6;
  const numMapping: { [key: string]: number } = {};
  let greatestFreq = 0;
  let mode = 0;
  data.forEach(number => {
    numMapping[number] = (numMapping[number] || ZERO) + ONE;

    if (greatestFreq < numMapping[number]) {
      greatestFreq = numMapping[number];
      mode = number;
    }
  });
  return mode.toFixed(SIX);
};
