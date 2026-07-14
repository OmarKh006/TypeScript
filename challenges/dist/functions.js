"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log(sum);
const greetingText = (name, customGreeting) => {
    if (customGreeting)
        return `${customGreeting} ${name}`;
    return `Hello ${name}`;
};
const defaultGreeting = (name, customGreeting = "Hello") => {
    return `${customGreeting} ${name}`;
};
console.log(greetingText("Omar"));
console.log(greetingText("Omar", "Welcome GOAT"));
function infiniteParamsSum(...numbers) {
    return numbers.reduce((total, num) => total + sum, 0);
}
console.log(infiniteParamsSum(1, 2, 10, 7, 8));
function voidFn() {
    console.log("void fn");
}
function neverFn(msg) {
    throw new Error(msg);
}
//# sourceMappingURL=functions.js.map