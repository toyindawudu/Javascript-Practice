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
