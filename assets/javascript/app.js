// so when the documenr is ready do this
$(document).ready(function() {
  // correctCount
  var right = 0;
  // incorrect count
  var wrong = 0;
  // duration of question
  var countDown = 10;
  // the ID of the current timer (used for clearing)
  var intervalID;
  // the index of the current question
  var questionCounter = 0;

  function showQuestion() {
    // resets countdown
    countDown = 10;
    // clears the current/old timer
    clearInterval(intervalID);
    // resets interval id to reference a new timer
    intervalID = setInterval(timer, 1000);
  }

  function timer() {
    // decrements the countDown
    countDown--;
    // displays the time left
    $('#display').html('Timer: ' + countDown);
    if (countDown === 0) {
      //if time is up
      //increment questionCounter
      questionCounter++;
      // clears the current/old timer
      clearInterval(intervalID);
      // invoke Trivia questions with the new question at the
      // questionCounter index
      var currQ = questions[questionCounter];
      triviaQuestions(currQ);
    }
  }

  $('.triviaBox').hide();
  

  $('.startButton').click(function() {
    $('.intro').hide();
    $('.triviaBox').show();
    $('.display').html(questions.timer);
    triviaQuestions(questions[questionCounter]);
  });
  // questions array
  var questions = [{
    question: 'Who played Danny Tanner in the TV series "Full House"?',
    choices: ['Bob Saget', 'Dave Coulier', 'John Posey'],
    answer: 'Bob Saget',
    img: '1fullHouse.png',
  }, {
    question: 'Which "Wonder Years" favorite was only supposed to appear in the pilot?',
    choices: ['Winnie Cooper', 'Paul Pfeiffer', 'Wayne Arnold'],
    answer: 'Winnie Cooper',
    img: '2wonderYears.png',
  }, {
    question: 'Which 2016 presidential candidate made a cameo on "The Fresh Prince of Bel-Air"?',
    choices: ['Hillary Clinton', 'Jeb Bush', 'Donald Trump'],
    answer: 'Donald Trump',
    img: 'freshPrince.png',
  }, {
    question: 'Which 90\'s teen queen turned down the lead role on "Buffy the Vampire Slayer"?',
    choices: ['Keri Russell', 'Katie Holmes', 'Jennifer Love Hewitt'],
    answer: 'Katie Holmes',
    img: 'buffySlayer.png',
  }, {
    question: 'What was the name of the school mistress in "The Facts of Life"?',
    choices: ['Mrs. Edna Garrett', 'Mrs. Wilma Frett', 'Mrs. Blair '],
    answer: 'Mrs. Edna Garrett',
    img: 'factsLife.png',
  }, {
    question: 'What was the name of Arnold\'s fish on Different Strokes?',
    choices: ['Goldie', 'Abraham', 'Ted'],
    answer: 'Abraham',
    img: 'diffStrokes.png',
  }, {
    question: 'What was the name of the bar/restaurant on Three\'s Company?',
    choices: ['Bar None', 'Drunken Monkey', 'Regal Beagle'],
    answer: 'Regal Beagle',
    img: 'threesCompany.png',
  }, {
    question: 'Where was Will "born and raised?',
    choices: ['New York', 'Vermont', 'West Philadelphia'],
    answer: 'West Philadelphia',
    img: 'freshPrince.png',
  }, ];
  // iterate through questions with callback
  questions.forEach(function(qObj, qIndex, qArr) {
    // assigns object to the index argument
    qObj.ID = qIndex;
  });

  var triviaQuestions = function(obj) {
    // invoke showQuestion
    showQuestion();

    if (questionCounter <= 7) {
      // if there are more questions remaining
      // set the text of the #question elememnt to be the question's text
      $('#question').text(obj.question);
      // replace img in #tv element
      $('.tv').replaceWith('<img class="tv" src="assets/images/' + obj.img +
        '">');
      // for each choice in obj.choices
      // set the id of the html element to be "#choice+(i+1)"
      // set the html content to be that choice text
      // then set the data-questionId to reference the question
      for (var i = 0; i < obj.choices.length; i++) {
        $('#choice' + (i + 1)).html(obj.choices[i]).data('questionId', obj.ID);
      };
    }
  };

  $(document).on('click', '.choices', function() {
    // when user clicks a ".choice" element
    // grab the data-questionID from the clicked element
    var index = $(this).data('questionId');
    // retrieve the actual question from the questions array
    var obj = questions[index];
    // checking iof the text in the clicked element is the same as the question's answer
    if (this.innerHTML == (obj.answer)) {
      // incrememnt questionCounter
      questionCounter++;
      // incrememnt correct count
      right++;
      // invoke triviaQuestions with currentquestion
      triviaQuestions(questions[questionCounter]);
    } else {
      // incrememnt questionCounter
      questionCounter++;
      // incrememnt incorrect count
      wrong++;
      // invoke triviaQuestions with currentquestion
      triviaQuestions(questions[questionCounter]);
    }

    if (questionCounter === 8) {
      // if no questions remain
      // hide trivia box
      $('.tv').replaceWith('<img class="tv" src="assets/images/goodJob.png">');
      $('.triviaBox').hide();
      // count the score
      $('#endgameCount').html('<div>' + 'Right: ' + right + '<br>' + '<div>' +
        'Wrong: ' + wrong);
    }
  });

  // function reset(){}
});