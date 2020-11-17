'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What are all of Gandalf\'s names?',
      answers: [
        'Mithrandir',
        'tharkûn',
        'Olórin',
        'Incánus',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is Isildurs Bane?',
      answers: [
        'The One Ring',
        'Casting things in fire',
        'Sauron',
        'An arrow'
      ],
      correctAnswer: 'The One Ring'
    },
    {
      question: 'How old was Aragorn at the forming of the fellowship?',
      answers: [
        '38',
        '78',
        '87',
        '46'
      ],
      correctAnswer: '87'
    },
    {
      question: 'How many Rings of Power were forged?',
      answers: [
        '9',
        '19',
        '7',
        '20'
      ],
      correctAnswer: '20'
    },
    {
      question: 'Which actor broke their toe mid-scene and did not break character?',
      answers: [
        'Sean Astin',
        'Viggo Mortensen',
        'Dominic Monaghan',
        'Karl Urban'
      ],
      correctAnswer: 'Viggo Mortensen'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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