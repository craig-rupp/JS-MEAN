'use strict';

console.log("Hello there");

// Let & const

// ES5
// var name5 = 'Craig Rupp';
// var age = 26;
// name5 = 'Craig YB';
// console.log(name5);

// //ES6 
// const name6 = 'Craig Rupp';
// let age6 = 23;
// //name6 = 'Craig Change';
// console.log(name6);

// //ES5
// function driversLicense(passedTest){
// 	if(passedTest){
// 		var firstName = 'Craig';
// 		var yearOfBirth = 1990;
// 	}
// 		console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car');

// }

// driversLicense(true);

// //ES6 
// function driversLicense6(passedTest){

// 	let firstName;
// 	//const value must be declared outside of block
// 	const yearOfBirth = 1990;

// 	if(passedTest){
// 		firstName = 'Craig';
// 		yearOfBirth;
// 	}
// 		console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car');
// }

// driversLicense6(true);


// let i = 23;
// //block scope i is not redefined but will be the iterated version in the for loop and the numeric 23 outside the for block
// for (let i = 0; i < 5; i++){
// 	console.log(i);
// }
// console.log(i);

// var i = 23;

// for (var i = 0; i < 5; i++){
// 	console.log(i);
// }

// console.log(i);

 
//Blocks & IIFEs ES6

// {
// 	const a = 1;
// 	let b = 2;
// 	var c = 4;
// }
// console.log(c);
// console.log(a + b);

// //ES 5 IIFE
// (function(){
// 	var c = 3;
// })();
// console.log(c);

//Strings ES6

let firstName = 'Craig';
let lastName = 'Rupp';
const yearOfBirth = 1990;
function calculateAge(year){
	return 2016 - year;
}

console.log(`This is ${firstName} ${lastName}. He was born on February 8th in ${yearOfBirth} 
and is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('C'));
console.log(n.endsWith('p'));
console.log(n.includes('e'));
console.log(`${firstName} `.repeat(3));

//Arrow Functions 
const years = [1982, 1990, 1937, 1912];

//ES5
var years5 = years.map(function(el){
	return 2016 - el + ', years old ';
});
console.log(years5);

//ES6
let ages6 = years.map(el => 2016 - el + `, years old.` );
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} : This person is ${2016 - el} years old.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1} : This person is ${age} years old. more than one line/action`;
});
console.log(ages6);






































