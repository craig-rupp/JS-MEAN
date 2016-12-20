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
isFullAge5(11, 1990, 1999, 1960);
//console.log('second function call');
//isFullAge5(1990, 1999, 1960, 2001, 1987);

//ES6
//rest allows multitude of parameters
function isFullAge6(limit, ...years){
	//console.log(years);
	years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(25, 1990, 1999, 1960, 2016, 1998);


