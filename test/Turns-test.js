const chai = require('chai');
const Card = require('../src/Card');
const Turns = require('../src/Turns');
const expect = chai.expect;

describe('Turns', function() {
    let card1

    beforeEach(function() {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    });

    it('should be a function', function() {
        const turns = new Turns();
        expect(Turns).to.be.a('function');
    });

    it('should store user\'s guess', function() {
        const turns = new Turns('otter');
        expect(turns.userGuess).to.equal('otter')
    });

    it('should store Card class as argument', function() {
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
        expect(turns.card).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });

    it('should return the guess', function() {
        const turns = new Turns('object');
        expect(turns.returnGuess()).to.equal('object');
    });

    it('should return the Card', function() {
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        expect(turns.returnCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });

    it('should return true if user\'s guess is correct', function() {
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.evaluateGuess()).to.deep.equal(true)
    });

    it('should return false if user\'s guess is incorrect', function() {
        const turns = new Turns('array', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.evaluateGuess()).to.deep.equal(false)
    });

    it('should return correct if guess is correct', function() {
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.giveFeedback()).to.deep.equal('Correct!')
    });

    it('should return incorrect if guess is incorrect', function() {
        const turns = new Turns('array', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.giveFeedback()).to.deep.equal('Incorrect!')
    });
})