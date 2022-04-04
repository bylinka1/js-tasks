var pickWord = function(words) {
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
    return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

var getGuess = function() {
    var guess = prompt("Guess the letter, or click Cancel stop playing!");
    return guess;
};

var updateGameState = function (guess, word, answerArray) {
    if (guess.length !== 1) {
        return alert("Please enter a single letter!");
    } 
    
    var count = 0; 
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            count++;
            answerArray[j] = word[j];
        }
    }
    return count;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    return alert("Good job! The answer was " + word); 
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);
