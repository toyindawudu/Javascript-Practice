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

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

//Groupings
var ageJohn = now - yearJohn;
var ageRichard = 31;
var average = (ageJohn + ageRichard) / 2;

console.log(average);

//Multiple assignments

//Variable Declaration
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
