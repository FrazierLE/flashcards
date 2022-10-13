const Card = require('./Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = null;
    this.card;
    this.deck = null;
  }
  start() {
    const allTheCards = prototypeQuestions.map(element => {
      return this.card = new Card(element.id, element.question, element.answers, element.correctAnswer)
    });
    this.deck = new Deck(allTheCards)
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;
