'use strict';
//console.log('Ya boi');

var budgetController = (function(){

	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems : {
			exp : [],
			inc : []
		},
		total : {
			exp : 0,
			inc : 0
		}
	};	

	return {
		addItem : function(type, des, val) {
			var newItem, ID;

			if(data.allItems[type].length > 0){
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			//creatae new item based on 'exp' or 'inc' type
			if(type === 'exp'){
				newItem = new Expense(ID, des, val);
				console.log(newItem);
			} else if (type === 'inc'){
				newItem = new Income(ID, des, val);
			}
			//push into our data structure
			data.allItems[type].push(newItem);
			return newItem;
		},
		testing : function() {
			console.log(data);
		}
	}

})();

//UI Controller
var UIController = (function(){
	var DOMStrings = {
		inputType : '.add__type', 
		inputDesc : '.add__description',
		inputVal : '.add__value',
		inputBtn : '.add__btn',
		incomeContainer : '.income__list',
		expensesContainer : '.expenses__list'
	};

	return {
		getInput : function(){
			return {
			type : document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
			description : document.querySelector(DOMStrings.inputDesc).value, // input add description
			value : document.querySelector(DOMStrings.inputVal).value	// number value
			};
		},

		getDomStrings : function(){
			return DOMStrings;
		},

		addListItem : function(object, type){
			var html, newHTML, element;
			// HTML String w/placeholder item
			 if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
			//replace placeholder text with data
			newHTML = html.replace('%id%', object.id);
			newHTML = newHTML.replace('%description%', object.description);
			newHTML = newHTML.replace('%value%', object.value);
			//Insert HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

		},

		clearFields : function(){
			var fields;
			fields = document.querySelectorAll(DOMStrings.inputDesc + ', ' + DOMStrings.inputVal);
			//returns list, use array global object to slice (turn fields into array)
			var fieldsArray = Array.prototype.slice.call(fields);
			//foreach through each value and set to empty string
			fieldsArray.forEach(function(current,index,array){
				current.value = "";
				//console.log(current);
				//console.log(index);
			});
			//return focus to first 'description, input value'
			fieldsArray[0].focus();
		}
	};

})();

//GLOBAL APP Controller
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
			var input, newItem;
		//1. Get filed input data
			var input = UiCtrl.getInput();
			//console.log(input);

		//2. Add item to the budget controller
			var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		//3. Add item to the UI
			UiCtrl.addListItem(newItem, input.type);

		//4. Clear the fields
			UiCtrl.clearFields();

		//5. Calculate the budget

		//6. Display the budget
	};

	return {
		init : function(){
			console.log('Application has started.');
			setupEventListener();
		}
	};

})(budgetController, UIController);

appController.init();

