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
	function (answer, callback)
	{
		var sc;
		if(answer === this.correct){
			 console.log('Good Job, you got it right');
			 sc = callback(true);
		} else {
			console.log('Wrong Answer, try again');
			sc = callback(false);
		}
		this.displayScore(sc);
	}
	Question.prototype.displayScore = 
	function (score)
	{
		console.log("Your current score is " + score);
		console.log("----------------- \n");
	}
	var first_question = new Question('Is Payet better than Ozil?', 
		['yes', 'no'], 1);
	//console.log(first_question);
	var second_question = new Question('Which Arsenal Player is not on loan?', [
		'Jack Wilshere', 'Aaron Ramsey', 'Joel Campbell'], 1);
	var third_question = new Question('What\'s the end of an Arsenal game called in which they hold a narrow lead?'
		, ['They\'ve surely got it', 'We\'ll hit them on the counter', 'Squeaky Bum Time'], 2);

	var allQuestions = [first_question, second_question, third_question];

	function score() {
		var scr = 0;
		return function(correct){
			if(correct){
				scr++;
			}
			return scr;
		}
	}
	var keepScore = score();

	function nextQuestion(){

		var random = Math.floor(Math.random() * allQuestions.length);
		//console.log(random);
		//console.log(allQuestions.length);
		allQuestions[random].displayQuestion();
		//console.log(allQuestions[random]);

		var answer = prompt('Please select the correct answer. If you would not like to answer please type : exit');

		if(answer !== 'exit'){
			allQuestions[random].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();				
		}
	}
	nextQuestion();

	//console.log(random);

})();



