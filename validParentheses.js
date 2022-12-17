
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let topOfStack = stack[stack.length - 1];
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        } else if (s[i] == ')' && topOfStack == '(' || s[i] == ']' && topOfStack == '[' || s[i] == '}' && topOfStack == '{') {
            stack.pop()
        }
    }
    if (stack.length == 0) {
        return true;
    }

    if (stack.length != 0) {
        return false;
    }
};