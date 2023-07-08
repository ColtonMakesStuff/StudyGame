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
     }
 ]
 // end quiz 2 question bank Object

 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// start scoreboard 
let answeredNumber = 0
let correctNumber = 0
let timeScore = document.querySelector('.timeScore');
let percentCorrect = document.querySelector('.percentCorrect')




let pageQuestion = document.querySelector('.question');
let pageOptionSection = document.querySelector('.optionSection');
let submitButton = document.querySelector('.optionSection');


;// function that runs the selected quiz
function runQuiz(quiz) {
    
    countUp(quiz.length*1)

    let shuffledQuestionOrder = randomize(quiz);
    let questionNumber = 0;
    let currentQuestion = shuffledQuestionOrder[questionNumber];
    let shuffledOptions = randomize(currentQuestion.options);
    function displayQuestion() {
      pageQuestion.innerHTML = currentQuestion.question;
  
      pageOptionSection.innerHTML = ''; // Clear the options section before adding new options
  
      for (let i = 0; i < currentQuestion.options.length; i++) {
        let optionValue = shuffledOptions[i];
        let htmlOptionToAdd = `<var class="option"><p>&#8226; ${optionValue}</p></var>`;
        pageOptionSection.innerHTML += htmlOptionToAdd;
      }
  
      // Update the pageOptions variable after adding new options
      let pageOptions = document.querySelectorAll('.option');
  
      pageOptions.forEach((option, index) => {
        option.addEventListener('click', () => {
          handleOptionClick(index);
        });
      });
    }
  
    function handleOptionClick(optionIndex) {
        let selectedOption = shuffledOptions[optionIndex];
        console.log(`Selected option: ${selectedOption}`);
        if (selectedOption === currentQuestion.answer){
            console.log("no effing way");
            correctNumber ++;
        } else {
            console.log("crap")
        }
        answeredNumber ++;
        nextQuestion()
      }
    function nextQuestion() {
        questionNumber ++;
        if (questionNumber < quiz.length){
            currentQuestion = shuffledQuestionOrder[questionNumber];
        shuffledOptions = randomize(currentQuestion.options)
            displayQuestion()
        let percentage  =(correctNumber / answeredNumber) * 100 + "% accuracy !";
        percentCorrect.innerHTML = percentage
    } else {
        
        gameOver()
    }
}
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
  function countUp(timeAllotted) {
    var timeLeft = timeAllotted;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        gameOver()
      }
      console.log(timeAllotted --)
    }, 1000);
  }



// start visual functions
 let startButton = document.querySelector('.start');
 let gameSection = document.querySelector('.game');
let gameOverScreen = document.querySelector('.finished')

function startVisualQuiz() {
    startButton.classList.add("hide");
    gameSection.classList.remove("game");
 }

 function gameOver(){
   gameOverScreen.classList.remove("finished");
   gameSection.classList.add("game");
 }
 
 function startTheQuiz(quiz) {
    startVisualQuiz()
    runQuiz(quiz)
 }
//end visual functions


// this starts the quiz
startButton.addEventListener("click", function() {
    startTheQuiz(quizOneQuestions);
  });
//temporarly selects and starts the quiz


// runQuiz(quizTwoQuestions)
  