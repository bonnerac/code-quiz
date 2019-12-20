# Code-Quiz

## Desciption
A timer-based quiz application that stores high scores client-side.


## Goals

This application is designed to test your knowledge of common coding terms. It could be used as a teaching tool or as a fun way to pass the time. The quiz is generated dynamically, so theoretically, you could change all of the questions out for new ones at any time to keep the content fresh. 

## How It Works

The user clicks on the **Start** button to start the application. A timer begins to count down. The user is then shown several multiple choice questions. They must click on the button of the answer they want to select. If they choose right, they are shown a message that congratulates them, their score is increased by one, and the next question proceeds. If they choose wrong, they are shown a message informing them of their mistake, 5 seconds of time is taken away, and then the next question comes up.

At the end of the questions the user is then able to type their name in a form. Once they select **Submit**, their high score is shown with their name. All scores are saved on the user's local storage, so they can compare each time they take the quiz.


## Complications

During the process of making this Code Quis, I did run into some problems: 

* I had issues getting the clock working.
    * After looking over the in-class activities several times, I was unable to get the clock to work the way I wanted it to. 
* Storing the user information in local storage.
    * I couldn't seem to get the user information back from the local storage. It was able to be sent out ok, but every time I console logged the parsed information back, I would get a **null** value and wouldn't be able to do anything with it. I spent a lot of time working on this and felt like I didn't make much progress. This was by far the most frustrating part of this homework assignment for me.



## Credits and Thanks

The background image was found as a free download from (http://www.evantage.net).
Thanks to Andre for help with my onClick events and to Colin for helping me try and talk through my local storage difficulties.

