const chai = require('chai');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const { prototype } = require('mocha');
const Card = require('../src/Card');
const expect = chai.expect;


describe('Game', () => {
    let card, deck, round, game;

    beforeEach(() => {
        card = new Card({ prototype });
        deck = new Deck([])
        round = new Round(deck);
        game = new Game(round);
    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should keep track of round', () => {
        expect(game.currentRound).to.deep.equal()
        expect(game.deck).to.deep.equal()
    });

    it('should have a property of card and deck', () => {
        expect(game.card).to.equal();
    });

    it('should create a new deck, card, and round', () => {
        expect(card).to.be.a.instanceOf(Card)
        expect(deck).to.be.a.instanceOf(Deck)
        expect(round).to.be.a.instanceOf(Round)
    });
});