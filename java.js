//Variables 
var startButton = document.getElementById("start");
var finishButton = document.getElementById("finish");
var score = 0;
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var questionArray = document.getElementById('question')
// Loading Questions

startButton.addEventListener("click",questionLoader); //click event to start quiz

//The question loader will run after start button pressed
function questionLoader(){
    document.getElementById("start").disable= true; //Try to disable the button after click
    console.log(questions) //console log for me
    var game = questions; //defined game as questions  
    questionArray.textContent = (questionArray + 1) + '. '+ game.question; //using textContent to place text from questions array within buttons and question tag
    answer1.textContent = game.choice1;                                    // adding a 1. + to notify user what question they are on
    answer2.textContent = game.choice2;
    answer3.textContent = game.choice3;
    answer4.textContent = game.choice4;
};

//Questions
var questions = [{
    quest: "What is a question",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer:  "2",
},
{
    quest: "What is a question ver 2",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer:  "4",
}
];
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
                 alert("Times Up!");
                  }
                },1000);}
startButton.addEventListener("click",startTimer);

