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


  
const quizSampleQuestions = [
    {
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {
        question:   "test \n\n<ul> \n<p> X </p>\n<p> X </p> \n<p> X </p> \n</ul>",
    
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
]

//start quiz one question bank object
const quizOneQuestions = [
    { //1
        question: "What is the output of the following code?\n\n<ul>\n<p>var x = 10;</p>\n<p>var y = x * 2;</p>\n<p>console.log(y);</p>\n</ul>",
        options: ["20", "10", "5", "NaN"],
        answer: "20"
    },
    { //2
        question: "Which of the following is not a valid JavaScript variable name?",
        options: ["my_variable", "_myVariable", "$myVariable", "my-variable"],
        answer: "$myVariable"
    },
    {  //3
        question: "What is the output of the following code?\n\n<ul>\n<p>var x = true;</p>\n<p>var y = false;</p>\n<p>console.log(x && y);</p>\n</ul>",
        options: ["true", "false", "Nan", "undefined"],
        answer: "false"
    },
    {//4
        question: "Which of the following is not a valid JavaScript operator?",
        options: ["+", "-", "*", "/", "?"],
        answer: "?"
    },
    {//5
        question: "What is the output of the following code?\n\n<ul>\n<p>var x = 10;</p>\n<p>var y = 20;</p>\n<p>if (x > y) {</p>\n<p>console.log('x is greater than y');</p>\n<p>} else {</p>\n<p>console.log('y is greater than x')};</p>\n</ul>",
        options: ["x is greater than y", "y is greater than x", "undefined"],
       answer: "y is greater than x"
    },
    {//6
        question: "Which of the following is not a valid JavaScript function?",
        options: [" function myFunction() { // code here }", "function myFunction(x, y) { // code here }", "function myFunction() { return x + y; }", " function myFunction() { var x = 10; var y = 20; return x + y; }"],
       answer: "function myFunction() { var x = 10; var y = 20; return x + y; }"
    },
    {//7
        question: "What is the output of the following code?\n\n<ul>\n<p>var x = [1, 2, 3];</p>\n<p>console.log(x[0]);</p>\n</ul>",
        options: [
                  "1"
                , "2"
                , "3"
                , "undefined"
                ],
       answer: "1"
    },
    {//8
        question: "What is the output of the following code?\n\n<ul> \n<p>var x = {</p>\n<p>name: 'John Doe',</p> \n<p>age: 30,};</p> \n<p>console.log(x.name);</p> \n</ul>",
        options: [
                  "John Doe"
                , "30"
                , "undefined"
                , "NaN"
                ],
       answer: "John Doe"
    },
    {//9
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//10
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//11
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//12
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//13
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//14
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//15
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
    {//16
        question: "q2 1+2 = ?",
        options: [
                  "I1"
                , "I2"
                , "I3"
                , "C"
                ],
       answer: "C"
    },
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

//quiz list navigation
let quizOne = document.querySelector('#quizOne');
let quizTwo = document.querySelector('#quizTwo');
let quizThree = document.querySelector('#quizThree');
let quizList = document.querySelector('.quizList');
let daRulez = document.querySelector('.daRulez');

quizOne.addEventListener("click", function() {
   startTheQuiz(quizOneQuestions);
  });
quizTwo.addEventListener("click", function() {
    startTheQuiz(quizTwoQuestions);
  });
quizThree.addEventListener("click", function() {
    alert("error")
  });

// start visual functions
 let startButton = document.querySelector('.start');
 let gameSection = document.querySelector('.game');
 let gameOverScreen = document.querySelector('.finished')

function startVisualQuiz() {
    
    
    quizList.classList.add("hide")
    daRulez.classList.add("hide")
 }

 
 function startTheQuiz(quiz) {
    startVisualQuiz()
    startCountdown(quiz)
    
 };


 function startCountdown(quiz) {
    var timeLeft = 6;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
       timeLeft--; 
       startButton.classList.remove("hide");
      startButton.textContent = "quiz starts in "+timeLeft +"!";
      
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        runQuiz(quiz);  
        startButton.classList.add("hide");
        gameSection.classList.remove("game"); 
       
      }
    }, 1000);
  }
//end visual functions


// this starts the quiz
startButton.addEventListener("click", function() {
    startTheQuiz(quizTwoQuestions);
  });


//temporarly selects and starts the quiz

let pageQuestion = document.querySelector('.question');
let pageOptionSection = document.querySelector('.optionSection');
let submitButton = document.querySelector('.optionSection');
let questionCounter = document.querySelector('.questionCounter');
let correctCounter = document.querySelector('.correctCounter');


;// function that runs the selected quiz
function runQuiz(quiz) {
    

    answeredNumber = 0
    correctNumber = 0
    percentCorrect.innerHTML = 0
    correctCounter.innerHTML = `<p>${correctNumber}/${answeredNumber} correct!</p>`
    questionCounter.innerHTML = `<p>${quiz.length-answeredNumber} left</p>`
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
        correctCounter.innerHTML = `<p>${correctNumber}/${answeredNumber} correct!</p>`
        questionCounter.innerHTML = `<p>${quiz.length-answeredNumber} left</p>`
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
        gameOver(quiz)
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
      timeScore.innerHTML = `<p>oh no! you didn't finish in time :( please try again`
      gameOver();
    }
    console.log("Time left:", timeLeft);
    console.log(timeTaken)
    
  }, 1000);
}
function gameOver(quiz){
    clearInterval(timeInterval)
    gameOverScreen.classList.remove("finished");
    gameSection.classList.add("game");
    gameOverScreen.classList.remove("hide")
    playAgain.addEventListener("click", function() {
        startTheQuiz(quiz);
        gameOverScreen.classList.add("hide")
      });
 } 




// runQuiz(quizTwoQuestions)
  