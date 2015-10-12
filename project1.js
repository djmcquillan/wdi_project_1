
console.log('Script running');
var die = $('.dice');
var position = $('.board-position');
var turn = 0;
var player1;
var player2;


// every board position is currently clickable
position.on('click', function(){
	console.log("click");
});

// function created to show roll of dice 1-6 when pressed
die.on('click',function(){
	this.innerHTML = Math.floor((Math.random()) * 7);
	console.log(die);
	playerTurn();
});

 // decide which player's turn it is, when turn is even blue player is up, when turn is odd green player is up
function playerTurn() {
	if (turn % 2 === 0){
		turn += 1;
		console.log(turn);
		}
	else {
		turn += 1;
		console.log(turn)
		};
	}
	