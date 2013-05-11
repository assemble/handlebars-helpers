require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-math').register Handlebars, {}



context = value: 5

describe 'add', ->
    describe '{{add value 5}}', ->
        it 'should return the sum of two numbers.', ->
            source   = '{{add value 5}}'
            template = Handlebars.compile(source)

            template(context).should.equal 10

describe 'subtract', ->
    describe '{{subtract value 5}}', ->
        it 'should return the difference of two numbers.', ->
            source   = '{{subtract value 5}}'
            template = Handlebars.compile(source)

            template(context).should.equal 0

describe 'divide', ->
    describe '{{divide value 5}}', ->
        it 'should return the division of two numbers.', ->
            source   = '{{divide value 5}}'
            template = Handlebars.compile(source)

            template(context).should.equal 1

describe 'multiply', ->
    describe '{{multiply value 5}}', ->
        it 'should return the multiplication of two numbers.', ->
            source   = '{{multiply value 5}}'
            template = Handlebars.compile(source)

            template(context).should.equal 25

describe 'floor', ->
    describe '{{floor 5}}', ->
        it 'should return the value rounded down to the nearest integer.', ->
            source   = '{{floor value}}'
            template = Handlebars.compile(source)

            template(context = value: 5.6).should.equal 5

describe 'ceil', ->
    describe '{{ceil 5}}', ->
        it 'should return the value rounded up to the nearest integer.', ->
            source   = '{{ceil value}}'
            template = Handlebars.compile(source)

            template(context = value: 5.6).should.equal 6

describe 'round', ->
    describe '{{round 5}}', ->
        it 'should return the value rounded to the nearest integer.', ->
            source   = '{{round value}}'
            template = Handlebars.compile(source)

            template(context = value: 5.69).should.equal 6

describe 'sum', ->
    describe '{{sum value 67 80}}', ->
        it 'should return the sum of multiple numbers.', ->
            source   = '{{sum value 67 80}}'
            template = Handlebars.compile(source)

            template(context = value: 20).should.equal 167

describe 'sum', ->
    describe '{{sum 1 2 3}}', ->
        it 'should return the sum of multiple numbers.', ->
            source   = '{{sum 1 2 3}}'
            template = Handlebars.compile(source)

            template().should.equal 6

describe 'sum', ->
    describe '{{sum value}}', ->
        it 'should return the total sum of array.', ->
            source   = '{{sum value}}'
            template = Handlebars.compile(source)

            template(context = value: [1,2,3]).should.equal 6

describe 'sum', ->
    describe '{{sum value 5}}', ->
        it 'should return the total sum of array and numbers.', ->
            source   = '{{sum value 5}}'
            template = Handlebars.compile(source)

            template(context = value: [1,2,3]).should.equal 11
