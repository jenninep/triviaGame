$(document).ready(function() {

    // create globals {correctCount, wrongCount, countDown, currentQuestion, intervalID, questionCounter, selections }
    var correctCount = 0;
    var wrongCount = 0;
    ///*** variable declaration. NOT ASSIGNMENT. (mostly for scope******)//
    var currentQuestion;
    var currQIndex;

    // create questions
    // // write a createQuestion() function
    // evaluateChoice (function)
    // create a timer
    // click handler
    // assignsChoice
    // scoreboard/score function
    // reset function
    // 

    // create an array of questions
    var questions = [];

    // questions as object
    // // questionText, choices 1-3, correctIndex, correctAnswer, questionID
    // //*************** GENERAL STRUCTURE OF A QUESTION *************

    // var q0 = {
    //     questionID: 0,
    //     questionText: 'Who played Danny Tanner in the TV series "Full House"?',
    //     choices: ["Bob Saget", "Dave Coulier", "John Posey"],
    //     correctIndex: 0,
    //     correctAnswer: choices[correctIndex],
    // ******** END STRUCTURE***********
    // function to create questions

    function createQuestion(qText, aText, wrong0, wrong1, imgPath) {
        // create a question objects (qObj)
        // set qobj text, answerText, choices
        var qObj = {
            questionText: qText,
            answerText: aText,
            choices: [aText, wrong0, wrong1],
            img: imgPath
        };
        //**anda updates**//
        //we need to randomize the answers//
        // randomizeAnswers(qObj.answers)
        // 
        qObj.choices = randomizeAnswers(qObj.choices);
        // set the correct index
        qObj.correctIndex = qObj.choices.indexOf(aText);
        // return the qobj
        return qObj;

    };
    //** anda updates **//
    // randomize andswer function
    // 
    function randomizeAnswers(answers) {
        var temporaryValue;
        var randomIndex;
        var currentIndex = answers.length;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            temporaryValue = answers[currentIndex];
            answers[currentIndex] = answers[randomIndex];
            answers[randomIndex] = temporaryValue;
        }
        return answers;
    }



    // create each question
    var fullHouseQ = createQuestion('Who played Danny Tanner in the TV series "Full House"?', "Bob Saget", "Dave Coulier", "John Posey", '1fullHouse.png');
    var wonderQ = createQuestion('Which "Wonder Years" favorite was only supposed to appear in the pilot?', "Winnie Cooper", "Paul Pfeiffer", "Wayne Arnold", '2wonderYears.png');

    // push each question into the array
    questions.push(fullHouseQ, wonderQ);
    // console.log(questions);
    function evaluateChoice(question, userchoice) {
        var currentQuestion = question;
        // find the correct answer
        var answer = question.answerText;
        // compare to userchoice
        // return true or false
        if (userchoice === question.correctIndex) {
            return true
        } else {
            return false;
        }
        ///***ORIGINAL BEFORE USING INDEX****///
        // if (usersChoice === answer) {
        // return true
        // } else {
        // return false;
        // }
    }

    // create test variables and check
    console.log("fullhouseindex", fullHouseQ.correctIndex);
    console.log("wonderyears index", wonderQ.correctIndex);

    eval1 = evaluateChoice(fullHouseQ, 1);
    eval2 = evaluateChoice(wonderQ, wonderQ.correctIndex);
    console.log("first answer", eval1);
    console.log("second answer", eval2);

    // create a function that sets the current question called (setQuestion)
    function setQuestion() {
        // if currQindex is not set, force it to zero
        if (!currQIndex) {
            currQIndex = 0;
        }
        currentQuestion = questions[currQIndex];
    }
    // it increases current index and then sets question
    function incrementQuestion() {
        currQIndex++;
        setQuestion();
    }
    triviaQuestions(currentQuestion);
    // increase the users correct
    function incrementCorrect() {
        correctCount++;
    }

    function incrementWrong() {
        wrongCount++;
    }

    // endGame function
    // resetGame
    // create functions to change score
    var countDown = 30;

    function timer() {
        countDown--;
        // console.log(countDown);
        $('#display').html(countDown);
        if (countDown === 0) {
            clearInterval(intervalID);
            questionId++
            // triviaQuestions(questions[questionCounter]);
        }
    }
    $('.startButton').click(function() {
        $('.intro').hide();
        $('.triviaBox').show();
        $('.display').html(questions.timer);
        triviaQuestions(questions[questionCounter]);


    });

    function triviaQuestions(obj) {
        countDown = 30;
        clearInterval(intervalID);
        intervalID = setInterval(timer, 1000);
        if (currQIndex <= 7) {
            $('#question').text(obj.questionText);
            $('.tv').replaceWith('<img class="tv" src="assets/images/' + obj.img + '">');
            for (var i = 0; i < obj.choices.length; i++) {
                $('#choice' + (i + 1)).html(obj.choices[i]).data("questionId", i);

            };
        } // questionCounter ++;
    }
    $(document).on("click", ".choices", function() {
        var index = $(this).data("questionId");
        console.log('question ID', index);
        var obj = questions[index];
        console.log("the question object", obj);
        // console.log('hey look here for this' + this.innerHTML);
        // console.log('also look here for that' + obj.answer)
        // console.log("what does the button say", this.innerHTML);
        // console.log("what is this questions answer?", obj.answer);
        if (this.innerHTML == (obj.answer)) {
            // console.log('thing fired this is true');
            // $('#question').replaceWith(obj.question);
            // console.log(obj.answer);
            questionCounter++;
            right++
            console.log('right')
            triviaQuestions(questions[questionCounter]);

        } else {
            questionCounter++;
            triviaQuestions(questions[questionCounter]);
            wrong++
            console.log('wrong')

        }
        if (questionCounter === 8) {
            console.log('game over');


            $('.triviaBox').hide();
            $('#endgameCount').html('<div>' + 'right: ' + right + '<br>' + '<div>' + 'wrong: ' + wrong);

        }
    })

});