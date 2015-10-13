
console.log('Script running');
var dice = $('.dice');
var boardPosition = $('.board-position');
var turn = 0;
var bluePiece = $('[data-id = "blue"]');
var greenPiece = $('[data-id = "green"]');
// var blueStart = $('[data-id = "0"]');
// var greenStart = $('[data-id = "14"]');
var homeBlue = $('.blue-home');
var homeGreen = $('.green-home');
var blueMove; 
var greenMove; 





// function created to show roll of dice 1-6 when pressed
dice.on('click',function(){
	dice = Math.floor((Math.random()) * 7);
	blueMove = Number(bluePiece.parent().attr('data-id')) + dice;
	greenMove = Number(greenPiece.parent().attr('data-id')) + dice;
	console.log(dice);
	playerTurn();
	homeToStart();
	moveForward();
});

 // decide which player's turn it is, when turn is even blue player is up, when turn is odd green player is up
function playerTurn() {
	if (turn % 2 === 0){
		turn += 1;
		console.log("Turn: " + turn);
		}
	else {
		turn += 1;
		console.log("Turn: " + turn);
		};
	}

// move game piece from home position to starting board position
function homeToStart(){
		if (dice === 6){
			if(turn % 2 === 0){
				boardPosition.eq(0).append(bluePiece);
					}
			else if(turn % 2 !== 0){
				boardPosition.eq(14).append(greenPiece);
					}	
			}
		}

function moveForward() {
			if(homeBlue.innerHTML === ''){
				if(turn % 2 === 0){
					bluePiece.parent().attr('data-id') 
				// boardPosition.eq(blueMove).append(bluePiece);
				}
				else if(homeGreen.innerHTML === ''){
					if(turn % 2 !==0){
						boardPosition.eq(greenMove).append(greenPiece);
					}
				}
			}
		}
			

		