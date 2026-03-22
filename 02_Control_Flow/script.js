//---------------conditional statements-------------
// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log("a is greater then b");
// } else if (a < b) {
//   console.log("a is less then b");
// } else {
//   console.log("a is equal to b");
// }

// ..............................

// let time = 10;
// let greetings;

// if (time < 10) {
//   greetings = "Good Morning";
//   console.log(greetings);
// } else if (time < 20) {
//   greetings = "Good Day";
//   console.log(greetings);
// } else {
//   greetings = "Good Evening";
//   console.log(greetings);
// }

// --------------------task------------------

// let password = 10;

// if (password === 8) {
//   console.log("welcome");
// } else if (password <= 8) {
//   console.log("password is too short");
// } else if (password >= 8) {
//   console.log("too long password & password should be 8 characters");
// } else {
//   console.log("please provide a password");
// }

// --------------switch statement----------------

let x = 0;
let bulb;

switch (x) {
  case 0:
    bulb = "off";
    console.log(bulb);
    break;
  case 1:
    bulb = "On";
    console.log(bulb);
    break;
  default:
    bulb = "no value found";
    console.log(bulb);
}

let day = "monday";

switch (day) {
  case "monday":
    console.log("Today is monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is wednesday");
    break;
  case "Thrusday":
    console.log("Today is Thrusday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Satuarday":
    console.log("Today is Satuarday");
    break;
  default:
    console.log("Not a valid day");
}
