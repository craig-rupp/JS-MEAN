'use stict';
console.log('Hello Amigos');

//Arrow Functions

//ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		var self = this;
		document.querySelector('.green').addEventListener('click', function(){
			alert('This is the ' + self.color + 'box.' + ' Which is in the ' +
				self.position + ' position.');
		});
	}
}

//box5['clickMe']();
//box5.clickMe();

//ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe : function (){
		document.querySelector('.green').addEventListener('click', () => {
			let str = 'You have selected the ' + this.color + ' box. Which is in the ' + this.position + ' position.';
			alert(str);
		});
	}
}
box6.clickMe();

function Person(name){
	this.name = name;
}
//ES 5
Person.prototype.myFriends5 = function (friends){
	var arr = friends.map(function(el){
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
}

//bind allows acces to the this variable which is constructed in the Person function constructor
var array = ['Tayo', 'Megan', 'Elana'];

new Person('Craig').myFriends5(array);

//ES 6
Person.prototype.myFriends6 = function (friends){
	let arr = friends.map(el => `${this.name} is friends with ${el}`);
		console.log(arr);
}
new Person('Steven')['myFriends6'](array);


//Destructuring 
//ES 5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];
// console.log(name, age);

//ES 6 
const[name, age] = ['John', 26];
console.log(name, age);

const obj = {
	firstName : 'John',
	lastName : 'Murphy'
};
const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName : a, lastName : b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement (year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age2, retirement] = 
calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

//Arrays

const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
/*
boxesArr5.forEach(function(cur){
	cur.style.backgroundColor = 'dodgerblue';
});
*/

//ES6
//from allows nodeList to be created into array which we foreach through 
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
	if(boxesArr5[i].className === 'box blue'){
		//console.log(boxesArr5[i] + ' ' + boxesArr5[i].className);
		continue;
	}
	boxesArr5[i].textContent = 'I Changed to blue';
}
*/
//ES6 FOROF
for (const cur of boxesArr6){
	if(cur.className.includes('blue'))
	{
		continue;
	}
	cur.textContent = 'I am now blue';
}

//ES 5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
	return cur > 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

//Spread Operator 

function addFourAges (a,b,c,d){
	return a + b + c + d;
}
var someone = addFourAges(18, 30, 12, 21);
console.log(someone);

//ES5
var testAges = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, testAges);
console.log(sum2);

//ES6
//spread operator ...
const sum3 = addFourAges(...testAges);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familySanchez = ['Alexis', 'Emelia', 'Ernesto'];
const combinedFamily = [...familySmith, 'Craig Ya Boi', ...familySanchez];
console.log(combinedFamily);

const h = document.querySelector('h1');
const allBoxes = document.querySelectorAll('.box');
const allPage = [h, ...allBoxes];

const changeUp = Array.from(allPage).forEach(cur => cur.style.color = 'purple');























































