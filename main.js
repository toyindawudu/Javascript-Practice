// Type coercion

var firstName = 'Josiah';
var age = 2;
var sex = 'male';

console.log(firstName + ' is ' + age + ' years old' + '.')

var job, isMarried;
job = 'Student';
isMarried = "false"

console.log(firstName + ' is ' + age + ' years old' + '. ' + 'He is a ' + job) 

//Variable mutation

age = 'twenty-eight';
console.log(firstName + ' is ' + age)

//Basic Operators

var now = 2019;
ageJosiah = 2;
ageToyin = 33;
ageTiti = 38;

// Maths Operators

yearJosiah = now - ageJosiah;
yearToyin = now - ageToyin;
yearTiti = now - ageTiti;


console.log (yearJosiah + 2);
console.log (yearToyin - 3);
console.log (yearTiti + 5);

//Logical operators
var titiOlder = ageTiti > ageToyin;
console.log(titiOlder);


//typeof operator
console.log(typeof titiOlder);
console.log(typeof ageTiti);
console.log (typeof job);

//Operator precedence 

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Groupings
var ageJohn = now - yearJohn;
var ageRichard = 31;
var average = (ageJohn + ageRichard) / 2;

console.log(average);

// Multiple assignments

// Variable Declaration
var markMass, johnMass, markHeight, johnHeight;
markMass= 80;
johnMass = 83;

markHeight = 1.98;
johnHeight = 1.95;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);


var isMarkBmiHigher = markBmi > johnBmi

console.log(markBmi, johnBmi);
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);

// If / else statements

var firstName = 'John';
var maritalStatus = 'single';

if (maritalStatus === 'married') {
  console.log(firstName + 'is married!');
} else {
  console.log(firstName + ' will hopefully be married soon!');
}

var isMarried = true; 

if (maritalStatus) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully be married soon!');
}


var markMass, johnMass, markHeight, johnHeight;
markMass= 70;
johnMass = 83;

markHeight = 1.98;
johnHeight = 1.95;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);


if (markBmi > johnBmi) {
  console.log ('Mark is heavier than John')
} else 
  console.log ('Mark weighs less than John');


// Boolean logic

var firstName = 'John'
var age ='16';

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if(age<=18 && age >= 13) {//Between 13 and 18
  console.log(firstName + ' is a teenager.');
} else {
  console.log (firstName + ' is a Man.');
}


// The Ternary Operator and Switch Statements - This is an alternative way of writing conditional statements
var firstName = 'John';
var age = 33;

age >= 18 ? console.log (firstName + ' drinks beer. ')
: console.log(firstName + ' drinks juice. ');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// Switch statements

var job = 'Policeman';
switch (job) {
  case 'teacher':
    console.log (firstName + ' teaches kids how to code');
    break;
  case 'driver':
    console.log (firstName + ' drives an uber in London');
    break;
  case 'designer':
    console.log (firstName + ' designs beautiful websites');
    break;
  default: 
    console.log (firstName + ' does something else');
}


// Three ways you can write consditional statements
// If/ else 
// Ternary operators 
// Switch statements


/* Truthy and Falsy values and equality operators

  Falsy values: undefined, null, 0, '', NaN
  Truthy values: NOT Falsy values

 */


var height;

height = 0;

if (height || height === 0)  {
  console.log('Variable is defined')
} else {
  console.log('Variable has not been defined')
}


var teamJohn = (89 + 120 +103) / 3;
var teamMike = (116 + 94 + 123) / 3;
var teamMary = (97 + 134 + 105) / 3;

console.log(teamJohn);
console.log(teamMike);
console.log(teamMary);

if ( teamJohn > teamMike && teamJohn > teamMary){
  console.log ('John\'s team wins with an average score of ' + teamJohn)
} else if (teamMike > teamJohn && teamMike > teamMary) {
  console.log('Mike\'s team wins with an average score of ' + teamMike)
} else if ( teamMary > teamJohn && teamMary > teamMike) {
  console.log ('Mary\'s team wins with an average score of ' + teamMary)
} else  {
  console.log ('There\'s a draw')
}

/* if (teamJohn> teamMike) {
  console.log ('John\'s team wins with an average score of ' + teamJohn);
} else if (teamMike > teamJohn) {
    console.log('Mike\'s team wins with an average score of ' + teamMike);
} else {
  console.log ('There\'s a draw')
} */


/* Functions */

function calculateAge (birthYear) {
  return 2018 - birthYear;
}

var ageToyin = calculateAge(1986);
var ageTiti = calculateAge(1981);
var ageTosin = calculateAge(1986);
var ageMum = calculateAge(1950);
console.log(ageToyin);
console.log(ageTiti);
console.log(ageTosin);
console.log(ageMum);

