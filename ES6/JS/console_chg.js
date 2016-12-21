'use strict';

//console.log(`Testing 123, Testing`);

class Element {
	constructor(name, buildYear)
	{
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element {
	constructor(name, buildYear, area, numbOfTress)
	{
		super(name, buildYear);
		this.area = area; //km
		this.numbOfTress = numbOfTress;
	}
	treeDensity(){
		const density = this.numbOfTress / this.area;
		console.log(`${this.name} has a tree density of ${density} trees per square km.`);
	}
}

class Street extends Element {
	constructor(name, buildYear, length, size = 3)
	{
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}
	classifyStreet () { 
		const classification = new Map ();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
	}
}

const allParks = [new Park('Green Park', 1985, 0.2, 500),
new Park('National Park', 1862, 6.8, 6000), new Park('Jurassic Park', 1993, 26.5, 10000)];

const allStreets = [new Street('Melorse Ave', 1957, 6.8, 4), 
new Street('Evergreen', 2003, 3.6, 2), new Street('Moran Dr', 1993, 5), new Street('Sunstreet Blvd', 2001, 11, 5)];

function calc(arr) {

	const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
	//[3, 5, 6] first iteration would be 0 (optional reduce where we start prve) + 3 = 3, so then 3 + 5 = 8, then 8 + 6 = 14

	return [sum, sum / arr.length]; 
}

function reportPark(p) {
	console.log('-----------PARKS REPORT ---------');
	// Density
	p.forEach(el => el['treeDensity']());

	//Average Age
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log(`Our ${p.length} has an average age of ${avgAge} years old`);

	//Which parks more than 1,000 tress
	const i = p.forEach(function(el){
		if(el.numbOfTress >= 1000){
			console.log(`${el.name} has more than 1,000 trees`);
		}
	});
}
function reportStreets(s){
	console.log('-----------STREETS REPORT ---------');
	//Total and average length of the town's streets
	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log(`Our ${s.length} streets have a total length of ${totalLength} km,
	with an average of ${avgLength} km.`);
	//Classify sizes
	s.forEach(el => el.classifyStreet());
}


reportPark(allParks);
reportStreets(allStreets);
console.log('Hello checking Alias');















