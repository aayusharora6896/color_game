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
var score1 = 0;
var count = 0;
var player1Display = document.querySelector("#player1Display");
var player1Score = document.querySelector(".player1Score");
var empty1 =document.querySelector(".empty1");
var empty2 =document.querySelector(".empty2");
var container =document.querySelector(".grid_container_header");

function reset(){
    empty1.style.backgroundColor = "steelblue";
    empty2.style.backgroundColor = "steelblue";
    player1Score.style.backgroundColor = "steelblue";
    player1Score.textContent = 0;
    score1 = 0;
    count = 0;
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
}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numberOfSquares = 3;
    reset();
})

hardButton.addEventListener("click", function(){
    numberOfSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    reset();  
})


for(var i=0; i< squares.length; i++){
   //add initial colors to squares.
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares.
    squares[i].addEventListener("click", function(){
    //grab color of clicked square.
    var clickedColor = this.style.backgroundColor; 
     //compare color to pickedColor
    if(clickedColor === pickedColor){
       score1 = numberOfSquares - count;
       player1Score.textContent = score1;
       player1Score.style.backgroundColor = clickedColor;
       empty1.style.backgroundColor = clickedColor;
       empty2.style.backgroundColor = clickedColor;
      message.textContent = "Correct";
      changeColors(clickedColor);
      p.style.backgroundColor = clickedColor;
      container.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again";
    }
    else {
        count = count + 1;
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
     }    
    });
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