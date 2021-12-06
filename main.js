import { sumToString, getIncreasingArray, countArray } from "./src/mild/mild_1.js";
import * as mild_2 from "./src/mild/mild_2.js";
import * as spicy_9 from "./src/spicy/spicy_9.js";

console.log(spicy_9.repeat((a, b) => a + b, 5, 1, 2))
console.log(spicy_9.repeatDemo());
const multiplyBy2 = spicy_9.multiplyBy(2);
console.log(multiplyBy2(8));

console.log(spicy_9.everyEven([], x => x == 1));
console.log(spicy_9.someEven([3, 3, 2, 1, 0], x => x === 3));
console.log(spicy_9.filter([1, 2, 3], x => x % 2 == 0));
console.log(spicy_9.allEvensAreOdd([1, 2, 3, 4, 6]));
console.log(spicy_9.hasExactly(['a', 'b', 'c'], x => typeof (x) == 'string', 3));