var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
var setupAnswerArray = function (word) {
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        }
    return answerArray;
};
var guesses = 10;
var remainingLetters = pickRandomWord.length;
while (remainingLetters > 0 && guesses > 0 ) {
    function showPlayerProgress(answerArray) {
        alert(answerArray.join(" "));
        return answerArray;
    };
    function getGuess() {
        return prompt("Guess the letter, or click Cancel stop playing!");
    };
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        guesses--;
    }      
    var updateGameState = function (guess, word, answerArray) {
        for (var j = 0; j < pickRandomWord.length; j++) {
                    if (word[j] === guessNew && answerArray[j] === "_") {
                        answerArray[j] = guessNew;
                        remainingLetters--;
                    }
        }
    return remainingLetters;
}
function showAnswerAndCongratulatePlayer(answerArray) {
    alert(answerArray.join(" "));
        if (guesses > 0) {
           alert("Good job! The answer was " + word); 
        }
}
            alert("Very bad! the answer was " + word);
        };
