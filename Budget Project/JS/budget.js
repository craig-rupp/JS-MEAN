'use strict';
//console.log('Ya boi');

var budgetController = (function(){
	//console.log('Hello');
	//private variable
	var x = 23;
	//private function
	var add = function(a){
		return x + a;
	}
	//closure with access to variable/function above 
	return {
		publicTest: function(b){
			return add(b);
		}
	}
})();

var UIController = (function(){



})();


var appController = (function(budgetCtrl, UiCtrl){

	var z = budgetCtrl.publicTest(15);

	return {
		otroPublicMethod : function(){
			console.log(z);
		}
	}

})(budgetController, UIController);