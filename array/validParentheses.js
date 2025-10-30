// s = "()";   // o/p: true
//  s = "()[]{}";  // o/p: true
// s = "(]";  // o/p: false
s = "([])"  // o/p: true
// s = "([)]";  // o/p: false

const isValidParenthesis = (str) => {
    const stack = [];
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (stack.length === 0 || stack.pop() !== pair[char]) {
            return false;
        }
    }
    return stack.length === 0;
}


console.log(isValidParenthesis(s));
