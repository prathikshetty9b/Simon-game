// Array to store button colors
var buttonColors = new Array("red","blue","yellow","green");
// Array to store button sequence
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    /*
    $(this).addClass("pressed");
    setTimeout(function(){
        $(this).removeClass("pressed");
    },100);*/
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);

    //play sound on button click
    playSound(userChosenColor);
})

function nextSequence(){
    //generate radom number from 0 - 3
    var randomNumber = Math.floor(Math.random()*4);
    
    //choose one random color from buttonColors
    var randomChosenColor = buttonColors[randomNumber];
    // store the sequence in an array
    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

    // Mapp sound  to corresponding button.
    playSound(randomChosenColor);
    
}

function playSound(name){
    var playSound = new Audio("./sounds/" + name + ".mp3");
    playSound.play();
    
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed"); 
    },100);
}