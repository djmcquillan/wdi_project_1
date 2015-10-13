
console.log('Script running');
var dice = $('.dice');
var boardPosition = document.querySelectorAll('.board-position');
var turn = 0;
var bluePiece = $('.blue');
var greenPiece = $('.green');
var blueStart = $('[data-id = "slot1"]');
var greenStart = $('[data-id = "slot15"]');


// function created to show roll of dice 1-6 when pressed
dice.on('click',function(){
	dice = Math.floor((Math.random()) * 7);
	console.log(die);
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
			console.log('move from home or move player on board');
			if(turn % 2 === 0){
				bluePiece.click(function(){
				$(this).detach();
					blueStart.append($(this));
					});
			}
			else if(turn % 2 !== 0){
				greenPiece.click(function(){
				$(this).detach();
					greenStart.append($(this));
					});	
			}
		}
	}

function moveForward() {
			
			bluePiece.click(function(){
				console.log('clicked blue');
				$(this).detach();
				// boardPosition[die].append($(this));
				});
			}	

		