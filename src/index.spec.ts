import { countSmile, findWhichIsOdd, shufflings } from "./index";

describe("shufflings function", () => {
  it("should return all permutations of a string", () => {
    const input = "abc";
    const expectedOutput = ["abc", "acb", "bac", "bca", "cab", "cba"];
    const result = shufflings(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should return the input string if it has only one character", () => {
    const input = "a";
    const expectedOutput = ["a"];
    const result = shufflings(input);
    expect(result).toEqual(expectedOutput);
  });
});

describe("findWhichIsOdd function", () => {
  it("should return the odd number in an array with one odd number", () => {
    const numbers = [0, 1, 0, 1, 0];
    const expectedOutput = 0;
    const result = findWhichIsOdd(numbers);
    expect(result).toBe(expectedOutput);
  });

  it("should return 0 if all numbers have an even count", () => {
    const numbers = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
    const expectedOutput = 4;
    const result = findWhichIsOdd(numbers);
    expect(result).toBe(expectedOutput);
  });

  it("should return the odd number in an array with multiple odd numbers", () => {
    const numbers = [1, 1, 2, 2, 3, 3, 4];
    const expectedOutput = 4;
    const result = findWhichIsOdd(numbers);
    expect(result).toBe(expectedOutput);
  });
});

describe("countSmile function", () => {
  it("should return the count of valid smiles in an array", () => {
    const smiles = [":)", ";(", ";}", ":-D"];
    const expectedOutput = 2; // 4 valid smiles: :) ;-) :D ;-D
    const result = countSmile(smiles);
    expect(result).toBe(expectedOutput);
  });

  it("should return 0 if there are no valid smiles in the array", () => {
    const smiles = [';]', ':[', ';*', ':$', ';-D'];
    const expectedOutput = 1;
    const result = countSmile(smiles);
    expect(result).toBe(expectedOutput);
  });

  it("should handle an empty array", () => {
    const smiles: string[] = [];
    const expectedOutput = 0;
    const result = countSmile(smiles);
    expect(result).toBe(expectedOutput);
  });

  // Add more test cases as needed
});
