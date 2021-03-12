const userName = 'Max';
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
const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: 'max',
     age: 30
}

const copiedPerson = { ...person };

console.log(copiedPerson);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const  addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;

console.log(userName, age, person);
