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

let pageQuestion = document.querySelector('.question');
let pageOptionSection = document.querySelector('.optionSection');
let submitButton = document.querySelector('.optionSection');


;// function that runs the selected quiz
function runQuiz(quiz) {
    let shuffledQuestionOrder = randomize(quiz);
    let questionNumber = 0;
  
    function displayQuestion() {
      let currentQuestion = shuffledQuestionOrder[questionNumber];
      let shuffledOptions = randomize(currentQuestion.options);
      console.log(shuffledOptions);
      pageQuestion.innerHTML = currentQuestion.question;
  
      pageOptionSection.innerHTML = ''; // Clear the options section before adding new options
  
      for (let i = 0; i < currentQuestion.options.length; i++) {
        let optionValue = shuffledOptions[i];
        let htmlOptionToAdd = `<button class="option"><p>&#8226; ${optionValue}</p></button>`;
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
      // Handle the logic for the selected option
      console.log(`Option ${optionIndex + 1} selected`);
    }
  
    displayQuestion();
  }
  
  // ...
  
  runQuiz(quizOneQuestions);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// countdown(quiz.length * 1)  
// do {
//       userAnswer = prompt(orderedQuestion.question);

//       if (userAnswer === orderedQuestion.answer) {
//         console.log("Correct!");
//         correctAnswer = true;
//       } else {
//         console.log("Incorrect! Try again.");
//       }
//     } while (!correctAnswer);
  
 
//funtion for randomizing things  the ~~~~Fisher-Yates shuffle algorithm.~~~~ phind helped me with that one
function randomize(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;  
  }
  
//basic quiz countdown structure finished
  function countdown(total) {
    var timeLeft = total;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timeLeft--;
      
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        console.log("finished")
      }
    }, 1000);
  }


//temporarly selects and starts the quiz


// runQuiz(quizTwoQuestions)
  