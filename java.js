//Variables 
var startButton = document.getElementById("start");
var finishButton = document.getElementById("finish");
var score = 0;
var answer1 = document.getElementById("answer1");
answer1.addEventListener("click",clicked);
var answer2 = document.getElementById("answer2");
answer2.addEventListener("click",clicked);
var answer3 = document.getElementById("answer3");
answer3.addEventListener("click",clicked);
var answer4 = document.getElementById("answer4");
answer4.addEventListener("click",clicked)
var questionArray = document.getElementById('question')
var index = 0
// Loading Questions

startButton.addEventListener("click",questionLoader); //click event to start quiz

//The question loader will run after start button pressed
function questionLoader(){
    document.getElementById("start").disable= true; //Try to disable the button after click
    console.log(questions) //console log for me
    var game = questions; //defined game as questions  
    questionArray.textContent = (1) + '. '+ game[index].quest; //using textContent to place text from questions array within buttons and question tag
    answer1.textContent= game[index].choice1;                                    // adding a 1. + to notify user what question they are on
    answer2.textContent= game[index].choice2;
    answer3.textContent= game[index].choice3;
    answer4.textContent= game[index].choice4;
};
//gameindex.choice1
function clicked(){
  if(this.textContent===questions[index].answer)
    console.log("correct!")
    
  else 
    console.log("Wrong")
    
    //update intervel
    if (index===questions.length -1){
        alert("End of quiz!")
        return
    }    
    index ++;
    document.getElementById("score").innerHTML = score
    questionLoader()    
}
//Questions
var questions = [{
    quest: "What is CSS for?",
    choice1: "Styling HTML",
    choice2: "Coding",
    choice3: "Driving",
    choice4: "Deleting Everything",
    answer:  "Styling HTML",
},
{
    quest: "How do you make a list in HTML?",
    choice1: "<ul> <li>",
    choice2: "<script>",
    choice3: "<caption>",
    choice4: "<list>",
    answer:  "<ul> <li>",
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

