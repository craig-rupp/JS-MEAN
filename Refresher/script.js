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

// var age = 20;

// if(age < 20){
// 	console.log("John is not in his twenties or older");
// } else if (age >= 20 && age < 30) {
// 	console.log("John is twenty or in his twenties");
// } else {
// 	console.log("John is 30 or older");
// }

// var job = 'developer';
// name = prompt('What is your name');
// job = prompt('What is your occupation');

// switch (job){
// 	case 'developer':
// 		console.log( name + ' is hoping to be a ' + job);
// 		break;
// 	case 'actor':
// 		console.log(name + ' Timothy is an actor');
// 		break;
// 	case 'politician':
// 		console.log('Good Luck ' + name);
// 		break;
// 	default:
// 		console.log(name + '\'s job was not a switch case');
// }

// Coding Challenge 1
console.log('One Foot equeals ' + 152/5 + 'cm');
console.log('One inch equals ' + 13/5 + 'cms');

//Player 1 Total Score Calculated from Prompts
var player1 = prompt('What is your name Player 1');
var height1Feet = Number(prompt('How tall are you in feet? Example 5 . Next prompt will be inches'));
height1Feet = height1Feet * 30.4;
//console.log(height1Feet);
var height1Inches = Number(prompt('How tall are you in inches? Example 7.'));
height1Inches = Math.floor(height1Inches * 2.6);
var player1Height = Math.floor(height1Feet + height1Inches);
console.log(player1 + '\'s' + ' height is ' + player1Height + 'cms');

var player1Age = Number(prompt('How old are you ' + player1));
//console.log(player1Age * 5);
var player1Score = player1Height + (player1Age * 5);
console.log(player1 + '\'s' + ' score is their height in cms ' + player1Height + 'cms + their age ' + player1Age
+ ' times 5, which results in their score being ' + player1Score);

//Player 2 Total Score Calculated from Prompts
var player2 = prompt('What is your name Player 2');
var height2Feet = Number(prompt('How tall are you in feet? Example 5 . Next prompt will be inches'));
height2Feet = height2Feet * 30.4;
//console.log(height1Feet);
var height2Inches = Number(prompt('How tall are you in inches? Example 7.'));
height2Inches = Math.floor(height2Inches * 2.6);
var player2Height = Math.floor(height2Feet + height2Inches);
console.log(player2 + '\'s' + ' height is ' + player2Height + 'cms');

var player2Age = Number(prompt('How old are you ' + player2));
//console.log(player2Age * 5);
var player2Score = player2Height + (player2Age * 5);
console.log(player2 + '\'s' + ' score is their height in cms ' + player2Height + 'cms + their age ' + player2Age
+ ' times 5, which results in their score being ' + player2Score);


















