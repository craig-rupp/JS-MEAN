'use strict';

// var name = "John";
// var lastName = prompt("What is your last name?");

// var fullAge = 26;

// var isMarried = false;
// console.log(name + " " + lastName + " is a " + fullAge + " year old wanker." + " Is he married, " + isMarried + ".");

// alert("Hello " + name + " " + lastName);

// var now = 2016;
// var birthyear = now - 1990;

// console.log(birthyear);


// // var ageCraig = (11 + 2) * 2;
// // console.log(ageCraig);

// var ageJon = 30;
// var ageTim = 30;
// ageJon = ageTim = (3 + 5) * 4 - 6;
// console.log(ageJon);

// ageJon++;
// console.log(ageJon);
// ageTim *= 3;
// console.log(ageTim);
// console.log( 26 * 3);

// Coersion and If/Else Review
// var name = 'Craig';
// var age = 26;
// var isMarried = 'yes';

// if(isMarried === 'yes'){
// 	console.log(name + ' is married at the young age of' + age);
// } else {
// 	console.log(name + ' has made a wise decision to not be handcuffed at ' + age + ' years old');
// }

// isMarried = false;
// if(isMarried){
// 	console.log(name + " decided to get married");
// } else {
// 	console.log( name + " is not married");
// }

// if (23 == '23'){
// 	console.log("Type Coersion worked");
// } else {
// 	console.log("it did not");
// }

// if (23 === '23'){
// 	console.log("Type Coersion worked");
// } {
// 	console.log("it did not");
// }

// Logic / Switch Statements

var age = 20;

if(age < 20){
	console.log("John is not in his twenties or older");
} else if (age >= 20 && age < 30) {
	console.log("John is twenty or in his twenties");
} else {
	console.log("John is 30 or older");
}

var job = 'developer';
name = prompt('What is your name');
job = prompt('What is your occupation');

switch (job){
	case 'developer':
		console.log( name + ' is hoping to be a ' + job);
		break;
	case 'actor':
		console.log(name + ' Timothy is an actor');
		break;
	case 'politician':
		console.log('Good Luck ' + name);
		break;
	default:
		console.log(name + '\'s job was not a switch case');
}























