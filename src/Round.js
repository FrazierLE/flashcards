const Turns = require("./Turns");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.incorrectGuesses = [];
        this.turnsCounter = 0;
        this.currentCard = deck.cards[0];
        this.percentOfCorrectGuesses = 0;
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        const turn = new Turns(guess, this.currentCard);
        turn.evaluateGuess();
        if (turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(this.currentCard.id)
        }; 
        this.turnsCounter++
        this.currentCard = this.deck.cards[this.turnsCounter];
        turn.giveFeedback();
        return
    }
    calculatePercentCorrect() {
        this.percentOfCorrectGuesses = (this.incorrectGuesses.length)/(this.turnsCounter) * 100;
    }
    endRound() {
        return `**Round over!**You answered ${this.percentOfCorrectGuesses}% of the questions correctly!`
    }
}   



module.exports = Round;
//pseudocode: properties
//pseudocode: methods
    //returnCurrentCard method - return this.currentCard
    //takeTurn method -
        //need to update currentCard property to the next card
    //calculatePercentCorrect - need to return total number of guesses/divided by correct # of guesses
    //endRound - prints round over and what percent they answered correctly - interpolation
