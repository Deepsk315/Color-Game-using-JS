var colors = randomColorGenerator(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var jumbo = document.querySelector(".jumbotron");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var resetButton = document.querySelector(".reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = randomColorGenerator(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
		if(colors[i])
	{
	
		squares[i].style.background = colors[i];
    }else{
    	squares[i].style.display = "none";
    }


});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = randomColorGenerator(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
		
	{
	
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){
	
colors = randomColorGenerator(numSquares);

pickedColor = pickColor();
colorDisplay.textContent = pickedColor; 

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
}
jumbo.style.background = "#e9ecef";
resetButton.textContent = "NEW GAME";
messageDisplay.textContent = "";
	
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct ! ";
			resetButton.textContent = "Play Again ?";
			colorAll(clickedColor);
			jumbo.style.background = clickedColor;
		} else {
			messageDisplay.textContent = "Incorrect ! Try Again";
			this.style.background = "#232323";

		}
	});
}

function colorAll(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";

}

function randomColorGenerator(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}




