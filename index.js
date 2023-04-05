


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("button, "+  "." + randomChosenColour).fadeOut(180).fadeIn(180);

alert(randomChosenColour + ".mp3")

var currSound = new Audio("sounds/" + randomChosenColour + ".mp3");
currSound.play();
