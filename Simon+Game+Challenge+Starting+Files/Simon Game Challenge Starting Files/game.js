// alert("Hello");
var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {

    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});
//After solving first time

// $(document).ready(function () {
$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");  
    userClickedPattern.push(userChosenColor);
  
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  
  });
  
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
        setTimeout(function() {
            $("#" + currentColor).removeClass("pressed");
        }, 100);
  };



function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    // return console.log(randomChosenColor);
    playSound(randomChosenColor);
    
}

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// nextSequence();
// console.log("hello");
// console.log($('#' + randomChosenColor));
// console.log('#' + buttonColors[1]);
