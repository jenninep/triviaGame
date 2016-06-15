$(document).ready(function() {
  
  
   
var right = 0;
var wrong = 0;
var countDown = 30; 
var questionId = 0;
var intervalID;
var questionCounter = 0;
var selections = [];

function showQuestion(questionId) {
        countDown =30;
        clearInterval(intervalID);
         intervalID = setInterval(timer,1000);
     }

function timer(){     		
	countDown -- ; 
// console.log(countDown);
	$('#display').html(countDown);
if(countDown === 0){
    clearInterval(intervalID);
    questionId++
    // triviaQuestions(questions[questionCounter]);
}
}

$('.triviaBox').hide();
 
  $('.startButton').click(function(){
  $('.intro').hide(); 
  $('.triviaBox').show();
  $('.display').html(questions.timer);
   triviaQuestions(questions[questionCounter]);
  

});
 

var questions = [{
    question: 'Who played Danny Tanner in the TV series "Full House"?',
    choices:["Bob Saget","Dave Coulier","John Posey"],
    answer: "Bob Saget",
    img: '1fullHouse.png'
}, {
	question:  'Which "Wonder Years" favorite was only supposed to appear in the pilot?',
    choices:["Winnie Cooper","Paul Pfeiffer","Wayne Arnold"],
    answer: "Winnie Cooper",
    img: '2wonderYears.png'
}, {
    question: 'Which 2016 presidential candidate made a cameo on "The Fresh Prince of Bel-Air"?',
    choices:["Hillary Clinton","Jeb Bush","Donald Trump"],
    answer: "Donald Trump",
    img: 'freshPrince.png'
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
    question:'What was the name of the bar/restaurant on Three\'s Company?',
    choices:["Bar None","Drunken Monkey","Regal Beagle"],
    answer: "threesCompany",
    img: 'threesCompany.png'
},  {
    question:  'Where was Will "born and raised?',
    choices:["New York","Vermont","West Philadelphia"],
    answer: "West Philadelphia",
    img: 'freshPrince.png'
}];




var triviaQuestions = function(obj) {	
	console.log(obj);
    countDown =30;
        clearInterval(intervalID);
         intervalID = setInterval(timer,1000);
    $('#question').text(obj.question);
    console.log(obj.choices);
  	$('.tv').replaceWith('<img class="tv" src="assets/images/' + obj.img + '">');

    for (var i = 0; i < obj.choices.length; i++) {
    	$('#choice' + (i + 1)).html(obj.choices[i]).data("questionId", i);
  		
  	};
  	// questionCounter ++;
 
	
}

$(document).on("click", ".choices", function() {
	var index = $(this).data("questionId");
	var obj = questions[index];
	console.log('hey look here for this' + this.innerHTML);
	console.log('also look here for that' + obj.answer)

	if (this.innerHTML.trim() == (obj.answer.trim())){
		console.log('thing fired this is true');
		// $('#question').replaceWith(obj.question);
		console.log(obj.answer);
		console.log('you r teh winnerz');
		questionCounter ++;
		triviaQuestions(questions[questionCounter]);
	} else { 
		questionCounter ++;
		triviaQuestions(questions[questionCounter]);
		wrong++

	}			
})




})


