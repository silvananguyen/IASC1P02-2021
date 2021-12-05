//The javascript clock was taken from a tutorial called flexiple: https://flexiple.com/javascript-clock/ on December 3.
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockRN").innerText = time;
  let t = setTimeout(function(){ currentTime() }, 1000);
  }
currentTime();

//The current data javascript was taken from a tutorial called Phoneix Nap: https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript on December 3.
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("dateRN").innerText = date;

//The quiz was taken from a tutorial called sitepoint: https://www.sitepoint.com/simple-javascript-quiz/ on December 3.
(function(){
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('simpleQuiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submitButton');
  const myQuestions = [
    {
      question: "How many Oscar Awards do you think Bong Joon-Ho won in 2020?",
      answers: {
        a: "None",
        b: "1",
        c: "2",
        d: "3"
      },
      correctAnswer: "d"
    }
  ];

  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();

var life = document.getElementById("life");
var career = document.getElementById("career");
var inspirations = document.getElementById("inspirations");

var lifeButton = document.getElementById("lifeButton");
var careerButton = document.getElementById("careerButton");
var inspirationsButton = document.getElementById("inspirationsButton");

function switchOffEverything() {
  life.style.display = "none";
  career.style.display = "none";
  inspirations.style.display = "none";
}

function switchTolife() {
  switchOffEverything();
  life.style.display = "block";
}

lifeButton.onclick = switchTolife;

function switchTocareer() {
  switchOffEverything();
  career.style.display = "block";
}

careerButton.onclick = switchTocareer;

function switchToinspirations() {
  switchOffEverything();
  inspirations.style.display = "block";
}

inspirationsButton.onclick = switchToinspirations;
