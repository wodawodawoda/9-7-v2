var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);


var pickRock = document.getElementById('js-PlayerPick_rock'),
	pickPaper = document.getElementById('js-PlayerPick_paper'),
	pickScissors = document.getElementById('js-PlayerPick_scissors');

pickRock.addEventListener('click', function () {
	playerPick('rock')
});
pickPaper.addEventListener('click', function () {
	playerPick('paper')
});
pickScissors.addEventListener('click', function () {
	playerPick('scissors')
});

