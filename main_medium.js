import * as medium_1 from './src/medium/medium_1.js';
import * as medium_2 from './src/medium/medium_2.js';
import * as medium_3 from './src/medium/medium_3.js';
import mpg_data from './src//medium/data/mpg_data.js';
let medArray = [2, 5, 6, 2, 7, 4, 2, 7, 5];
// console.log(medium_1.getSum([...Array(10).keys()]));
// console.log(medium_1.getMedian([1]));
// console.log(medium_1.getStatistics([3, 2, 4, 5, 5, 5, 2, 6, 7]));
// console.log(medium_1.getMedian([1, 2, 3, 4]));

// console.log(medium_2.allCarStats);
// console.log(medium_2.moreStats);
// console.log(medium_2.moreStats['makerHybrids'].filter(car => car.make == 'BMW'));
// console.log(medium_2.moreStats['avgMpgByYearAndHybrid']);
// console.log(medium_3.searchHighPower(mpg_data, 600, 400));
// console.log(medium_3.searchName(mpg_data, "Mercedes"));
console.log(medium_3.searchByYear(mpg_data, [2020]));