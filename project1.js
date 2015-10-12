
console.log('Script running');
var die = $('.dice');
var position = $('.board-position');
var turn = 0;
var blue1 = $('.blue #1');
var blue2 = $('.blue #2');
var blue3 = $('.blue #3');
var green1 = $('.green #1');
var green2 = $('.green #2');
var green3 = $('.green #3');


// every board position is currently clickable
position.on('click', function(){
	console.log("click");
});

// function created to show roll of dice 1-6 when pressed
die.on('click',function(){
	die.innerHTML = Math.floor((Math.random()) * 7);
	console.log(die.innerHTML);
	playerTurn();
	homeToStart();
});

 // decide which player's turn it is, when turn is even blue player is up, when turn is odd green player is up
function playerTurn() {
	if (turn % 2 === 0){
		turn += 1;
		console.log("Turn: " + turn);
		}
	else {
		turn += 1;
		console.log("Turn: " + turn)
		};
	}
// move game piece from home position to starting board position
function homeToStart(){
		if (die.innerHTML === 6){
			console.log('move from home or move player on board');
			if(turn % 2 === 0){
				$(this).on('click',function () { 
				console.log('clicked ' + $(this));
				position[0].innerHTML = $(this);
			});
		}
			else if(turn % 2 !== 0) {
					$(this).on('click',function() {
					console.log('clicked ' + $(this));
					position[14].innerHTML = $(this)
				});
			}
		}
	}

function moveForward() {

}
	