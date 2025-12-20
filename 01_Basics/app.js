// alert("Something to show");

// console.log("hello Shelli");

// console.table({ name: "shelli", age: 20 });

//----------------------------------------
//Declared variable...
// let name;

//Assign value...
// let mango;
// mango = "mango";
// console.log(mango);
//------------------------------------------

//HomeWork1...........

// var name = "shelli";
// var whatIHaveTOBecome = "programmer";
// var gender = "Female";
// var twitterHandle = "palShelli";

// console.log(name);
// console.log(whatIHaveTOBecome);
// console.log(gender);
// console.log(twitterHandle);

//-------------------------------------------------

//homeWork2..............................
// var firstFavNum = 4;
// var secondFavNum = 8;

// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** secondFavNum);

//------------------------------------------

//Booleans.....................
//...homework3...............

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 40;

// console.log(isJsProgrammingLanguage);
// console.log(isJsHard);

// console.log(favNumb + undefined);

//............................
//...Homework4...............

// var firstFavNumb = 4;
// var secondFavNum = 8;
// console.log(firstFavNumb > secondFavNum);
// console.log(firstFavNumb < secondFavNum);
// console.log(firstFavNumb >= secondFavNum);
// console.log(firstFavNumb <= secondFavNum);
// console.log("hello");
// console.log(firstFavNumb === secondFavNum);
// console.log(firstFavNumb == secondFavNum);
// console.log(firstFavNumb !== secondFavNum);
// console.log(firstFavNumb != secondFavNum);
//...............................................

//strings....................

let firstname = "Shelli";
let secondname = "     Web dev    ";
//concate...
// let fullname = firstname + " " + secondname;
let fullname = firstname.concat(secondname);
console.log(fullname);

//append..................
firstname += " Software developer";
console.log(firstname);

//length.......
console.log(firstname.length);

//Cases..........
console.log(firstname.toLowerCase());
console.log(secondname.toUpperCase());

//slice...........
console.log(secondname.slice(0, 2));
console.log(secondname.slice(2, 3));
console.log(secondname.slice(3, 7));

//split & join...........
console.log(secondname.split(" ").join(" "));

//includes..........
console.log(firstname.includes("S"));

//trim............
console.log(secondname);
console.log(secondname.trim());
