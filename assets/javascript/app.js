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

	{question: "What is the address on the diver mask",
	answers:["242 Wallaby Way, Sydney", "422 Worldly Way, Sidney", "24 Wallworld Way, Syndey", "42 Wallaby Way, Sidney"],
	correctAnswer: "42 Wallaby Way, Sidney"},

	{question: "What is the sharks chant at their meeting",
	answers: ["Just keep swimming", "Fish are friends not food", "Fish are food not friends", "Food is the fish for dinner"],
	correctAnswer: "Fish are friends not food"} 
];	


var correctGuesses = 0;



function startGame() {

	for (var i =0; i < questions.length; i++) {
		$('#question').append('<h3>' + questions[i].question + '</h3>');
	}
	for ( j= 0; j < questions[i].answers.length; j++) {
		$('#answer').append('<h4>' + questions[i].answers + '</h4>');
	}

}; //start game



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


function showResult() {
	console.log("result");

}


$("#startClock").click(function(){
    startGame();
    startTimer();
 });


//sumbit results
$("#submitResult").click(function(){
    showResult();
 });


}); //doc on ready





