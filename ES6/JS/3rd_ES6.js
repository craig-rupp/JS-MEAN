'use strict';
console.log('Hello third practice');

//Rest Parameters

//ES5
function isFullAge5() {
	//console.log(arguments);
	var argsArray = Array.prototype.slice.call(arguments);
	argsArray.forEach(function(cur){
		console.log((2016 - cur) >= 18);
	})
}
//isFullAge5(1990, 1999, 1960);
//console.log('second function call');
//isFullAge5(1990, 1999, 1960, 2001, 1987);

//ES6
function isFullAge6(...years){
	//console.log(years);
	years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1960, 2016, 1998);
