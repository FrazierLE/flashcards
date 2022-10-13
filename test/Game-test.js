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
        game.start()
    })
})