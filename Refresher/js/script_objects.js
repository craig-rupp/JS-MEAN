'use strict';

console.log('Let\'s work on objects!');

//Function Constructor

var John = {
	name : 'John',
	yearOfBirth : 1990,
	job : 'developer'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

var craig = new Person('Craig', 1990, 'software dev');

console.log(craig);

Person.prototype.calculateAge =
function (){
	console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Rupp';

var Lisa = new Person('Lisa', 1963, 'CCN');

Lisa.calculateAge();
console.log(Lisa.lastName);

//Object.create

var personProto = {
	calculateAge : function (){
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = 'Developer';
console.log(john);

var Lisa = Object.create(personProto, {
	name : {value : 'Lisa'},
	yearOfBirth : {value : 1963},
	job : {value : 'CCN'}
});

//Function as Arguments
var years = [1990, 1961, 1963, 1987, 1991, 1988, 1999, 2005];

function arrayCalc(arr, fn){
	var resArr = [];
	for (var i = 0; i < arr.length; i++){
		resArr.push(fn(arr[i]));
		//console.log(fn(arr[i]));
	}
	return resArr;
}

function calcAge(el){
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}
function maxHeartRate(el){
	if(el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 - el));
	} else {
		return - 1;
	}
}

var ages = arrayCalc(years, calcAge);
//var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

//console.log(fullAges);
console.log(rates)











