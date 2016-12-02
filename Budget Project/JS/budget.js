'use strict';
//console.log('Ya boi');

var budgetController = (function(){
	

})();

var UIController = (function(){



})();


var appController = (function(budgetCtrl, UiCtrl){

	var controlAddItem = function(){
		
		//1. Get filed input data

		//2. Add item to the budget controller

		//3. Add item to the UI

		//4. Calculate the budget

		//5. Display the budget

		console.log('functino worked');
	}

	document.querySelector('.add__btn').addEventListener('click', controlAddItem);

	document.addEventListener('keypress', function(event){
		if(event.keyCode === 13 || event.which === 13){
			controlAddItem();
		}
	});

})(budgetController, UIController);