function calculateRetirement (year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0){
    console.log (firstName + ' retires at ' + retirement + ' years');
  } else {
    console.log (firstName + ' is already retired ');
  }
  
}

calculateRetirement(1986, 'Toyin');
calculateRetirement(1981, 'Titi');
calculateRetirement(1986, 'Tosin');
calculateRetirement(1950, 'Mum');

/* Function Statements and Expressions */ 

// Function declaration
function whatDoYouDo (job, firstName) {
};

//Function Expression
var whatDoYouDo = function(job, firstName){
  switch (job) {
    case 'teacher':
    return firstName + ' teaches kids mathematics';

    case 'driver':
    return firstName + ' teaches kids how to drive';

    case 'designer': 
    return firstName + ' teaches kids how to design';

    default:
    return firstName + ' has another job';
  }
}

console.log (whatDoYouDo ('designer', 'Sarah'));
console.log (whatDoYouDo ('teacher', 'John'));
console.log (whatDoYouDo ('pilot', 'Jane'));
console.log (whatDoYouDo ('retired', 'Frank'));

//Array

// Initialising new array
var names = ['Toyin', 'Titi', 'Tosin', 'Josiah', 'George'];
var years = new Array (1986, 1981, 1986, 2017,);

// Printing to console
console.log (names[1] + ' loves me!');
console.log (names.length);

//Mutating the Array
names[1] = 'Mark';
console.log (names[1] + ' loves me!');
names[names.length] = 'Bisi';
console.log (names, names.length);

//Different data types
var toyin = ['Toyin', 'Dawudu', 32, 'Developer'];

//Adding to the array
toyin.push('Nigerian'); // add to the end of the arrray
toyin.unshift('Mr.'); // add it to the beginning of the array

//Removes from the array
toyin.pop(); // removes the last element from the array
toyin.shift (); //removes the first element from the array

console.log(toyin);


toyin.indexOf(32);
console.log(toyin.indexOf(34)); // This is usually use to test if an element is present in an array

// An example of the Test 

var isDeveloper = toyin.indexOf('Developer') === -1 ? 'Toyin is NOT a Developer' : 'Toyin IS a Developer';
console.log (isDeveloper);


//Coding Challenge 3 

// intialise the restaurant variable
var restaurantBills;

// Create an array for the restaurant bills
restaurantBills = [124, 48, 268]

// Create function to calculate tips
function tipCalculator (bill) {
if (bill<50) {
  tip = ((20/100) * bill);
  return tip;
} else if (bill >= 50 && bill <= 200) {
  tip = ((15/100) * bill);
  return tip;
} else {(tip = (.10 * bill));
  return tip;
}}


//Calculate the individual tips for the restuarants and create an array

var Tips = [tipCalculator(restaurantBills[0]),tipCalculator(restaurantBills[1]),tipCalculator(restaurantBills[2])];

console.log(Tips[0],Tips[1],Tips[2]);
console.log((restaurantBills[0]+Tips[0]), (restaurantBills[1]+Tips[1]), (restaurantBills[2]+Tips[2]));

/* Objects and properties */

//Object literal
var toyin = {
  firstName:'Toyin',
  lastName: 'Dawudu',
  birthYear: 1986,
  family: ['Josiah', 'Titilola'],
  job: 'Front-end Developer',
  isMarried: true
};

console.log(toyin.lastName);
console.log(toyin['lastName']);

var x = 'birthYear';
console.log(toyin[x]);
toyin.isMarried = false
console.log(toyin.isMarried);

//New Object literal
var titi = new Object();
titi.name = 'Titi';
titi.job = 'Theatre';
titi.birthYear = 1981;
titi.birthMonth = 'September';
titi.lastName = 'Dawudu';

console.log(titi);

// Objects and Methods

var toyin = {
  firstName:'Toyin',
  lastName: 'Dawudu',
  birthYear: 1986,
  family: ['Josiah', 'Titilola'],
  job: 'Front-end Developer',
  isMarried: true,
  calcAge: function() {
    this.age = 2018 - this.birthYear; // This creates a new attribute of 'age' of age in the toyin object
  }
};

toyin.calcAge()
console.log(toyin);

// Coding Challenge #4

var mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass:70,
  height:1.89,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

// This returns the BMI calculation from the above function

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

//Condition to see who has a higher BMI

if (john.bmi > mark.bmi) {
  console.log(john.firstName + ' has a higher BMI')
} else if (mark.bmi > john.bmi) {
  console.log(mark.firstName + ' has a higher BMI')
} else {
  console.log ('They have the same');
}

