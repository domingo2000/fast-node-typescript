/**
 * @param {number} a number
 * @param {number} b number
 *
 * @return {number} sum of a and b
 */
function sum(a: number, b: number): number {
  return a + b;
}

const a = (a: number, b: number): void => {
  console.log("hello my fellas", a, b);
};

console.log(a);

export { sum };
