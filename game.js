var buttonColors = new Array("red", "blue", "yellow", "green");

var gamePattern = [];
var userClickedPattern = [];

var toggle = false;
var level = 0;

//game starts when a key is pressed
$(document).keypress(function () {
    if (!toggle) {
        $("#level-title").text("Level " + level);
        nextSequence();
        toggle = true;
    }
});

//button click logic
$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    //console.log(userClickedPattern);

    //play sound on button click & animate the button.
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    //Check if the users sequence matches with the games sequence
    checkAnswer(userClickedPattern.length - 1); // length - 1 because index starts with 0
});

//Validation logic
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        //console.log("success");
        
        // Next Level
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {// When user input sequence doesn't match with the games sequence

        playSound("wrong");

        // Show Game Over Message
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Reset game
        startOver();
    }
}

// Function to generate random sequence
function nextSequence() {
    // Reset User Input every round
    userClickedPattern = [];

    //Level 
    level ++;
    $("#level-title").text("Level " + level);

    //generate radom number from 0 - 3
    var randomNumber = Math.floor(Math.random() * 4);

    //choose one random color from buttonColors
    var randomChosenColor = buttonColors[randomNumber];
    // store the sequence in an array
    gamePattern.push(randomChosenColor);

    //Button Animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // Map sound  to corresponding button.
    playSound(randomChosenColor);

}

//Functiom to play desired sound 
function playSound(name) {
    var playSound = new Audio("./sounds/" + name + ".mp3");
    playSound.play();

}

// Fuction animates the element with id #currentColor
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// function to  reset game
function startOver() {
    level = 0;
    gamePattern = [];
    toggle = false;

}