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
// Display a landing page with a  welcome message and a button that sends user to the first question
// Display first question with 4 possible answers:
var incr = 0;
var body = document.querySelector('body');


displayQuestion()
function displayQuestion(){
  
  var questionEl = document.createElement("div");
  questionEl.textContent = questions[incr].title;
  body.appendChild(questionEl);
  displayMultiChoice();
}


function displayMultiChoice(){
  for(i=0; i < 4; i++){
    var button = document.createElement("button");
    button.textContent = questions[incr].choices[i];
    button.setAttribute('data-correct', questions[incr].answer);
    button.setAttribute('data-choice', questions[incr].choices[i]);
    button.onclick = gradeQuestion
    body.appendChild(button);
  }

// Determine if each question is right or wrong.
function gradeQuestion (event) {    
  var isItRight = document.createElement("div");
  if (event.target.dataset.correct == event.target.dataset.choice){
      isItRight.textContent = "You got it right!"
      body.appendChild(isItRight)
      setTimeout(function()
      {(incr++);
      document.body.innerHTML = "";  
        if(incr > questions.length){

       }
       else{
          displayQuestion();
       }

        }, 2000);}
  else{
    isItRight.textContent = "You got it wrong!"
    body.appendChild(isItRight)
    setTimeout(function(){
      (incr++);
      document.body.innerHTML = "";  
        if(incr > questions.length){

       }
       else{
          displayQuestion();
       }

        }, 2000)}}};




 
 // If correct, increase the score by 1, if incorrect, no change to score
  
    // Display correct/incorrect on the page.
  // Send user to next question on the same click and repeat all steps under "Display first question" for additional questions.
// Display user score and let user enter name. Store this info on local storage.
