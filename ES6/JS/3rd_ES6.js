'use strict';
console.log('Hello third practice');

//Rest Parameters

//ES5
function isFullAge5(limit) {
	console.log(arguments);
	//start copying at 1, exlcuding limit argument
	var argsArray = Array.prototype.slice.call(arguments, 1);
	console.log(argsArray);
	argsArray.forEach(function(cur){
		console.log((2016 - cur) >= limit);
	})
}
//isFullAge5(11, 1990, 1999, 1960);
//console.log('second function call');
//isFullAge5(1990, 1999, 1960, 2001, 1987);

//ES6
//rest allows multitude of parameters
function isFullAge6(limit, ...years){
	//console.log(years);
	years.forEach(cur => console.log((2016 - cur) >= limit));
}

//isFullAge6(25, 1990, 1999, 1960, 2016, 1998);


//Default Parameters

//ES5
function SmithPerson(firstName, yearofbirth, lastname, allegiance)
{
	lastname === undefined ? lastname = 'Smith' : lastname = lastname;
	allegiance === undefined ? allegiance = 'Imperial Empire' : allegiance = allegiance;
	this.firstName = firstName;
	this.yearofbirth = yearofbirth;
	this.lastname = lastname;
	this.allegiance = allegiance;
};

var john = new SmithPerson('John', 1990, null);
console.log(john);

var jen = new SmithPerson('Jen', 2098, 'Erso', 'Rebel Army');
console.log(jen);

//ES6
//default perameters
function SmithPerson2(firstName, yearofbirth, lastname = 'Skywalker', allegiance = 'Rebel Force')
{
	this.firstName = firstName;
	this.yearofbirth = yearofbirth;
	this.lastname = lastname;
	this.allegiance = allegiance;	
}
var Han = new SmithPerson2('Han', 2087, 'Solo', 'Rogue');
var Luke = new SmithPerson2('Luke', 2098);
console.log(Han);
console.log(Luke);

//ES6 Maps key value data structure

const question = new Map();
//set with key first then value pair
question.set('question', 'What is the name of Jen Erso\'s father?');
question.set(1, 'Grady');
question.set(2, 'Henry');
question.set(3, 'Galen');
question.set(4, 'Barclay');
question.set('correct', 3);
question.set(true, `Correct Answer, ${question.get(3)} was her father`);
question.set(false, 'Sorry incorrect, please try again');

console.log(question.get('question'));
//console.log(question.size);
if(question.has(4)){
	//question.delete(4);
	//console.log(question.get(4));
}

//question.clear();
//loop makes more sense to me then for on line 88
//question.forEach((element, index) => 
// 	console.log(`This is ${index} or (key) , and it's ${element} or it's (value)`));

for(let [key, value] of question.entries()){
	if(typeof(key) === 'number'){
		console.log(`Answer ${key} : ${value}`);
	}
}

//const ans = parseInt(prompt('Write the correct answer'));
//console.log(question.get(ans === question.get('correct')));

//CLASSES
//ES 5

var Person5 = function(name5, yearofbirth5, job5)
{
	this.name5 = name5;
	this.yearofbirth5 = yearofbirth5;
	this.job5 = job5;
}
Person5.prototype.calculateAge = function ()
{
	var person5age = new Date().getFullYear() - this.yearofbirth5;
	console.log(person5age);
}
var John5 = new Person5('John', 1990, 'Developer');
console.log(John5);

John5['calculateAge']();

//ES6
class Person6 {
	constructor (name6, yearofbirth6, job6)
	{
		this.name6 = name6;
		this.yearofbirth6 = yearofbirth6;
		this.job6 = job6;
	}
	calculateAge6(){
		var person6age = new Date().getFullYear() - this.yearofbirth6;
		console.log(person6age);
	}
	static greeting() {
		console.log('Hey there');
	}
}

const John6 = new Person6('Lil John', '1980', 'Actor');
John6.calculateAge6();
Person6.greeting();





















































