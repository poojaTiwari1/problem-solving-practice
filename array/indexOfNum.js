const arr = [1, 2, 8, 6, 3, 12, 4, 7]
// [2,8,12,12,12,-1,7,-1]

function indexOfNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
     return -1
}

console.log('indexOfNum', indexOfNum(arr, 122));
