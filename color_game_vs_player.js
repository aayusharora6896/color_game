var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var p = document.querySelector("p");
var resetButton = document.querySelector("#resetButton");
var easyButtons = document.querySelectorAll("#easyButton");
var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".mode");
var player1Display = document.querySelector("#player1Display");
var player2Display = document.querySelector("#player2Display");
var player1Score = document.querySelector(".player1Score");
var player2Score = document.querySelector(".player2Score");
var empty1 = document.querySelector(".empty1");
var empty2 = document.querySelector(".empty2");
var count =0;
var score1 =0;
var score2 =0;
var player = 0;
var container =document.querySelector(".grid_container_header");

function reset(){
    count = 0;
    score1 = 0;
    score2 = 0;
    colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
    p.style.background = "steelblue";
    container.style.background = "steelblue";
    player1Score.style.backgroundColor = "steelblue";
    player2Score.style.backgroundColor = "steelblue";
    empty1.style.backgroundColor = "steelblue";
    empty2.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player = 1;
    reset();
});

colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player = 1;
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numberOfSquares = 3;
    reset();
})

hardButton.addEventListener("click", function(){
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    numberOfSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    reset();  
})

alert("player 1 ready??");
player = 1;
for(var i=0; i< squares.length; i++){
   //add initial colors to squares.
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares.
    squares[i].addEventListener("click", function(){
    //grab color of clicked square.
    var clickedColor = this.style.backgroundColor; 
     //compare color to pickedColor
    if(clickedColor === pickedColor){
      message.textContent = "Correct";
      changeColors(clickedColor);
      p.style.backgroundColor = clickedColor;
      container.style.backgroundColor = clickedColor;
      player1Score.style.backgroundColor = clickedColor;
      player2Score.style.backgroundColor = clickedColor;
      empty1.style.backgroundColor = clickedColor;
      empty2.style.backgroundColor = clickedColor;
      
      if(player === 0){
          if(parseInt(player1Score.textContent)>parseInt(player2Score.textContent)){
              alert("Player 1 wins the round");
              location.reload();
          }
          else if(parseInt(player1Score.textContent)<parseInt(player2Score.textContent)){
              alert("Player 2 wins the round");
              location.reload();
          }
          else{
              alert("Its a draw! Please Start Again");
               location.reload();
          }
      }
      else if(player === 1){
        Score1 = numberOfSquares - count;
        player1Score.textContent = Score1;
        setTimeout(function(){
            nextTurn();
        },500);
      }
      else{
        Score2 = numberOfSquares - count;
        player2Score.textContent = Score2;
        player = 0; 
        }
   
    }
    else {
        count = count + 1;
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
     }    

    });
}


function nextTurn(){
    alert("player 2 ready");
    player = 2;
    count = 0;
    reset();
}


function changeColors(color){
    //loop through all squares
    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateRandomColors(numberOfItems){
    //make an array
    var arr = []
    //add random colors to the array
    for(var i=0; i<numberOfItems; i++){
        //getRandom Color and push into array.
       arr[i]= randomColor();
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r= Math.floor(Math.random()*256);
    //pick a green from 0 - 255
    var g= Math.floor(Math.random()*256);
    //pick a blue from 0 - 255
    var b= Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}