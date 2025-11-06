// const s = "III";
// // Output: 3

// const s = "LVIII";
// // Output: 58

const s = "MCMXCIV";
// Output: 1994

var romanToInt = function (str) {
    const romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        const curr = romanNum[str[i]];
        const next = romanNum[str[i + 1]];
        if (curr < next) {
            total -= curr
        } else {
            total += curr
        }
    }
    return total;
};


console.log(romanToInt(s))
