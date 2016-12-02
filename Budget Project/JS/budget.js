'use strict';
//console.log('Ya boi');

var budgetController = (function(){
	

})();

var UIController = (function(){
	var DOMStrings = {
		inputType : '.add__type',
		inputDesc : '.add__description',
		inputVal : '.add__value',
		inputBtn : '.add__btn'
	};

	return {
		getInput : function(){
			return {
			type : document.querySelector(DOMStrings.inputType).value, // Will be either income or expense
			description : document.querySelector(DOMStrings.inputDesc).value, // input add description
			value : document.querySelector(DOMStrings.inputVal).value	// number value
			};
		},

		getDomStrings : function(){
			return DOMStrings;
		}
	};

})();


var appController = (function(budgetCtrl, UiCtrl){

	var setupEventListener = function (){

		var DOM = UiCtrl.getDomStrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', controlAddItem);

		document.addEventListener('keypress', function(event){
			if(event.keyCode === 13 || event.which === 13){
				controlAddItem();
			}
		});
	};


	var controlAddItem = function(){

		//1. Get filed input data
			var input = UiCtrl.getInput();
			console.log(input);

		//2. Add item to the budget controller

		//3. Add item to the UI

		//4. Calculate the budget

		//5. Display the budget
	};

	return {
		init : function(){
			console.log('Application has started.');
			setupEventListener();
		}
	};

})(budgetController, UIController);

appController.init();

