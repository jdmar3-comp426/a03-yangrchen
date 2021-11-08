import { variance } from "./data/stats_helpers.js";
import { maxAndMin } from "../mild/mild_1.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let reducer = (a, b) => a + b;
    return array.reduce(reducer);
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort();
    return array.length % 2 == 0 ? (array[Math.floor(array.length / 2)] + array[Math.floor(array.length / 2) - 1]) / 2 : array[Math.floor(array.length / 2)];
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let n = array.length;
    let sum = getSum(array);
    let mean = sum / n;
    let median = getMedian(array);
    let { max, min } = maxAndMin(array);
    let v = variance(array, mean);
    let std_dev = Math.sqrt(v);
    return { length: n, sum, mean, median, min, max, variance: v, standard_deviation: std_dev };
}

