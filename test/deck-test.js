const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', function() {
    let card1, card2, card3, deck

    beforeEach(function() {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        deck = new Deck([card1, card2, card3]);
    });

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should contain Card objects', function() {
        expect(card1).to.be.an.instanceof(Card);
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });
    it('should be able to count the cards', function() {
        expect(deck.countCards()).to.deep.equal(3);
    })
})
