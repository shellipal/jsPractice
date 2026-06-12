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

function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro: () => {
      console.log(`My name is ${name} & i'm ${age} years old & i'm a ${work}`);
    },
  };
}

const shelli = user("shelli", 20, "Programmer");
const ashu = user("ashu", 22, "Developer");

console.log(shelli.intro());

// console.log(ashu);

//--------Exercise--------------------------

const a = 1;
const b = 2;
const c = 3;

const obj = {
  a,
  b,
  c,
};

console.log(obj);

//-----------------------------

const lib = {
  sum: (a, b) => a + b,
  multi: (a, b) => a * b,
};

console.log(lib.sum(2, 3));
console.log(lib.multi(2, 3));

//-----------------------------------
function getPersion(name, age, height) {
  return { name, age, height };
}

console.log(getPersion("shelli", 20, "100"));
