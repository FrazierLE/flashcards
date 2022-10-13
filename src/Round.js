const Turns = require("./Turns");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.incorrectGuesses = [];
        this.turnsCounter = 0;
        this.currentCard = deck.cards[0];
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        const turn = new Turns(guess, this.currentCard);
        if (!turn.evaluateGuess()) {
           this.incorrectGuesses.push(this.currentCard.id)
        }; 
        this.turnsCounter++
        this.currentCard = this.deck.cards[this.turnsCounter];
        return turn.giveFeedback();
    }
    calculatePercentCorrect() {
        var percentOfCorrectGuesses = ((this.turnsCounter-this.incorrectGuesses.length))/(this.turnsCounter) * 100;
        return percentOfCorrectGuesses;
    }
    endRound() {
        var endMessage = `**Round over!**You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(endMessage);
        return endMessage;
    }
}   

module.exports = Round;

