'use strict';

//alert('Challenges');

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
console.log("Hello");

var scores, roundScore, activePlayer, gamePlaying, checkDice;
gamePlaying = true;
init();

//listerner for dice roll
document.querySelector('.btn-roll').addEventListener('click', function btn(){
	if (gamePlaying) {
		// 1. Random Number
		var dice = Math.floor(Math.random() * 6) + 1;
		console.log(dice);
		// 2. Display Result
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + dice + '.png';
		//
		if(checkDice === 6 && dice === 6){
			scores[activePlayer] = 0;
			document.querySelector('#current-' + activePlayer).textContent = '0';
			nextPlayer();
		}
		// 3. Update the Round Score If the rolled number was not a 1
		else if (dice !== 1){
			//add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
		checkDice = dice;
		console.log('Dice value to evaluate next dice amount :' + checkDice);	
	};
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		scores[activePlayer] += roundScore;
		//console.log(scores);
		//Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		//check if player won the game
		if(scores[activePlayer] >= 150) {
			//document.getElementById('name-' + activePlayer).innerHTML = '<em>Winner</em>';
			document.getElementById('name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();	
		}	
	}
});

function nextPlayer (){
	//Next Player
		//Ternary if active player equals 0/active player is now 1, else active player = 0
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = roundScore;
		document.getElementById('current-1').textContent = roundScore;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
	//player_1score
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	console.log(gamePlaying);

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}



//display dice in id current player
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';







