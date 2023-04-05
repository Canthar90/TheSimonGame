var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []; 


function playSound(soundName){
    var currSound = new Audio("sounds/" + soundName + ".mp3");
    currSound.play();
}


function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 150);
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("button, "+  "." + randomChosenColour).fadeOut(180).fadeIn(180);

    playSound(randomChosenColour)
}


nextSequence()




$("div .btn").click(function (){
    var colorName = $(this).attr("id");
    console.log(colorName);
    
    playSound(colorName);
    animatePress(colorName);
    

    userClickedPattern.push(colorName)
    
});