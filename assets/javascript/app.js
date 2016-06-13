$(document).ready(function() {
  
  
   
var right = 0;
var wrong = 0;
var countDown = 30; 
var questionId = 0;
var intervalID;

function showQuestion(questionId) {
        countDown =30;
        clearInterval(intervalID);
         intervalID = setInterval(timer,1000);
     }

function timer(){     		
	countDown -- ; 
console.log(countDown);
	$('#countdown').html(countDown);
if(countDown === 0){
    clearInterval(intervalID);
    questionId++
    showQuestion(questionId);
}
}

$('.triviaBox').hide();
 
  $('.startButton').click(function(){
  $('.intro').hide(); 
  $('.triviaBox').show();
  // $('.display').html(questions.timer);
  console.log("Test")
  triviaQuestions();
  triviaAnswers();

  });
 



var questions = [{
    question : 'Who played Danny Tanner in the TV series "Full House"?',
    choices :[" Bob Saget","Dave Coulier","John Posey"],
    answer : "Bob Saget",
    img : 'fullHouse.png'
}, {
	question:  'Which "Wonder Years" favorite was only supposed to appear in the pilot?',
    choices :["Winnie Cooper","Paul Pfeiffer","Wayne Arnold"],
    answer : "Winnie Cooper",
    img : 'wonderYears.png'
}, {

    question : 'Which 2016 presidential candidate made a cameo on "The Fresh Prince of Bel-Air"?',
    choices :["Hillary Clinton","Jeb Bush","Donald Trump"],
    answer : "Donald Trump",
    img : 'fullHouse.png'
},  {
  
    question: 'Which 90\'s teen queen turned down the lead role on "Buffy the Vampire Slayer"?',
    choices:["Keri Russell","Katie Holmes","Jennifer Love Hewitt"],
    answer: "Katie Holmes",
    img: 'buffySlayer.png'
},  {
    
    question: 'What was the name of the school mistress in "The Facts of Life"?',
    choices:["Mrs. Edna Garrett","Mrs. Wilma Frett","Mrs. Blair "],
    answer: "Mrs. Edna Garrett",
    img: 'factsLife.png'
},  {

    question:  'What was the name of Arnold\'s fish on Different Strokes?',
    choices:["Goldie","Abraham","Ted"],
    answer: "Abraham",
    img: 'diffStrokes.png'
},  {

    question:  'What was the name of the bar/restaurant on Three\'s Company?',
    choices:["Bar None","Drunken Monkey","Regal Beagle"],
    answer: "threesCompany",
},  {

    question:  'Where was Will "born and raised?',
    choices:["New York","Vermont","West Philadelphia"],
    answer: "West Philadelphia",
    img: 'freshPrince.png'
},  {
}];



var triviaQuestions = function(obj) {	
    $('#question').html(obj.question);
}




triviaQuestions(questions[0]);
var output =  '';
     
for (var i = 0; i <= questions.choices.length -1; i++) {
	for (key in questions.choices[i]) {
		if (questions.choices[i].hasOwnProperty (key)) {
			output += questions.choices[i][key]
		}
	}
}
var update = document.getElementbyID('choice1');
update.innerHTML = output;

})
