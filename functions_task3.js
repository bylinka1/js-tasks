var words = [
            "javascript",
            "cake",
            "juice",
            "jupiter",
            "bullshit",
            "sandwich",
            "butterfly",
            "sausages"
        ];
var pickRandomWord = function(words) {
    return words[Math.floor(Math.random() * words.length)];
};
var word = pickRandomWord(words);
var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
var guesses = 10;
var remainingLetters = word.length;
while (remainingLetters > 0 && guesses > 0 ) {
    var showPlayerProgress = function (answerArray) {
        alert(answerArray.join(" "));
    };
    showPlayerProgress(answerArray);
    var guess = function() {
        var guess = prompt("Guess the letter, or click Cancel stop playing!");
    };
    var updateGameState = function (guess, word, answerArray) {
        if (guess === null) {
            return;
        }
        if (guessNew.length !== 1) {
            return alert("Please enter a single letter!");
        } 
        return guesses--;
        for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess && answerArray[j] === "_") {
                        return answerArray[j] = guess;
                        remainingLetters--;
                    }
        }
    };
var showAnswerAndCongratulatePlayer = function (answerArray) {
    if (guesses > 0) {
        return alert("Good job! The answer was " + word); 
    }
    return alert("Very bad! the answer was " + word);
        };
