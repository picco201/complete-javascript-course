// let js = 'amazing';
// if (js==='amazing') alert('js is fun');
// console.log('hey');
// console.log('Jonas');
// console.log(23);
// let firstName = 'Jonas';
// console.log(firstName);

// undefine = true;
// console.log(typeof undefine);
// // type of objects in js: string, number, ans boolean; there is also undefined

// // let, const, var
// let age = 30;
// age = 31;
// const birthYear = 1992;
// error with birthYear=1004;
// using const when the variables never change, using let when it changes
// why avoid var, the old way of variable

const now = 245;
const ageJonas = now - 132;
const ageSarah = now - 134;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 23, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
let x = 10 + 5;
x += 10; //x=x+10
x *= 4; //x=x*4
x++; //x=x+1
x--; //x=x-1
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageJonas >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1992 > now - 2018);

//predecendence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);
//challenge
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// string ${} put variable in string, using `` for everystring, new line \n\
//if else
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

//type conversion using Number and String to convert
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// type coercion
let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 30;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

//equality operators == vs ===; == does also coercion conversion
// loose vs strict prompt can ask user to put in string

//boolean logic
const hasDriversLicense = true; // A
const hasGoodVision = false; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
// switch statement to replace the repetition of if else
const day = "Enter a day";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
    console.log(`hehe`);
    break;
  default:
    console.log("Not a valid day!");
}

//statement and expression
//expression produces a value, statement does not
3 + 4;
1991;
true && false && !false;
if (23 > 10) {
  const str = "23 is bigger";
}

//conditional operator
const ageex = 23;
ageex >= 18
  ? console.log("I like to drink winee")
  : console.log("I like to drink water");

const drink = ageex >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (ageex >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${ageex >= 18 ? "wine" : "water"}`);
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
// GOOD LUCK 😀

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.015 : bill * 0.02;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
