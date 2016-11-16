'use strict';

function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	//console.log(age);
	return age;
}

calculateAge(1990);
//console.log(craigAge);

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement >= 0){
		console.log(name + ' retires in ' + retirement + ' years.');	
	} else {
		console.log(name + ' has already retired.');
	}
}


yearsUntilRetirement('Dad', 1961);
yearsUntilRetirement('Mom', 1963);
yearsUntilRetirement('Colleen', 1987);
yearsUntilRetirement('Janice', 1935);


var names = ['Steve', 'Lisa', 'Craig'];
var years = new Array(1963, 1961, 1990);

console.log(names[2]);
console.log(years[1]);
names[1] = 'Janice';
console.log(names);

var craig = ['Craig', 'Rupp', 1990, 'velociraptor', false];

craig.unshift('Mr.');
craig.pop();
console.log(craig);
craig.push('blue');
console.log(craig.indexOf(1990));
craig.shift();
console.log(craig);

console.log(craig.indexOf(1990));

if(craig.indexOf('velociraptor') === -1){
	console.log('Craig is not a dinosaur');
	// === -1 is the result of indexOf should the element not be maintained in the array
} else {
	console.log('Craig is a velociraptor');
}




