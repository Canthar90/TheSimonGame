var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []; 
var level = 0
var faliChecker = false;

function patternChecker(step){
    if (userClickedPattern[step] !== gamePattern[step]){
        console.log("failure");
        faliChecker = true;
    }
}


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

    playSound(randomChosenColour);
    level++;
    $("h1").text("level" + " " + level);
}

$(document).keydown(function() {
    if  (level === 0){
        $("h1").text("level" + " " + level);
        nextSequence();
        
    }
});



$("div .btn").click(function (){
    var colorName = $(this).attr("id");
    
    
    playSound(colorName);
    animatePress(colorName);
    

    userClickedPattern.push(colorName)
    
    console.log("before checkig")
    patternChecker(userClickedPattern.length-1)
    if (faliChecker === false){
        
        if (userClickedPattern.length === gamePattern.length){
            userClickedPattern = [];
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
        
    }else {
        alert("game over")
    }
    
});


