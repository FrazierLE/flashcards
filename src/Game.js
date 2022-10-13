const Card = require('./Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(round) {
    this.currentRound = round;
    this.card;
  }
  start() {
    const allTheCards = prototypeQuestions.map(element => {
      this.card = new Card(element.id, element.question, element.answers, element.correctAnswer)
      this.currentRound.deck.cards.push(this.card);
      return
    });
    this.printMessage(this.currentRound.deck, this.currentRound)
    // this.printQuestion(this.currentRound)
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


//pseudocode: properties
  //currentRound property
//pseudocode: methods
  //create cards - .map() XX
  //push cards into deck - .push() XX
  //create new round using the deck
  //print message XX
  //print question