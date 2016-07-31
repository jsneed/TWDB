/*
var colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)"
];
*/
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    for(var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame(numSquares);
        });
    }

    for(var i = 0; i < squares.length; i++)
    {
        //Add click listener to each square
        squares[i].addEventListener("click", function(){
            //Get color of clicked square
            var clickedColor = this.style.background;

            //Compare color to picked color
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.background = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

    resetGame(numSquares);
}

/*
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3
    resetGame(numSquares);
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    resetGame(numSquares);
});
*/
resetButton.addEventListener("click", function(){
    resetGame(numSquares);
    resetButton.textContent = "New Colors";
});

function resetGame(num)
{
    //Generate all new colors
    colors = generateRandomColors(num);

    //Pick a new random winning color
    pickedColor = pickColor();

    //Change color of squares
    colorDisplay.textContent = pickedColor;

    //Update color of squares
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else
        {
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}

function changeColors(newColor)
{
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = newColor;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
