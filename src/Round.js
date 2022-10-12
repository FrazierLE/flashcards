const Turns = require("./Turns");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.incorrectGuesses = [];
        this.turnsCounter = 0;
        this.currentCard = deck.cards[0];
        this.percentOfCorrectGuesses = 0;
    }
    takeTurn(guess) {
       this.turnsCounter++
       const turn = new Turns(guess, this.currentCard);
       turn.evaluateGuess();
       turn.giveFeedback();
    }
}



module.exports = Round;
//pseudocode: properties
    //need to take in responses
    //need to record guesses
    //need to sort correct and incorrect guesses
//pseudocode: methods
    //returnCurrentCard method - return this.currentCard
    //takeTurn method -
            //needs to return feedback and record guess
        //need to store ids of incorrect guesses 
        //need to update currentCard property to the next card
    //calculatePercentCorrect - need to return total number of guesses/divided by correct # of guesses
    //endRound - prints round over and what percent they answered correctly - interpolation
