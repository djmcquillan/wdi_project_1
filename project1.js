
console.log('Script running');
var header = $('.header')
var dice = document.querySelector('.dice');
var boardPosition = $('.board-position');
var turn = 0;
var bluePiece = $("[data-id = 'blue']");
var greenPiece = $("[data-id = 'green']");
var homeBlue = document.querySelector('.home-blue');
var homeGreen = document.querySelector('.home-green');
var startGame = document.querySelector('.start-game');
var blueMove =0; 
var greenMove =0; 
var dieValue=0;
var container = $('.board-container')
var width = container.width()
var height = container.height()
var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");


// startGame.addEventListener('click', function() {
//  prompt("Player 1 enter your name", "Enter name here");
// if (player1 != null) {
//     player1.innerHTML = ("Player1: " + player1);
// }
//  prompt("Player 2 enter your name", "Enter name here");
// if (player1 != null) {
//     player2.innerHTML = ("Player2: " + player2);
// }
// })
// boardLayout function is used to set up the board in a circle.  Each board-position element is given a position relative to the center point
function boardLayout() {
    var radius = 250;
        angle = 0, step = (2*Math.PI) / boardPosition.length;
    boardPosition.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
}
boardLayout();


// function created to show roll of dice 1-6 when pressed
dice.addEventListener('click', function(){
	dice.innerHTML = 1 + Math.floor(Math.random() * 6);
	dieValue = parseInt(dice.innerHTML, 10); 
	blueMove = Number(bluePiece.parent().attr('data-id')) + dieValue;
	greenMove = Number(greenPiece.parent().attr('data-id')) + dieValue;
	console.log(dice);
	playerTurn();
	homeToStart();

	// only run the move forward function if pieces are out of home
if((homeBlue.innerHTML === "") || (homeGreen.innerHTML === "")){
	moveForward();
}

});

 // decide which player's turn it is, when turn is even blue player is up, when turn is odd green player is up
// this function needs improvement, player should roll again if they roll a 6, currently this is acting as strictly a turn counter
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

// move game piece from home position to starting board position, and set home position to empty
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

// move forward function takes the number rolled and adds it to the data-id value of the parent of the gamepiece.  
// This value is equal to the data-id of where the gamepiece is being appended

function moveForward() {
		console.log('moveForward')
	if(turn % 2 === 0){
		boardPosition.eq(blueMove).append(bluePiece);
		}
		else if(turn % 2 !== 0){
		boardPosition.eq(greenMove).append(greenPiece);
		}
		backToStart();
		winner();
	}
// the backToStartfunction sends gamepiece back to the start if it is 'landed on' by opposing gamepiece
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

	function winner () {
		if (bluePiece.parent().attr('data-id') === "28"){
			alert("Blue Player Wins! Press Okay to play again.")
			location.reload();
		}
		else if(greenPiece.parent().attr('data-id') === "28"){
			alert("Green Player Wins! Press okay to play again.")
			location.reload();
		}
	}
		
		

				

			
			
			

		