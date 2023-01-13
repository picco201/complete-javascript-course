// "use strict";
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //this is a long line of code
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// // function declaration

// function calage(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calage(1991);
// //function expression you can't call function expression before it is defined
// const calage2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calage2(1991);
// console.log(age1, age2);

// //arrow function
// // const calage3 = (birthYear) => 2037 - birthYear;
// // const age3 = calage3(1991);
// // console.log(age3);

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Bob"));

// return statement imediately exit the function
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉 GOOD LUCK 😀

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// let avgDolphins = calcAverage(780, 90, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);
// const checkWinner = function (scoreTeam1, scoreTeam2) {
//   if (scoreTeam1 >= 2 * scoreTeam2) {
//     console.log(`Dolphins win (${scoreTeam1} vs. ${scoreTeam2})`);
//   } else if (scoreTeam2 >= 2 * scoreTeam1) {
//     console.log(`Koalas win (${scoreTeam2} vs. ${scoreTeam1})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(avgDolphins, avgKoalas);

// //test2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// // //array
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends[friends.length - 1]);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years[0]);

// console.log(friends.length);
// friends[2] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// array operators
// friends.push("jay");
// console.log(friends);
// friends.unshift("john");
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// // indexOf and includes

// // coding challenge

// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];
// const calTips = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// for (let i = 0; i < bills.length; i++) {
//   const tip = calTips(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// object;
// const jonas = {
//   firstName: "Jonas",
//   lastName: `hello`,
//   birthYear: 1993,
//   friends: ["Michael", "Steven", "Peter"],
//   driverLicense: false,
//   // calcAge: function (birthYear) {
//   //   return 2043 - birthYear;
//   // },
//   // calcAge: function () {
//   //   return 2043 - this.birtear;hY
//   // },
//   calcAge: function () {
//     this.age = 2043 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old, who has ${
//       this.driverLicense ? "a" : "no"
//     } driver license`;
//   },
// };
// // dot vs bracket notation
// console.log(jonas.age);
// console.log(jonas["first" + "Name"]);
// console.log(
//   `Jonas has ${jonas.friends.length} friends and his best friends is ${jonas.friends[0]}`
// );
// console.log(jonas.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMIscore = this.mass / (this.height * this.height);
//     return this.BMIscore;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMIscore = this.mass / (this.height * this.height);
//     return this.BMIscore;
//   },
// };
// console.log(mark.BMIscore);

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMIscore > john.BMIscore) {
//   console.log(
//     `${mark.fullName}'s BMI(${mark.BMIscore}) is higher than ${john.fullName}'s BMI(${john.BMIscore})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI(${john.BMIscore}) is higher than ${mark.fullName}'s BMI(${mark.BMIscore})`
//   );
// }
// ///////////////////////////////////////
// // Looping Backwards and Loops in Loops
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// //continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }
//looping backward
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// // while loop
// let rep = 1;

// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }
