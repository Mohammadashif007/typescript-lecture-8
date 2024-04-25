"use strict";
// let greet = () => {
//     console.log("hello");
// }
// greet = 'hello' //! We can't do this because typescript automatically identify
let greet; //! We can explicitly say that this will be a function
greet = () => {
    console.log("hello, again");
};
const add = (a, b, c) => {
    //! We can pass an optional parameter like this if we don't any value it will be undefined
    console.log(a + b);
    console.log(c);
};
add(5, 8);
// ! When a Typescript function doesn't return anything, it returns void
const sum = (a, b, c = 5) => {
    //! We can also pass a default value. When we pass default value, we will not use question mark
    console.log(a + b);
    console.log(c);
};
sum(4, 9, "99");
// ! We will always pass the required parameters at the first and place the optional parameters last
const minus = (a, b) => {
    return a - b;
};
const result = minus(10, 5); //! When a function returns something, TypeScript infers the return type automatically. We can also define the return type explicitly.
console.log(result);
