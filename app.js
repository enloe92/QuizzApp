/* eslint-disable quotes */
/* eslint-disable no-undef */
'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [{
    question: 'What is Gandalf also known as?',
    answers: [
      'Mithrandir',
      'tharkûn',
      'Olórin',
      'Incánus',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    imgName: 'gandalf.jpg'
  },
  {
    question: 'What is Isildur\'s Bane?',
    answers: [
      'The One Ring',
      'Casting things in fire',
      'Sauron',
      'An arrow'
    ],
    correctAnswer: 'The One Ring',
    imgName: 'isildursbane.jpg'
  },
  {
    question: 'How old was Aragorn at the forming of the fellowship?',
    answers: [
      '38',
      '78',
      '87',
      '46'
    ],
    correctAnswer: '87',
    imgName: 'aragorn.jpg'
  },
  {
    question: 'How many Rings of Power were forged?',
    answers: [
      '9',
      '19',
      '7',
      '20'
    ],
    correctAnswer: '20',
    imgName: 'ringsofpower.jpg'
  },
  {
    question: 'Which actor broke their toe mid-scene and did not break character?',
    answers: [
      'Sean Astin',
      'Viggo Mortensen',
      'Dominic Monaghan',
      'Karl Urban'
    ],
    correctAnswer: 'Viggo Mortensen',
    imgName: 'brokentoe.gif'
  }
  ],
  feedbackGiven: true,
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  currentAnswer: ''
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function generateMainPage() {
  return `
      <div class="mainPage">
        <h2>LOTR Quiz</h2>
        <p>This is a quiz about Lord of the Rings, Don't get too turned around little Hobbit!</p>
        <button type='submit' id="startquiz">Start Quiz</button>
        </form>
      </div>`;
}

function generateQuestionPage() {
  const question = store.questions[store.questionNumber];
  const answers = question.answers.map(function(answer,index){return `
  <input type="radio" id="answer${index}" name="answer" value="${answer}" required>
        <label for="answer${index}">${answer}</label></br>`;
  });

  return `
  <div class="mainPage">
    <form id="question">
      <h2>${question.question}</h2>
      ${answers.join('')}
      <button type="form">Submit Answer</button>
    </form>

      <div class="quiz-info">
        <p>${store.questionNumber+1}/5</p>
        <p>${store.score}/${store.questionNumber} Correct</p>
      </div>
  `;
  
}

function generateFeedbackPage(){
  let feedback = '';
  if(store.currentAnswer===store.questions[store.questionNumber].correctAnswer){
    feedback = `Good job!! You got it right!`;
  } else{
    feedback = `Better luck next time!`;
  }
  return`
  <div class="mainPage">
      <h2>Feedback Question ${store.questionNumber+1}</h2>
      <img src="images/${store.questions[store.questionNumber].imgName}" alt="${store.questions[store.questionNumber].correctAnswer}">
      <p>The correct answer was: ${store.questions[store.questionNumber].correctAnswer}.</p>
      ${feedback}
      <p>You have gotten ${store.score}/${store.questionNumber+1} questions right so far.</p>
      <button type='submit' id="continue">Continue</button>
      </form>
    </div>
    `;
}

function generateFinalPage(){
  let feedback = '';
  if(store.currentAnswer===store.questions[store.questionNumber].correctAnswer){
    feedback = `Good job!! You got it right!`;
  } else{
    feedback = `Better luck next time!`;
  }
  return`
  <div class="mainPage">
      <h2>Feedback Question ${store.questionNumber+1}</h2>
      <img src="images/${store.questions[store.questionNumber].imgName}" alt="${store.questions[store.questionNumber].correctAnswer}">
      <p>The correct answer was: ${store.questions[store.questionNumber].correctAnswer}.</p>
      ${feedback}
      <p>You're all done!!<p>
      <p>You got ${store.score}/${store.questionNumber+1} questions right.</p>
      <button type='submit' id="home">Home</button>
      </form>
      <button type='submit' id="try-again">Try Again</button>
      </form>
    </div>
    `;
}

function handleStartButton(){
  $('main').on('click','#startquiz', function(e){
    store.quizStarted = true;
    render();
  });
}

function handleTryAgainButton(){
  $('main').on('click','#try-again', function(e){
    store.currentAnswer = '';
    store.score = 0;
    store.questionNumber = 0;
    store.feedbackGiven = true;
    render();
  });
}

function handleHomeButton(){
  $('main').on('click','#home', function(e){
    store.currentAnswer = '';
    store.score = 0;
    store.questionNumber = 0;
    store.feedbackGiven = true;
    store.quizStarted = false;
    render();
  });
}

function handleSubmitButton(){
  $('main').on('submit','#question', function(e){
    e.preventDefault();
    store.currentAnswer = $(`input[name='answer']:checked`).val();
    store.feedbackGiven = false;
    if(store.currentAnswer===store.questions[store.questionNumber].correctAnswer){
      store.score++;
    }
    console.log(store.currentAnswer);
    render();
  });
}

function handleContinueButton(){
  $('main').on('click','#continue', function(e){
    store.feedbackGiven = true;
    store.currentAnswer = '';
    store.questionNumber++;
    render();
  });
}

function render() {
  let html = '';
  if (store.quizStarted === false) {
    html = generateMainPage();
  } else if (store.feedbackGiven === true) {
    html = generateQuestionPage();
  } else if (store.feedbackGiven === false && store.questionNumber === store.questions.length-1){
    html = generateFinalPage();
  } else{
    html = generateFeedbackPage();
  }
  $('main').html(html);
}

function main() {
  render();
  handleStartButton();
  handleSubmitButton();
  handleContinueButton();
  handleTryAgainButton();
  handleHomeButton();
}
$(main);