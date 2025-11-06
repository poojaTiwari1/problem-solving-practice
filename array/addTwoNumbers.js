// const num1 = [2, 4, 3]
// const num2 = [5, 6, 4]
// // Output: [7,0,8]

// const num1 = [0]
// const num2 = [0]
// // Output: [0]|

const num1 = [9, 9, 9, 9, 9, 9, 9]
const num2 = [9, 9, 9, 9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function (l1, l2) {
    let num1 = ''
    let num2 = ''
    const sumArr = [];
    const finalArr = [];

    for (let i = (l1.length - 1); i >= 0; i--) {
        num1 += l1[i];
    }
    for (let i = (l2.length - 1); i >= 0; i--) {
        num2 += l2[i];
    }
    for (let num of String(Number(num1) + Number(num2))) {
        sumArr.push(Number(num))
    }
    for (let i = sumArr.length - 1; i >= 0; i--) {
        finalArr.push(sumArr[i])
    }
    return finalArr
};

console.log(addTwoNumbers(num1, num2))