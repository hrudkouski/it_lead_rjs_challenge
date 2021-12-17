import {
  getArithmeticMean,
  getMedian,
  getMode,
  getStandardDeviation,
} from 'utils/arithmetic_values_functions';

let testData: number[];

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
});

describe('getArithmeticMean', () => {
  it('should return the arithmetic mean number', () => {
    expect(getArithmeticMean(testData)).toBe('5.500000');
  });
});

describe('getMedian', () => {
  it('should return the median number', () => {
    expect(getMedian(testData)).toBe('5.500000');
  });
});

describe('getStandardDeviation', () => {
  it('should return the standard deviation', () => {
    expect(getStandardDeviation(testData)).toBe('3.027650');
  });
});

describe('getMode', () => {
  it('should return the mode', () => {
    expect(getMode(testData)).toBe('1.000000');
  });
});
