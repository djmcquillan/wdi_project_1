
console.log('Script running');
var header = $('.header')
var dice = document.querySelector('.dice');
var boardPosition = $('.board-position');
var turn = 1;
var bluePiece = $("[data-id = 'blue']");
var greenPiece = $("[data-id = 'green']");
var cop = $("[data-id = 'cop']");
var homeBlue = document.querySelector('.home-blue');
var homeGreen = document.querySelector('.home-green');
var homeCop = document.querySelector('.home-cop');
var startGame = document.querySelector('.start-game');
var blueMove = 0; 
var greenMove =0; 
var dieValue=0;
var container = $('.board-container');
var trackContainer = $('.track-container');
var width = container.width()
var height = container.height()
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var whosMove = document.querySelector('.player-turn');
// var gameTime = $('.game-time');
var inputPlayer1 = document.querySelector('.input-player-1');
var inputPlayer2 = document.querySelector('.input-player-2');


// boardLayout function is used to set up the board in a circle.  Each board-position element is given a position relative to the center point
function boardLayout() {
    var radius = 250;
    var angle = 86.5;
    var step = (2*Math.PI) / boardPosition.length;
    boardPosition.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
       
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
}
boardLayout();


$('.modal').hide();
$('.instruction-modal').hide();
    $(document).ready(function(){
        $('.modal').fadeIn(1000);
        trackContainer.fadeOut(1000);
    });
    $('.instruction-button').on('click', function(){
    	$('.instruction-modal').show();
    });
    $('.hide-instruction-button').on('click', function() {
    	$('.instruction-modal').hide();
    });
    $('.player-button').on('click', function(){
        $('.modal').fadeOut(1000);
        console.log(player1);
        player1.innerHTML = inputPlayer1.value;
        player2.innerHTML = inputPlayer2.value;
        whosMove.innerHTML = inputPlayer1.value + " its your turn!";
        trackContainer.fadeIn(1000);

    	setInterval(function(){
    		var copPosition = Math.floor((Math.random()) * 27);
			boardPosition.eq(copPosition).append(cop);
  		}, 1000);
  	})


// function created to show roll of dice 1-6 when pressed, movement around board is based on the roll of the dice
dice.addEventListener('click', function(){
	dice.innerHTML = 1 + Math.floor(Math.random() * 6);
	dieValue = parseInt(dice.innerHTML, 10);
	playerTurn();	

	if (turn % 2 !== 0){
		//smiley's turn
		if (homeGreen.innerHTML !== ""){
			//if smiley is home
			if(dieValue === 6){
				//dice has to equal 6 before we move smiley
				boardPosition.eq(0).append(greenPiece);
				homeGreen.innerHTML = "";
				backToStart();			
			}
		} else {
			// smiley's not home
			greenMove = Number(greenPiece.parent().attr('data-id')) + dieValue;
			if (greenMove > boardPosition.length){
				// alert("You must land exactly at the safe house!"); 
			} else {
				moveForward(greenMove, greenPiece);
			}
		} 
	} else {
		//frownie's turn
		if (homeBlue.innerHTML !== "") {
			//frownie's home
			if(dieValue === 6){
				boardPosition.eq(0).append(bluePiece);
				homeBlue.innerHTML = "";
				backToStart();
			}
		} else {
			//frownie's not home
			blueMove = Number(bluePiece.parent().attr('data-id')) + dieValue;
			if (blueMove > boardPosition.length){
				// alert("You must land exactly at the safe house!");
			} else {
				moveForward(blueMove, bluePiece);
			}
		}
	};
});




 // decide which player's turn it is, when turn is even blue player is up, when turn is odd green player is up
function playerTurn() {
	if (turn % 2 === 0){
		turn += 1;
		whosMove.innerHTML = inputPlayer1.value + " its your turn!" ;
		console.log("Turn: " + turn);
		}
	else {
		turn += 1;
		whosMove.innerHTML = inputPlayer2.value + " its your turn!";
		console.log("Turn: " + turn);
		};
	}

// move forward function takes the number rolled and adds it to the data-id value of the parent of the gamepiece.  
// This value is equal to the data-id of where the gamepiece is being appended
function moveForward(move, piece) {
	console.log('moveForward');
	boardPosition.eq(move).append(piece);
	backToStart();
	winner();	
}
// the backToStartfunction sends gamepiece back to the start if it is 'landed on' by opposing gamepiece or floating cop piece
function backToStart() {
	if(cop.parent().attr('data-id') === bluePiece.parent().attr('data-id')){
			$(homeBlue).append(bluePiece);
			alert("You've been busted and brought back to jail!");
	}
	else if(cop.parent().attr('data-id') === greenPiece.parent().attr('data-id')){
			$(homeGreen).append(greenPiece);
			alert("You've been busted and brought back to jail!");
	}

	else if(turn % 2 !== 0){
		if(greenPiece.parent().attr('data-id') === bluePiece.parent().attr('data-id')){
			$(homeBlue).append(bluePiece);
			alert("You were ratted out and sent back to jail!");
		}
	}
	else if(turn % 2 === 0){
			if(greenPiece.parent().attr('data-id') === bluePiece.parent().attr('data-id')){
			$(homeGreen).append(greenPiece);
			alert("You were ratted out and sent back to jail!");
			}
		}
	}	

function winner () {
		if (bluePiece.parent().attr('data-id') === "28"){
			alert(inputPlayer1.value + " Wins! Press Okay to start a new game.")
			location.reload();
		}
		else if(greenPiece.parent().attr('data-id') === "28"){
			alert(inputPlayer2.value + " Wins! Press okay to start a new game")
			location.reload();
		}
	}
		
		

				

			
			
			

		