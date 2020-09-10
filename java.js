//Variables 
var startButton = document.getElementById("start");

//Timer
var totalSecounds = 0;
var secoundsElapsed = 0;
var interval;

function startTimer(){
    let counter = 60;
    let timeInterval = setInterval(function(){
           document.getElementById("timer").innerHTML = counter
           counter --;
              if (counter == 0){
                 clearInterval(timeInterval);
                 alert("Finish");
                  }
                },1000);}
startButton.addEventListener("click",startTimer);


//
//document.getElementById("timer");