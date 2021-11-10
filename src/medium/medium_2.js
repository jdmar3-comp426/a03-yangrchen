import mpg_data from "./data/mpg_data.js";
import { getStatistics } from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: { city: mpg_data.reduce((total, ele) => total + ele['city_mpg'] / mpg_data.length, 0), highway: mpg_data.reduce((total, ele) => total + ele['highway_mpg'] / mpg_data.length, 0) },
    allYearStats: getStatistics(mpg_data.map(a => a.year)),
    ratioHybrids: mpg_data.reduce((total, ele) => ele.hybrid ? total + 1 / mpg_data.length : total + 0, 0),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: mpg_data.reduce((acc, obj) => {
        let make = obj['make'];
        let isHybrid = obj['hybrid'];
        let makeFilter = acc.filter(car => car.make == make);
        if (!(makeFilter.length > 0)) {
            acc.push({ make: make, hybrids: isHybrid ? [obj['id']] : [] });
        }
        else {
            if (isHybrid) acc[acc.indexOf(makeFilter[0])]['hybrids'].push(obj['id']);
        }
        return acc;
    }, []).sort((a, b) => b['hybrids'].length - a['hybrids'].length),
    avgMpgByYearAndHybrid: mpg_data.reduce((acc, obj) => {
        let year = obj['year'];
        let isHybrid = obj['hybrid'];
        let hybridYearLength = mpg_data.filter(car => car.year == year && car.hybrid).length;
        let notHybridYearLength = mpg_data.filter(car => car.year == year).length - hybridYearLength;
        let mileageData = {
            hybrid: {
                city: 0,
                highway: 0,
            },
            notHybrid: {
                city: 0,
                highway: 0,
            },
        };
        if (isHybrid) {
            mileageData['hybrid']['city'] = obj['city_mpg'] / hybridYearLength;
            mileageData['hybrid']['highway'] = obj['highway_mpg'] / hybridYearLength;
        }
        else {
            mileageData['notHybrid']['city'] = obj['city_mpg'] / notHybridYearLength;
            mileageData['notHybrid']['highway'] = obj['highway_mpg'] / notHybridYearLength;
        }
        if (!acc[year]) {
            acc[year] = mileageData;
        }
        else {
            if (isHybrid) {
                acc[year]['hybrid']['city'] += obj['city_mpg'] / hybridYearLength;
                acc[year]['hybrid']['highway'] += obj['highway_mpg'] / hybridYearLength;
            }
            else {
                acc[year]['notHybrid']['city'] += obj['city_mpg'] / notHybridYearLength;
                acc[year]['notHybrid']['highway'] += obj['highway_mpg'] / notHybridYearLength;
            }
        }
        return acc
    }, {})
};
