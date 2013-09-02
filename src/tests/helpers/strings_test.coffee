require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-strings').register Handlebars, {}



describe 'lowercase', ->
  describe '{{lowercase string}}', ->
    it 'should return the string in lowercase', ->
      source   = '{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}'
      template = Handlebars.compile(source)
      template().should.equal 'bender should not be allowed on tv'

describe 'uppercase', ->
  describe '{{uppercase string}}', ->
    it 'should return the string in uppercase', ->
      source   = '{{uppercase "bender should not be allowed on tv"}}'
      template = Handlebars.compile(source)
      template().should.equal 'BENDER SHOULD NOT BE ALLOWED ON TV'

describe 'capitalizeFirst', ->
  describe '{{capitalizeFirst string}}', ->
    it 'should return the string with the first word capitalized.', ->
      source   = '{{capitalizeFirst "bender should not be allowed on tv"}}'
      template = Handlebars.compile(source)
      template().should.equal 'Bender should not be allowed on tv'

describe 'capitalizeEach', ->
  describe '{{capitalizeEach string}}', ->
    it 'should return the string with the every word capitalized.', ->
      source   = '{{capitalizeEach "bender should not bE allowed on tV"}}'
      template = Handlebars.compile(source)
      template().should.equal 'Bender Should Not BE Allowed On TV'

describe 'titleize', ->
  describe '{{titleize string}}', ->
    it 'should return the string in title case.', ->
      source   = '{{titleize "Bender-should-Not-be-allowed_on_Tv"}}'
      template = Handlebars.compile(source)
      template().should.equal 'Bender Should Not Be Allowed On Tv'

describe 'sentence', ->
  describe '{{sentence string}}', ->
    it 'should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', ->
      source   = '{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}'
      template = Handlebars.compile(source)
      template().should.equal 'Bender should not be allowed on tv. Fry should be allowed on tv.'

describe 'reverse', ->
  describe '{{reverse string}}', ->
    it 'should return the string in reverse.', ->
      source   = '{{reverse "bender should NOT be allowed on TV."}}'
      template = Handlebars.compile(source)
      template().should.equal '.VT no dewolla eb TON dluohs redneb'

describe 'truncate', ->
  describe '{{truncate string 31}}', ->
    it 'should return then string truncated by a specified length.', ->
      source   = '{{truncate "Bender should not be allowed on tv." 31}}'
      template = Handlebars.compile(source)
      template().should.equal 'Bender should not be allowed on'

  describe '{{truncate string 31 "..."}}', ->
    it 'should return then string truncated by a specified length, providing a custom string to denote an omission.', ->
      source   = '{{truncate "Bender should not be allowed on tv." 31 "..."}}'
      template = Handlebars.compile(source)
      template().should.equal 'Bender should not be allowed...'

describe 'center', ->
  describe '{{center string}}', ->
    it 'should return the string centered by using non-breaking spaces.', ->
      source   = '{{center "Bender should not be allowed on tv." 2}}'
      template = Handlebars.compile(source)
      template().should.equal '&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;'

describe "hyphenate", ->
  describe "{{hyphenate string}}", ->
    it "should return the string with spaces replaced with hyphens.", ->
      source = '{{hyphenate "Bender should not be allowed on tv."}}'
      template = Handlebars.compile(source)
      template().should.equal "Bender-should-not-be-allowed-on-tv."

describe "dashify", ->
  describe "{{hyphenate string}}", ->
    it "should return the string with periods replaced with hyphens.", ->
      source = '{{dashify "Bender.should.not.be.allowed.on.tv."}}'
      template = Handlebars.compile(source)
      template().should.equal "Bender-should-not-be-allowed-on-tv-"

describe "startsWith", ->
  describe '{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}', ->
    it "should render 'Yes he is', from inside the block.", ->
      source = '{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}'
      template = Handlebars.compile(source)
      template().should.equal "Yes he is"

  describe "{{#startsWith somePrefix badString}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}", ->
    it "should render the Inverse block.", ->
      source = '{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}'
      template = Handlebars.compile(source)
      template().should.equal "Bro, do you even hello world?"

  describe "{{#startsWith somePrefix nullProperty}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}", ->
    it "should render the Inverse block.", ->
      source = '{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}'
      template = Handlebars.compile(source)
      context = {}
      template(context).should.equal "inverse block"
