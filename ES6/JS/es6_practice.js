'use stict';
console.log('Hello Amigos');

//Arrow Functions

//ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		var self = this;
		document.querySelector('.green').addEventListener('click', function(){
			alert('This is the ' + self.color + 'box.' + ' Which is in the ' +
				self.position + ' position.');
		});
	}
}

//box5['clickMe']();
//box5.clickMe();

//ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe : function (){
		document.querySelector('.green').addEventListener('click', () => {
			let str = 'You have selected the ' + this.color + ' box. Which is in the ' + this.position + ' position.';
			alert(str);
		});
	}
}
box6.clickMe();