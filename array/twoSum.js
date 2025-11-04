// const nums = [2, 7, 11, 15];
// const target = 9;
// // Output: [0, 1]

// const nums = [3, 2, 4];
// const target = 6;
// // Output: [1, 2]

const nums = [15, 3, 4, 3];
const target = 6;
// Output: [0, 1]

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (target === nums[i] + nums[j]) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };

// console.log(twoSum(nums, target));


// with one loop
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const secNum = target - nums[i];
        console.log(secNum)
        if (map.has(secNum)) {
            return [map.get(secNum), i];
        }
        map.set(nums[i], i)
        console.log(map)
    }
    return []
};

console.log(twoSum(nums, target));

