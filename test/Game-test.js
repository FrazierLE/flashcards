const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turns = require('../src/Turns');
const Game = require('../src/Game');
const { prototype } = require('mocha');
const expect = chai.expect;


describe('Game', function(){
    let cards, deck, round, game;
    beforeEach(function() {
        // card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        // card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        // card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
        // deck = new Deck([card1, card2, card3])
        // cards = {prototype}
        deck = new Deck([])
        round = new Round(deck);
        game = new Game(round);
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should keep track of round', function() {
        expect(game.currentRound).to.deep.equal(round)
    });

    it('should have a property of card', function() {
        expect(game.card).to.equal();
    })

    it('should have a method to start game', function() {
        expect(game.start()).to.equal()
    })
})