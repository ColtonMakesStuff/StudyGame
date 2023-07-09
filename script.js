// let noMenu = document.getElementById("menuButton")
// let popup = document.getElementById("menuBox")

// function openPopup () {
//    popup.classList.add("open-popup");
//    noMenu.classList.add("noMenu");
// }
//  popup.addEventListener("mouseleave", function() {
//     closeMenu();
//  });
//  function closeMenu() {
//     popup.classList.remove("open-popup");
//     noMenu.classList.remove("noMenu");
//  }


//start quiz one question bank object
const quizOneQuestions = [
    {
        question: "1+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    },
    {
        question: "2+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    },
    {
        question: "3+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    },
    {
        question: "4+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    }
]
//end quiz one question bank object



// start Quiz 2 question Bank Object
 const quizTwoQuestions = [
     {
         question: "q2 1+2 = ?",
         options: ["I1", "I2", "I3", "C"],
        answer: "C"
     },
     {
         question: "q2 2+2 = ?",
         options: ["I1", "I2", "I3", "C"],
         answer: "C"
     },
     {
         question: "q2 3+2 = ?",
         options: ["I1", "I2", "I3", "C"],
         answer: "C"
     },
     {
         question: "q2 4+2 = ?",
         options: ["I1", "I2", "I3", "C"],
         answer: "C"
     },
     {
        question: "q2 1+2 = ?",
        options: ["I1", "I2", "I3", "C"],
       answer: "C"
    },
    {
        question: "q2 2+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    },
    {
        question: "q2 3+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    },  {
        question: "q2 1+2 = ?",
        options: ["I1", "I2", "I3", "C"],
       answer: "C"
    },
    {
        question: "q2 2+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    },
    {
        question: "q2 3+2 = ?",
        options: ["I1", "I2", "I3", "C"],
        answer: "C"
    }
 ]
 // end quiz 2 question bank Object

 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// start scoreboard 
let answeredNumber = 0
let correctNumber = 0
let pageTimeScore = document.querySelector('.timeScore');
let percentCorrect = document.querySelector('.percentCorrect')
let timeScore = document.querySelector('.timeScore')
let timerEl = document.querySelector('.timer')
let playAgain = document.querySelector('.playAgain')



let pageQuestion = document.querySelector('.question');
let pageOptionSection = document.querySelector('.optionSection');
let submitButton = document.querySelector('.optionSection');


;// function that runs the selected quiz
function runQuiz(quiz) {
    answeredNumber = 0
    correctNumber = 0
    percentCorrect.innerHTML = 0
//starts timer for the quiz
    countDown(quiz.length*5)
//shuffles the order of the questions in the quiz
    let shuffledQuestionOrder = randomize(quiz);

//establishes base question number
    let questionNumber = 0;
    let currentQuestion = shuffledQuestionOrder[questionNumber];

//ranodmizes the order of the options for the current question
    let shuffledOptions = randomize(currentQuestion.options);

    //function for displaying the question and the options
    function displayQuestion() {

      //attaches the question to the correlating part of the page
      pageQuestion.innerHTML = currentQuestion.question;
      
      //attaches the js to the correlating part of the page
      pageOptionSection.innerHTML = ''; // Clear the options section before adding new options
        
      //this for loop actually defines what goes in to eacn option and adds it by using innerHTML so it is scalable to any option amount
      for (let i = 0; i < currentQuestion.options.length; i++) {
        let optionValue = shuffledOptions[i];
        let htmlOptionToAdd = `<var class="option"><p>&#8226; ${optionValue}</p></var>`;
        pageOptionSection.innerHTML += htmlOptionToAdd;
      }
  
      // Update the pageOptions variable after adding new options (because it was '')
      let pageOptions = document.querySelectorAll('.option');
  
      //this adds an event listener for each of the added html bits
      pageOptions.forEach((option, index) => {
        option.addEventListener('click', () => {
          handleOptionClick(index);
        });
      });
    }
    
    //this checks if the answer is correct and it adds to the score values as needed and re-loops the next question until the end of the quiz
    function handleOptionClick(optionIndex) {
        let selectedOption = shuffledOptions[optionIndex];
        console.log(`Selected option: ${selectedOption}`);
        if (selectedOption === currentQuestion.answer){
            console.log("no feaking way! you did it!");
            correctNumber ++;
        } else {
            console.log("darn")
        }
        answeredNumber ++;
        //little bit of math for getting the final score
        let percentage  =(correctNumber / answeredNumber) * 100 + "% accuracy !";
        percentCorrect.innerHTML = percentage
        nextQuestion()
        
      }
    
    //this drives the "loop" that keeps the quiz itterating through questions 
    function nextQuestion() {
        questionNumber ++;
        if (questionNumber < quiz.length){
            currentQuestion = shuffledQuestionOrder[questionNumber];
        shuffledOptions = randomize(currentQuestion.options)
            displayQuestion()
       
    } else {
        //ends the game if all questions have been answered
        gameOver()
    }
}
//this is what gets this all going
displayQuestion()
  }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 
//funtion for randomizing things  the ~~~~Fisher-Yates shuffle algorithm.~~~~ phind helped me with that one
function randomize(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;  
  }


     
//basic quiz countdown structure finished
let timeInterval;

function countDown(timeAllotted) {
  var timeLeft = timeAllotted;
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.innerHTML = `<p> ${timeLeft}</p>`;
    timeTaken = timeAllotted - timeLeft
    timeScore.innerHTML = `<p> you finished in ${timeTaken} seconds! </p>`;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
    console.log("Time left:", timeLeft);
    console.log(timeTaken)
    
  }, 1000);
}
function gameOver(){
    clearInterval(timeInterval)
    gameOverScreen.classList.remove("finished");
    gameSection.classList.add("game");
    gameOverScreen.classList.remove("hide")
 } 


// start visual functions
 let startButton = document.querySelector('.start');
 let gameSection = document.querySelector('.game');
 let gameOverScreen = document.querySelector('.finished')

function startVisualQuiz() {
    startButton.classList.add("hide");
    gameSection.classList.remove("game");
 }


 
 function startTheQuiz(quiz) {
    startVisualQuiz()
    runQuiz(quiz)
 }
//end visual functions


// this starts the quiz
startButton.addEventListener("click", function() {
    startTheQuiz(quizTwoQuestions);
  });

  playAgain.addEventListener("click", function() {
    startTheQuiz(quizTwoQuestions);
    gameOverScreen.classList.add("hide")
  });
//temporarly selects and starts the quiz


// runQuiz(quizTwoQuestions)
  