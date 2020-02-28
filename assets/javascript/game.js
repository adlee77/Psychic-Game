var wins = 0
var losses = 0
var guesses = 9
var wrongguesses = ""
var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var generator =  Math.floor(Math.random()*letter.length) 
var computerPick = letter[generator]

var winsSpan = document.getElementById ("wins")  
var lossesSpan = document.getElementById("losses")
var GuessesSpan = document.getElementById("guesses")
var lettersSpan = document.getElementById("letters")

winsSpan.innerHTML = wins
lossesSpan.innerHTML = losses
GuessesSpan.innerHTML = guesses     

window.onkeypress = function(event) {

    var keyboard =  parseInt(event.keyCode)

    console.log(keyboard)
    if ((keyboard >= 97 && 122 <= keyboard) || (keyboard>=65 && 90<=keyboard)) {
        
        startGame(keyboard)
    }

}

 function startGame (keyboard) {


       var letter = String.fromCharCode(keyboard)
       letter = letter.toLowerCase()

       if (letter === computerPick) {
           wins++;
           winsSpan.innerHTML = wins;
           reset()
       }
       else {
           wrongguesses += letter;
           lettersSpan.innerHTML = wrongguesses;
        
           GuessesSpan.innerHTML = guesses;
         
           if (guesses === 0) {
               losses++;
               lossesSpan.innerHTML = losses;
               reset()
           }
           guesses--;
       }
      

 }

function reset () {
    generator =  Math.floor(Math.random()*letter.length) 
    computerPick = letter[generator]
    guesses = 9
    wrongguesses = ""
}
startGame()

// var startGame = function() {
//  console.log("start game")
// }