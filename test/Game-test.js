const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turns = require('../src/Turns');
const Game = require('../src/Game');
const { prototype } = require('mocha');
const expect = chai.expect;


describe('Game', function(){
    let card, deck, round, game;

    beforeEach(function() {
        deck = new Deck([])
        round = new Round(deck);
        game = new Game(round);
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should keep track of round', function() {
        expect(game.currentRound).to.deep.equal(null)
        expect(game.deck).to.deep.equal(null)
    });

    // it('should have a property of card and deck', function() {
    //     expect(game.card).to.equal(card);
    // })

    it('should create a new deck, round, and card', function() {
        // expect(card).to.be.a.instanceOf(Card)
        expect(deck).to.be.a.instanceOf(Deck)
        expect(round).to.be.a.instanceOf(Round)
    })
})