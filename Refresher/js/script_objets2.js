'use strict';

//alert('Simulation');
console.log('Second go round with Objects');

//Functions returning Functions

function intervewQuestion(job){
	if(job === 'designer'){
		return function (name){
			console.log("What does UX mean " + name + '?');
		}
	} else if (job === 'director'){
		return function (name) {
			console.log(name + " what is your favorite film?");
		}
	} else {
		return function (name) {
			console.log("What do you do, " + name + "?");
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
	console.log(score >= 4);
})();

(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(3);