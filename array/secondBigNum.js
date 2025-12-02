// const arr = [181,188, 64, 3, 12, 74]


// [2,8,12,12,12,-1,7,-1]
const arr = [1, 5, 4, 3, 5, 6, 6]

// function secondBigNum(arr) {
//     let firBigNum = arr[0];
//     let secBigNum = arr[1];

//     if (secBigNum > firBigNum) {
//         [firBigNum, secBigNum] = [secBigNum, firBigNum]
//     }

//     for (let num of arr) {
//         if (num > firBigNum) {
//             secBigNum = firBigNum;
//             firBigNum = num
//         }
//         else if (num > secBigNum && num !== firBigNum) {
//             secBigNum = num
//         }
//     }
//     return { firBigNum, secBigNum }
// }

function secondBigNum(arr) {
    let firBigNum = -Infinity;
    let secBigNum = -Infinity;
    for (let num of arr) {
        if (num > firBigNum) {
            secBigNum = firBigNum;
            firBigNum = num;
        }
        else if (num > secBigNum && num !== firBigNum) {
            secBigNum = num
        }
    }
    return { firBigNum, secBigNum }
}

console.log(secondBigNum(arr));