// Loops and iterations - There are three For while, While, For loop 

//For loop

//for (initialisation, condition that is iterated, and the counter)

// for (var i = 0; i < 10; i++){
//   console.log(i);
// }

// for (var i = 0; i <= 30; i++) {
//   console.log (i);
// }

// var toyin = ['Toyin', 'Dawudu', 32, 1986, 'Developer', 'Nigerian', 'Husband'];

// for (var i = 0; i < toyin.length; i++) {
//   console.log (toyin [i]);
// }

// // While loop

// var i = 0;
// while (i < toyin.length) {
//   console.log (toyin[i]);
//   i++;
// }

// Continue and break statements

var toyin = ['Toyin', 'Dawudu', 'Developer', 32, 1986, 'Nigerian', 'Husband'];

// Continue 
for (var i = 0; i < toyin.length; i++) {
  if (typeof toyin[i] !== 'string') continue // This ignores and continue past data types that aren't Strings 
  console.log (toyin [i]);
}

//Break

for (var i = 0; i < toyin.length; i++) {
  if (typeof toyin[i] !== 'string') break // When it comes across a data type that it's a string, it doesn't print anything, instead, it exists. 
  console.log (toyin [i]);
}

// Looping backwards
for (var i = toyin.length - 1; i >= 0; i--) {
  console.log(toyin[i]);
}

// Coding Challenge 5 

var john = {
  bills: [124, 48, 268, 180, 42],
  // Create a function for the tips
  calcTips: function () {
    this.tips = [];
    this. finalValues = [];

    //create a control flow for the tips depending on the bill

    for (var i = 0; i < john.bills.length; i++) {

      // create percentage based on tipping
      
      var billPercentage;
      var bill = this.bills[i];

      if (bill < 50) {
        billPercentage = 20/100;
      } else if (billPercentage >= 50 && billPercentage < 200) {
        billPercentage = 15/100;
      } else {
        billPercentage = 10/100;
      }

      //Calculate and place the values in their respective arrays

      this.tips[i] = bill * billPercentage;
      this.finalValues[i] = bill + bill * billPercentage;
    }
  }
}

john.calcTips();
console.log(john);

var mark = {
  bills: [77, 375, 110, 45],
  // Create a function for the tips
  calcTips: function () {
    this.tips = [];
    this. finalValues = [];

    //create a control flow for the tips depending on the bill

    for (var i = 0; i < mark.bills.length; i++) {

      // create percentage based on tipping
      
      var billPercentage;
      var bill = this.bills[i];

      if (bill < 100) {
        billPercentage = 20/100;
      } else if (billPercentage >= 100 && billPercentage < 300) {
        billPercentage = 10/100;
      } else {
        billPercentage = 25/100;
      }

      //Calculate and place the values in their respective arrays

      this.tips[i] = bill * billPercentage;
      this.finalValues[i] = bill + bill * billPercentage;
    }
  }
}

mark.calcTips();
console.log(mark);

// Calculate the average of a given array

function calcAverage (tips) {
  var sum = 0;

// Sum up the total of the array

  for (var i = 0; i <tips.length; i++) {
    sum = sum + tips [i];
  }
  return sum / tips.length;
}

// calculate

john.calcTips();
mark.calcTips();


// john.average = john.calcAverage(john.tips);
// mark.average = mark.calcAverage(mark.tips);


console.log(john, mark);


//Object.create 
// var personProto = {
//   calculateAge: function (){
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// var tosin = Object.create(personProto);
// tosin.name = 'Tosin';
// tosin.yearOfBirth = 1986;
// tosin.job ='Banker';

// var josiah = Object.create(personProto, {
//   name: {value: 'Josiah'},
//   yearOfBirth: {value: 2017},
//   job: {value: 'Unemployed'}
// });


// Primitives vs. Objects


// Primitives
var a = 32;
var b = a;

a = 46;

console.log (a, b);


// Objects

var obj1 = {
  name: 'Toyin',
  age: 32
};

var obj2 = obj1;
obj2.age = 21;

console.log (obj1.age, obj2.age);

// Functions
var age = 32;
var obj = {
  name: 'Toyin',
  city: 'London'
};

function change(a,b) {
  a = 33;
  b.city = 'Bristol';
}

change(age, obj);

console.log(age);
console.log(obj.city);


// Passing functions as arguements

var years = [1990, 1993, 1998, 2005, 2018];

function arrayCalc (arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push (fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate (el) {
  if (el >= 18 && el <= 81) {
    return Math.round(260.9 - (0.67 * el));
  } else {
    return -1;
  }
  
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

// console.log(ages, fullAges);
