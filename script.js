// Create object containing questions, choices, and answers
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
  ];








// Display a landing page with a  welcome message and a button that sends user to the first question
// Display first question with 4 possible answers:
var incr = 0;
var body = document.querySelector('body');
var multiChoice1 = document.createElement("button");
var multiChoice2 = document.createElement("button");
var multiChoice3 = document.createElement("button");
var multiChoice4 = document.createElement("button");
var isItRight = document.createElement("div");
console.log(isItRight)

function displayQuestion(){
  
  var questionEl = document.createElement("div");
  questionEl.textContent = questions[incr].title;
  body.appendChild(questionEl);
}
displayQuestion()

function displayMultiChoice(){

  multiChoice1.textContent = questions[incr].choices[0];
  body.appendChild(multiChoice1);
  
  multiChoice2.textContent = questions[incr].choices[1];
  body.appendChild(multiChoice2);
  
  multiChoice3.textContent = questions[incr].choices[2];
  body.appendChild(multiChoice3);
  
  multiChoice4.textContent = questions[incr].choices[3];
  body.appendChild(multiChoice4);
}
displayMultiChoice();

function gradeQuestion(){
  
  multiChoice1.addEventListener("click", function(){
    if(multiChoice1.textContent == questions[0].answer){
      isItRight.textContent = "You got it right!"
      body.appendChild(isItRight)
    }
    else{
      isItRight.textContent = "You got it wrong!"
      body.appendChild(isItRight)
    }
  }
  );
  multiChoice2.addEventListener("click", function(){
    if(multiChoice2.textContent == questions[0].answer){
      isItRight.textContent = "You got it right!"
      body.appendChild(isItRight)
    }
    else{
      isItRight.textContent = "You got it wrong!"
      body.appendChild(isItRight)
    }
  }
  );
  multiChoice3.addEventListener("click", function(){
    if(multiChoice3.textContent == questions[0].answer){
      isItRight.textContent = "You got it right!"
      body.appendChild(isItRight)
    }
    else{
      isItRight.textContent = "You got it wrong!"
      body.appendChild(isItRight)
    }
  }
  );
  multiChoice4.addEventListener("click", function(){
    if(multiChoice4.textContent == questions[0].answer){
      isItRight.textContent = "You got it right!"
      body.appendChild(isItRight)
    }
    else{
      isItRight.textContent = "You got it wrong!"
      body.appendChild(isItRight)
    }
  }
  );
}
gradeQuestion()



  // Create event that changes color slightly if you mouse over button (on css).
  // Create click event that determines if the user selection is correct or incorrect.
  // If correct, increase the score by 1, if incorrect, no change to score
    // Display correct/incorrect on the page.
  // Send user to next question on the same click and repeat all steps under "Display first question" for additional questions.
// Display user score and let user enter name. Store this info on local storage.
