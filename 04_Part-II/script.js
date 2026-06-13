//Template literals-----------
// console.log(`This is some random text`);

// const firstName = "shelli";
// const lastName = "pal";

// console.log(`My name is : ${firstName} ${lastName}`);

// console.log(`${["one", "Two", "Three"]}`);

//---------------------------------
// function info() {
//   return `My name is shelli pal & I'm 20 years old`;
// }

// console.log(`${info()}`);

//-------Exercise---------------------
// console.log(`The quick
// brown fox
// jumps overse
// the lazy dog`);

// const firstName = "Lakshay";
// const lastName = "Chaudhary";

// console.log(`Name is : ${firstName} ${lastName} `);

//---------Arrow functions-------------------------------

// function greet(username) {
//   return `Hello ${username}`;
// }

// console.log(greet("Shelli"));

// greet = (username) => {
//   return `Hello ${username}`;
// };

// console.log(greet("Shelli"));

//---------------example-2----------------------

// function double(number) {
//   return number * 2;
// }
// console.log(double(2));

// const double = (n) => n * 2;
// console.log(double(10));

//--------Exercise-----------------------

// setTimeout(() => {
//   console.log("hello");
//   setTimeout(() => {
//     console.log("hey");
//     setTimeout(() => {
//       console.log("Namaste");
//       setTimeout(() => {
//         console.log("Hi");
//         setTimeout(() => {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//-------------literals-----------------------------

// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     intro: () => {
//       console.log(`My name is ${name} & i'm ${age} years old & i'm a ${work}`);
//     },
//   };
// }

// const shelli = user("shelli", 20, "Programmer");
// const ashu = user("ashu", 22, "Developer");

// console.log(shelli.intro());

// console.log(ashu);

//--------Exercise--------------------------

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = {
//   a,
//   b,
//   c,
// };

// console.log(obj);

//-----------------------------

// const lib = {
//   sum: (a, b) => a + b,
//   multi: (a, b) => a * b,
// };

// console.log(lib.sum(2, 3));
// console.log(lib.multi(2, 3));

//-----------------------------------
// function getPersion(name, age, height) {
//   return { name, age, height };
// }

// console.log(getPersion("shelli", 20, "100"));

//--------------Default function-----------------

// function countTo5(count) {
//   if (count === true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`count: ${i}`);
//     }
//   }
// }

// countTo5(true);
// countTo5(false);

//----------------------
// function ratings(rate) {
//   if (rate === 5) {
//     console.log(`high ratings :)`);
//   } else if (rate === 0) {
//     console.log(`low ratings :(`);
//   }
// }

// ratings(0);
// ratings(5);

//------exercise------------------------

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5));

//-----Spread operator------------------------------

//using functions------------
function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "blue", "teal"];

giveMe4(...colors);

//using array-----------------
const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];

const concat = [...strNums, ...moreStrNums];
console.log(concat);
//-------------------
let peoples = ["shelli", "ashu", "bhoomi"];
const allPeoples = ["lakshay", ...peoples, "khushi"];

console.log(allPeoples);

//using objects---------------------------
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
//------------------
let person = {
  name: "huxu",
  age: 20,
  gender: "male",
};

const clone = { ...person, work: "programmer", location: "gp" };
console.log(clone);

//----------Exercise---------------------

let arr = [1, 2, 3];
let arr2 = [4, 5];

const cloneArr = [...arr, ...arr2];
console.log(cloneArr);

//--------------------
const user = {
  name: "shelli",
  age: 20,
};

const cloneuser = { ...user };
console.log(cloneuser);
