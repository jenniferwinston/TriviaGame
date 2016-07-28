/* Outline
Start Game
Show Questions
Timer Starts
Pick answers
Sumbit or Time runs out
Check Answers
Show Results

*/


var	questions= [
	{question:"What type of Fish is Nemo?",
	answers:["Tetra fish", "Clown fish", "Goldfish", "Beta fish"],
	correctAnswer: "Clown fish"},

	{question:"What is the name of the girl at the dentist with braces?",
	answers:["Barbara", "Sydney", "Flo", "Darla"],
	correctAnswer: "Darla"}, 

	{question:"What language does Dory claim to speak?",
	answers: ["Shark", "Clam", "Whale", "Turtle"],
	correctAnswer: "Whale"},

	{question: "What is the address on the diver mask?",
	answers:["242 Wallaby Way, Sydney", "422 Worldly Way, Sidney", "24 Wallworld Way, Syndey", "42 Wallaby Way, Sidney"],
	correctAnswer: "42 Wallaby Way, Sidney"},

	{question: "What is the sharks chant at their meeting?",
	answers: ["Just keep swimming", "Fish are friends not food", "Fish are food not friends", "Food is the fish for dinner"],
	correctAnswer: "Fish are friends not food"} 
];	

var currentQuestion = 0;
var correctAnswers = 0;


var startGame = {

	viewQuestions: function() {

		for (var i=0; i < questions.length; i++) {
			var question = $("<div>");
			question.html(questions[i].question);
			question.attr("questions-id", i);
			$('#question').append(question);

			for (ctr = 0; ctr < questions[i].answers.length; ctr++) {
    		console.log(ctr);
       		}
    	}
    
		
    	
        // $('<li><input type="radio" ' + i + answers + '</li>').appendTo(answers);
    	


	} //viewquestions
} //start game

function reset(){
	currentQuestion = 0;
	correctAnswers = 0;
}


function startTimer(){
  var counter = 60;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('Time is Up!');
        clearInterval(counter);
    }
  }, 1000);
}




$("#startClock").click(function(){
    
    // startTimer();
    startGame.viewQuestions();
 });



// $("#submitResult").click(function(){
//     showResult();
//  });








