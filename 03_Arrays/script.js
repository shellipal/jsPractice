//empty array...............

// const myList = [];
// console.log(myList);

// ..........................
// const nums = [1, 2, 3, 4, 5];
// console.log(nums);

// const stringArr = ["eat", "sleep", "code", "repet"];

// Accessing items from our array.......

// console.log(stringArr[0]);
// console.log(stringArr[1]);
// console.log(stringArr[2]);
// console.log(stringArr[3]);

//Nested Array or 2-D Array................
// const nesArr = ["one", ["two", "three"], 1, true, false];
// console.log(nesArr[1][1]);

//-----exercise------------------------

// const favSingers = ["Dhanda", "BTS", "BlackPink"];
// console.log(favSingers[0]);

// const favNumbers = [2, 4, 8, 11];
// console.log(favNumbers);

// const mixedArr = ["string", ["otherarray"], 123, true];

// console.log(mixedArr);
// console.log(mixedArr[0]);
// console.log(mixedArr[1]);
// console.log(mixedArr[2]);
// console.log(mixedArr[3]);

//----methods--------------

// const fruits = [
//   "apples",
//   "pomegranate",
//   "mango",
//   "strawberries",
//   "pineapple",
//   "grapes",
// ];

//----------push-------------------------
// console.log(fruits);
// console.log(fruits.length);

// fruits.push("Banana");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

//-----------shift-------------------
// fruits.shift();
// console.log(fruits);

// --------unshift-------------
// fruits.unshift("orange");
// console.log(fruits);

// -----------concat----------

// const newFruits = ["orange", "banana", "papaya"];

// const totalFruits = fruits.concat(newFruits);
// console.log(totalFruits);

//--------------includes------------------
// const pl = ["js", "Golang", "python", "PHP"];
// const numbers = [3, 5, 2, 6, 7];

// console.log(pl.includes("Golang"));
// console.log(pl.join("-"));
// console.log(pl.reverse());

// -------------slice------------
// console.log(pl.slice(0, 2));

//-------------sort-------------------
// console.log(numbers);
// console.log(numbers.sort());

//-----------OBJECTS -->  -------------

// const person = {
//   firstName: "Shelli",
//   lastName: "pal",
//   age: 20,
//   location: ["planet", "Earth"],
//   isProgrammer: true,
// };

// delete person.firstName;

// const arr = [];
// console.log(typeof arr);

// console.log(person);
// console.log(typeof person);

//Accessing items from our objects.....................

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.location);
// console.log(person.isProgrammer);

// console.log(person["firstName"]);

// ---------object exercise------------------

const car = {
  type: "TATA",
  model: "2.0",
  color: "blue",
};

console.log(car);

console.log(typeof car);

car.type = "Toyota";
console.log(car);

car.wheels = 4;
console.log(car);
