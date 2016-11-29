'use strict';
console.log('Let\'s Play!');
//function construct
function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}
Question.prototype.displayQuestion(){
	console.log(this.question);
}

var first_question = new Question('Is Payet better than Ozil?', 
	['yes', 'no'], 1);
//console.log(first_question);
var second_question = new Question('Which Arsenal Player is not on loan?', [
	'Jack Wilshere', 'Aaron Ramsey', 'Joel Campbell'], 1);
var third_question = new Question('What\'s the end of an Arsenal game called in which they hold a narrow lead?'
	, ['They\'ve surely got it', 'We\'ll hit them on the counter', 'Squeaky Bum Time'], 2);

var allQuestions = [first_question, second_question, third_question];

var random = Math.floor(Math.random() * allQuestions.length);
console.log(random);
console.log(allQuestions.length);
allQuestions[random];