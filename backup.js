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

let questionNumber = 0

// function that runs the selected quiz
function runQuiz(quiz) {
// console.log(quiz.length)
    //starts countdown
    
    //randomizes the questions
    let shuffledList = randomize(quiz);
    
    //finds question class and swaps it with the question
    document.querySelector(".question").textContent=shuffledList[questionNumber].question
    var optionElement = document.querySelectorAll(".option")
    
    for (var i=0; i < 4; i++){
        let shuffledAnswers = randomize(options)
        optionElement[i].textContent=shuffledList[questionNumber].shuffledAnswers[i]
        // optionElement[i].addEventListener("click", FUNCTIONFORCHECKINGIFANSWERISRIGHT )
    }
    //determines the length of the quiz based on the amount of questions
//     for (i=0; i < shuffledList.length; i ++){
    
//     // asks the questions in the random order determined by first function
//     const orderedQuestion = shuffledList[questionNumber];
//     questionNumber += 1;

//     //randomizes the options
    
//   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
//   //this do while loop runs as long as a certain condition is happening
//   //in this case it is when the user wants to retry the question
//  do{
//   //temporarly what asks the questions
//     randomize(orderedQuestion.options);
//     var userAnswer = prompt(orderedQuestion.question)

//     //temporarly checks to see if the answer is correct
//     if (userAnswer === orderedQuestion.answer){
//         console.log("woohoo")
    
//     }else{
// //temporary retry element with lower penalty

// //temporary skip element with higher penalty

// var skip = confirm("skip? -10 seconds")
// if (skip === true) {
//     console.log("-10")
// }
// var tryAgain = confirm("try again? -5 seconds")
// if (tryAgain === true ){
//     console.log("-5")
// }
// }
// } while (tryAgain===true)
// }
}
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
    let shuffledList = randomize(list);
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
 runQuiz(quizOneQuestions)

// runQuiz(quizTwoQuestions)
  