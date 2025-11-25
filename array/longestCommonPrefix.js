const strs = ["flower", "flow", "flight"];
// Output: "fl"

// const strs = ["dog","racecar","car"];
// // Output: ""

// const strs = ["fdog","doracecar","dogcador"];
// // Output: ""

const longestCommonPrefix = function (str) {
    let commonPrefix = "";
    let len = 0;
    for (let i = 0; i < str[0].length; i++) {
        let char = str[0][i];
        for (let j = 0; j < str.length; j++) {
            if (str[j][i] !== char) {

                return commonPrefix
            }
        }
        commonPrefix += char;
    }
    return commonPrefix
};

console.log(longestCommonPrefix(strs));
