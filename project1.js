
console.log('Script running');
var dice = document.querySelector('.dice');
var boardPosition = $('.board-position');
// var boardPosition = document.querySelectorAll('[data-id]');
var turn = 0;
var bluePiece = $("[data-id = 'blue']");
var greenPiece = $("[data-id = 'green']");
// var bluePiece = "<img src=http://www.clker.com/cliparts/C/9/G/X/L/h/ludo-piece-peacock-blue-hi.png>";
// var greenPiece = "<img src=http://www.clker.com/cliparts/U/P/9/B/c/V/ludo-piece-green-th.png>";
var homeBlue = document.querySelector('.home-blue');
var homeGreen = document.querySelector('.home-green');
var blueMove =0; 
var greenMove =0; 
var dieValue=0;
// var positionBlue = {current: 0};
// var positionGreen = {current:0};





// function created to show roll of dice 1-6 when pressed
dice.addEventListener('click', function(){
	dice.innerHTML = 1 + Math.floor(Math.random() * 6);
	dieValue = parseInt(dice.innerHTML, 10); 
	blueMove = Number(bluePiece.parent().attr('data-id')) + dieValue;
	greenMove = Number(greenPiece.parent().attr('data-id')) + dieValue;
	console.log(dice);
	playerTurn();
	homeToStart();
if((homeBlue.innerHTML === "") || (homeGreen.innerHTML === "")){
	moveForward();
}

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
	if(dice.innerHTML === "6"){
			if(turn % 2 === 0){
				boardPosition.eq(0).append(bluePiece);
				homeBlue.innerHTML = "";
					}
			else if(turn % 2 !== 0){
				boardPosition.eq(0).append(greenPiece);
				homeGreen.innerHTML = "";
					}	
				}
			}	

function moveForward() {
		console.log('moveForward')
	if(turn % 2 === 0){
		boardPosition.eq(blueMove).append(bluePiece);
		}
		else if(turn % 2 !== 0){
		boardPosition.eq(greenMove).append(greenPiece);
		}
		backToStart();
	}

	function backToStart() {
		if(turn % 2 === 0){
			if(greenPiece.parent().attr('data-id') === bluePiece.parent().attr('data-id')){
				boardPosition.eq(0).append(greenPiece);
			}
		}
			else if(turn % 2 !== 0){
				if(greenPiece.parent().attr('data-id') === bluePiece.parent().attr('data-id')){
				boardPosition.eq(0).append(bluePiece);
			}
		}

	}

	// function winner {

	// }
		
		

				

			
			
			

		