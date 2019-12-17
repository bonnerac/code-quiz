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
    {
        title: "Loops are commonly started with ______.",
        choices: ["in", "to", "for", "at"],
        answer: "for"
      },
      {
        title: "To insert a link to a page, use the tag _______.",
        choices: ["a", "b", "c", "d"],
        answer: "a"
      },
      {
        title: "The logical structure of documents and the way a document is accessed and manipulated is commonly referred to as:",
        choices: ["MOD", "DOM", "MAD", "DAM"],
        answer: "DOM"
      },
      {
        title: "Objects are enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
      },
      {
        title: "Writing the steps of your code using correct terminology, without using actual code is called:",
        choices: ["paracode", "precode", "psychocode", "pseudocode"],
        answer: "pseudocode"
      },
      {
        title: "A common way to test javascript code is by using ______.",
        choices: ["event.preventDefault", "console.log", "indexOf", "appendChild"],
        answer: "console.log"
      },
  ];

// Create timer to start on button click.
var timeEl = document.querySelector(".time");
var secondsLeft = 120;

document.querySelector(".start-btn").addEventListener("click", setTime());

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      finalScore();
    }

  }, 1000);
}



// Function that displays final score and saves final score to a leaderboard using local storage.
function finalScore(){

}