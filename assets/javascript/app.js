/* Outline
Start Game
Show Questions
Timer Starts
Pick answers
Sumbit or Time runs out
Check Answers
Show Results

*/
$( document ).ready(function() {
});

function triviaQuestions (question, choices, correctAnswer){
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}


var	questions= [
	new triviaQuestions("What type of Fish is Nemo?",
	["Tetra fish", "Clown fish", "Goldfish", "Beta fish"],
	2), //index

	new triviaQuestions("What is the name of the girl at the dentist with braces?",
	["Barbara", "Sydney", "Flo", "Darla"],
	4), 

	new triviaQuestions("What language does Dory claim to speak?",
	["Shark", "Clam", "Whale", "Turtle"],
	3),

	new triviaQuestions ("What is the address on the diver mask",
	["242 Wallaby Way, Sydney", "422 Worldly Way, Sidney", "24 Wallworld Way, Syndey", "42 Wallaby Way, Sidney"],
	4),

	new triviaQuestions ("What is the sharks chant at their meeting",
	["Just keep swimming", "Fish are friends not food", "Fish are food not friends", "Food is the fish for dinner"],
	2), 
];	



//Starts timer on click

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
    startTimer();
 });



// First question displays on click


// Records chosen answer


// Display next question on next click








