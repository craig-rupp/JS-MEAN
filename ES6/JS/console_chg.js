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
	classifyStreet (){
		const classification = new Map ();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, build in ${this.year}, is a ${classification.get(this.size)} street.`)
	}
}







