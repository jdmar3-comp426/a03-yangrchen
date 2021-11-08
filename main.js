import { sumToString, getIncreasingArray, countArray } from "./src/mild/mild_1.js";
import * as mild_2 from "./src/mild/mild_2.js";

console.log(sumToString(2, 4));
console.log(getIncreasingArray(3, 7));
console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
console.log(mild_2.identifyVariable(2));
console.log(mild_2.identifyArray(['some', 3, [3, 4], false]));
let obj = { type: 'test' };
mild_2.removeKey(obj, 'type');
console.log({ obj });
let obj_2 = { type: 'test2', a: 'a', };
obj_2 = mild_2.removeKeyNonDestructive(obj_2, 'type');
console.log(obj_2);
let obj_3 = { type: 'test3', a: 'a', b: 'b', };
obj_3 = mild_2.removeKeys(obj_3, ['a', 'b'])
console.log({ obj_3 });
