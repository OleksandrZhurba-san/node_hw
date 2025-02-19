const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    }
    return acc;
  }, 0);
}

const myArr: number[] = [5, 1, 23, 4, 52, 123];
console.log(sumEvenNumbers(myArr));

interface IStringToBooleanFunction {
  (str: string): boolean;
}

const isStringEmpty: IStringToBooleanFunction = (str) => {
  return str === "";
}

console.log(isStringEmpty("asdf"));

type CompareStrings = {
  (str1: string, str2: string): boolean;
}

const isStringEqual: CompareStrings = (str1, str2) => {
  return str1.length === str2.length;
}

console.log(isStringEqual("asdf", "asdf"));

const getLastElement = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
}

console.log(getLastElement([3, 12, 3, 4, 5]));
console.log(getLastElement(["asdf", "asdf", "fghd"]));

const makeTriple = <T>(a: T, b: T, c: T): T[] => [a, b, c];

console.log(makeTriple(1, 2, 3));
console.log(makeTriple("a", "b", "c"));
console.log(makeTriple(true, false, true));
