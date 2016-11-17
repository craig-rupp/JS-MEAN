'use strict';

//console.log('Time to refresh some loop JS knowledge');

for (var i = 0; i < 10; i++){
	//console.log(i);
}

var family = ['Steve', 'Lisa', 'Colleen', 'Rachel', 'Craig', 'Molly'];
//console.log(family[5]);
//console.log(family.length);

for (var i = 0; i < family.length; i++) {
	//console.log(family[i]);
};
for (var i = family.length - 1; i >= 0; i--){
	//console.log(family.length);
	//console.log(i);
	//console.log(family[i]);
}

//While loop
var i = 0;
while(i < family.length){
	//console.log(family[i]);
	i++;
}

for (var i = 0; i <= 5; i++){
	//console.log(i);
	if(i === 5){
		break;
	}
	if(i === 2){
		continue;
	}
	//console.log(i);
}

var yearsBornArray = [1999, 1990, 1987];
for (var i = yearsBornArray.length - 1; i >= 0; i--) {
	//console.log(yearsBornArray[i]);
}
//console.log('Counting up now');
for (var i = 0; i < yearsBornArray.length; i++){
	//console.log(yearsBornArray[i]);
}
var emptyArray = [];

var i = 0;
while(i < yearsBornArray.length){
	emptyArray.push(yearsBornArray[i]);
	i++;
}
//console.log(emptyArray[2], emptyArray);
var secondTest = [1776, 2005, 2001, 1945];
var thirdTest = [1994, 2006, 1568, 1973, 1999];
var totalAge = [];
var oldEnough = [];
function determineAgeBorn(yearsBorn){
	if(totalAge.length > 0){
		do{
			totalAge.pop();
		} while (totalAge.length > 0);
	}

	for(var i = 0; i < yearsBorn.length; i++){
		totalAge.push((2016 - yearsBorn[i]));
	}
	console.log(totalAge);

	if(oldEnough.length > 0){
		do {
			oldEnough.pop();
		} while (oldEnough.length > 0);
	}

	for(var i = 0; i < totalAge.length; i++){
		if(totalAge[i] > 18){
			oldEnough.push(true);
		} else {
			oldEnough.push(false);
		}
	}

	console.log(oldEnough);	
}

determineAgeBorn(yearsBornArray);
determineAgeBorn(secondTest);
determineAgeBorn(yearsBornArray);
determineAgeBorn(thirdTest);


var userYears = [];

do {
	var ask = confirm("Would you like to add another year?");
	if(ask){
		var years = prompt('Please enter a year : ');
		userYears.push(years);	
	}
	console.log(userYears);
} while (ask == true);

determineAgeBorn(userYears);
//console.log(totalAge);





































