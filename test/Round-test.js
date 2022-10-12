const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turns = require('../src/Turns');
const expect = chai.expect;


describe('Round', function() {

    it('should be a function', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck);

        expect(Round).to.be.a('function');
    });
    it('should be an instance of Round', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck);

        expect(round).to.be.a.instanceOf(Round);
    });
    it('should store incorrect guesses', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck);

        expect(round.incorrectGuesses).to.deep.equal([])
    });
    it('should count each turn', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck);

        expect(round.turnsCounter).to.equal(0);
    });
    it('should default to the first card at the start', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.currentCard).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
    });
    it('should default to percent of correct guesses to 0', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.percentOfCorrectGuesses).to.equal(0);
    });
    it('should update turns counter, evaluate guess, and give feedback if correct', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const turn1 = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
        
        round.takeTurn('object')
        expect(round.turnsCounter).to.equal(1)
        expect(turn1).to.be.a.instanceOf(Turns)
        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn1.giveFeedback()).to.equal('Correct!');
    });
    it('if feedback is incorrect, update incorrectGuesses with card id', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const turn2 = new Turns('function', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
        
        round.takeTurn('function')
        expect(round.turnsCounter).to.equal(1)
        expect(turn2).to.be.a.instanceOf(Turns)
        expect(turn2.evaluateGuess()).to.equal(false);
        expect(turn2.giveFeedback()).to.equal('Incorrect!');
        expect(round.incorrectGuesses).to.deep.equal([1])
    });
    it('should update current card', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.equal(2)
    });
    it('should calculate percent of correct guesses', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn('object');
        round.takeTurn('function');
        expect(round.calculatePercentCorrect()).to.equal('50%');
    });
});