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

