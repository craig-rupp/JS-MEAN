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


































