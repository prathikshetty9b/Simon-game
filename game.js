var buttonColors = new Array("red","blue","yellow","green");
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    var playSound = new Audio("./sounds/" + randomChosenColor + ".mp3");
    playSound.play();
    
}

