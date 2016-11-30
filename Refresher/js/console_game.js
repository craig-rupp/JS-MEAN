'use strict';
//console.log('Let\'s Play!');
//function construct
(function (){

	function Question(question, answers, correct){
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}
	Question.prototype.displayQuestion = 
	function ()
	{
		console.log(this.question);
		for (var i = 0; i < this.answers.length; i++){
			console.log(i + ": " + this.answers[i]);
		}
	}
	Question.prototype.checkAnswer = 
	function (answer)
	{
		if(answer === this.correct){
			 console.log('Good Job, you got it right');
		} else {
			console.log('Wrong Answer, try again');
		}
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
	//console.log(random);
	//console.log(allQuestions.length);
	allQuestions[random].displayQuestion();
	//console.log(allQuestions[random]);

	var answer = parseInt(prompt('Please select the correct answer.'));
	allQuestions[random].checkAnswer(answer);
	//console.log(random);

})();



