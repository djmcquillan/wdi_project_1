
console.log('Script running');
var die = $('.dice');
var position = $('.board-position');
var turn = 0;
var blue1 = $('#blue1');
var blue2 = $('#blue2');
var blue3 = $('#blue3');
var green1 = $('#green1');
var green2 = $('#green2');
var green3 = $('#green3');


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
				// blue1.on('click',function () { 
					console.log('clicked ' + blue1);
					position[0].innerHTML = blue1;
			// })
			}
			else if(turn % 2 !== 0) {
					// green1.on('click',function() {
					console.log('clicked ' + green1);
					position[14].innerHTML = green1;
				// });
			}
		}
	}

// function moveForward() {
// 		if()
// }
	