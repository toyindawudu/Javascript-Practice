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