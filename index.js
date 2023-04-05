var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []; 
var level = 0
var faliChecker = false;
var wrongSound = new Audio("sounds/wrong.mp3")
var maxLvl = 0

function patternChecker(step){
    if (userClickedPattern[step] !== gamePattern[step]){
        faliChecker = true;
    }
}


function gameOver(){
    wrongSound.play();

    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    }, 200);
    if (level > 0){
        maxLvl = level;
    }
    
    $("h1").text("Game Over you reached lvl " + maxLvl + ". Press any key to play again");
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    faliChecker = false;
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
    
    if (faliChecker === false){
        playSound(colorName);
        animatePress(colorName);
    }
    
    

    userClickedPattern.push(colorName)
    
    patternChecker(userClickedPattern.length-1)
    if (faliChecker === false){
        
        if (userClickedPattern.length === gamePattern.length){
            userClickedPattern = [];
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
        
    }else {
        gameOver();
    }
    
});


