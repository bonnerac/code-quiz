// Create object containing questions, choices, and answers:
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of the following is a JavaScipt term, and not the name of a boy band?",
      choices: ["BTS", "O-TOWN", "JSON", "NSYNC"],
      answer: "JSON"
    },
    {
      title: "A function inside a method is called a(n) ____.",
      choices: ["method", "argument", "prompt", "sequence"],
      answer: "method"
    },
    {
      title: "Which term will be used in the formula for a random number?",
      choices: ["Math.door", "Math.wall", "Math.floor", "Math.ceiling"],
      answer: "Math.floor"
    },
  ];

var timer  
var score = 0;
var incr = 0;
var body = document.querySelector('body');



displayLandingPage();

// Display a landing page with a  welcome message and a button that sends user to the first question
function displayLandingPage(){
  var title = document.createElement("div");
  title.textContent = "Code Quiz"
  body.appendChild(title);
  var welcomeText = document.createElement("div");
  welcomeText.textContent = "Welcome to the Code Quiz! You will have " + (questions.length)*15 + " seconds to complete " + (questions.length) + " questions. Incorrect answers will deduct 5 seconds from your overall time. Good Luck!"
  body.appendChild(welcomeText);
  var startButton = document.createElement("button");
  startButton.textContent = "Click Here To Start The Quiz"
  body.appendChild(startButton);
  var scoreBox = document.createElement("div");
  scoreBox.textContent = "Score: " + score;
  body.appendChild(scoreBox);
  
  startButton.addEventListener("click", function(){
    document.body.innerHTML = "";
    displayQuestion(); 
  })
}
// Display first question 
function displayQuestion(){
  
  var questionEl = document.createElement("div");
  questionEl.textContent = questions[incr].title;
  body.appendChild(questionEl);
  displayScore();
  
}
// Display the score
function displayScore(){
var scoreBox = document.createElement("div");
  scoreBox.textContent = "Score: " + score;
  body.appendChild(scoreBox);
  displayMultiChoice();
};

// Display 4 possible answers on buttons
function displayMultiChoice(){
  for(i=0; i < 4; i++){
    var button = document.createElement("button");
    button.textContent = questions[incr].choices[i];
    button.setAttribute('data-correct', questions[incr].answer);
    button.setAttribute('data-choice', questions[incr].choices[i]);
    button.onclick = gradeQuestion
    body.appendChild(button);
    
  }};

// Determine if each question is right or wrong. If correct, send correct message, increase score by 1 and go on to next question. If incorrect, send incorrect message, and go on to next question. If last question, got on to finalScore
function gradeQuestion (event) {    
  var isItRight = document.createElement("div");
  if (event.target.dataset.correct == event.target.dataset.choice){
      isItRight.textContent = "You got it right!"
      body.appendChild(isItRight)
      score ++;
      setTimeout(function()
      {(incr++);
      document.body.innerHTML = "";  
        if(incr >= questions.length){
          finalScore();
       }
       else{
          displayQuestion();
       }
        }, 1500);}
  else{
    isItRight.textContent = "You got it wrong!"
    body.appendChild(isItRight)
    setTimeout(function(){
      (incr++);
      document.body.innerHTML = "";  
        if(incr >= questions.length){
          finalScore();
       }
       else{
          displayQuestion();
       }
        }, 1500)}
      };


// Display final score leaderboard

function finalScore(){
 

}




 
 // If correct, increase the score by 1, if incorrect, no change to score
  
    // Display correct/incorrect on the page.
  // Send user to next question on the same click and repeat all steps under "Display first question" for additional questions.
// Display user score and let user enter name. Store this info on local storage.
