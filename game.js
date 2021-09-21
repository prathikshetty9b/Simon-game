// Array to store button colors
var buttonColors = new Array("red","blue","yellow","green");
// Array to store button sequence
var gamePattern = [];

function nextSequence(){
    //generate radom number from 0 - 3
    var randomNumber = Math.floor(Math.random()*4);
    
    //choose one random color from buttonColors
    var randomChosenColor = buttonColors[randomNumber];
    // store the sequence in an array
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

    // Mapp sound  to corresponding button.
    var playSound = new Audio("./sounds/" + randomChosenColor + ".mp3");
    playSound.play();
    
}

