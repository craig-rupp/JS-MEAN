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
var totalAge = [];
function determineAgeBorn(yearsBorn){
	for(var i = 0; i < yearsBornArray.length; i++){
		console.log(yearsBornArray[i]);
		totalAge.push((2016 - yearsBornArray[i]));
	}	
}

determineAgeBorn(yearsBornArray);
console.log(totalAge);





































