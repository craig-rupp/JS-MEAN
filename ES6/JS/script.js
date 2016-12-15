'use strict';

console.log("Hello there");

// Let & const

// ES5
var name5 = 'Craig Rupp';
var age = 26;
name5 = 'Craig YB';
console.log(name5);

//ES6 
const name6 = 'Craig Rupp';
let age6 = 23;
//name6 = 'Craig Change';
console.log(name6);

//ES5
function driversLicense(passedTest){
	if(passedTest){
		var firstName = 'Craig';
		var yearOfBirth = 1990;
	}
		console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car');

}

driversLicense(true);

//ES6 
function driversLicense6(passedTest){

	let firstName;
	//const value must be declared outside of block
	const yearOfBirth = 1990;

	if(passedTest){
		firstName = 'Craig';
		yearOfBirth;
	}
		console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car');
}

driversLicense6(true);


let i = 23;
//block scope i is not redefined but will be the iterated version in the for loop and the numeric 23 outside the for block
for (let i = 0; i < 5; i++){
	console.log(i);
}
console.log(i);

var i = 23;

for (var i = 0; i < 5; i++){
	console.log(i);
}

console.log(i);

