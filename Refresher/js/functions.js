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