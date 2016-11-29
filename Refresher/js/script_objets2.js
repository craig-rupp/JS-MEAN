'use strict';

//alert('Simulation');
console.log('Second go round with Objects');

//Functions returning Functions

function intervewQuestion(job){
	if(job === 'designer'){
		return function (name){
			//console.log("What does UX mean " + name + '?');
		}
	} else if (job === 'director'){
		return function (name) {
			//console.log(name + " what is your favorite film?");
		}
	} else {
		return function (name) {
			//console.log("What do you do, " + name + "?");
		}
	}
}

var designQ = intervewQuestion('designer');
designQ('Steven');
var BenF = intervewQuestion('director');
BenF('Craig');
BenF('Ben');
intervewQuestion('actor')('Ernesto');

//IIFE

(function () {
	var score = Math.random() * 10;
	//console.log(score >= 4);
})();

(function (goodLuck) {
	var score = Math.random() * 10;
	//console.log(score >= 5 - goodLuck);
})(3);

//Closures

function retirement(retirementAge){
	var a = " years left until retirement.";
	return function(yearOfBirth){
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}
var retirementUs = retirement(66);
retirementUs(1990);
//retirement(66)(1990); same way as calling above

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementGermany(1990);
retirementIceland(1990); 


function intQuestion(job){
	var a = " Do you like to style in CSS";
	var b = " What would you do to become an actor in Hollywood,"
	return function(name){
		if(job === 'designer'){
			console.log(name + " what is your favorite webstyle design?" + a + ", " + name + "?");
		} else if (job === 'Actor') {
			console.log("What type of genre do you prefer acting in " + name + '?' + b + " " + name + "?");
		}
	}
}
intQuestion('designer')('Craig');
var Actor = intQuestion('Actor');
Actor('Tayo');








