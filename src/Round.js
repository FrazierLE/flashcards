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
        if (turn.evaluateGuess() === false) {
           this.incorrectGuesses.push(this.currentCard.id)
        }; 
        this.turnsCounter++
        this.currentCard = this.deck.cards[this.turnsCounter];
        return turn.giveFeedback();
    }
    calculatePercentCorrect() {
       return this.percentOfCorrectGuesses = ((this.turnsCounter-this.incorrectGuesses.length))/(this.turnsCounter) * 100;
    }
    endRound() {
        console.log(`**Round over!**You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
        return
    }
}   

module.exports = Round;

