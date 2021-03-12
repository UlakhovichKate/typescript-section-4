"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Max';
// let age = 30;
//
// age = 29;
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
// }
// if (age>20) {
//     let isOld = true;
// }
//
// console.log(isOld);
// const add = (a: number, b: number = 1) => a + b;
//
// //console.log(add(12, 11));
//
// const printOutput: (output: string | number) => void = output => console.log(output);
//
// const button = document.querySelector('button');
//
// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
//
// printOutput(add(5));
//
var hobbies = ['sports', 'cooking'];
var activeHobbies = ['hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    firstName: 'max',
    age: 30
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var firstName = person.firstName, age = person.age;
console.log(userName, age, person);
