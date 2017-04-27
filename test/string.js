'use strict';

var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');
helpers.string({handlebars: hbs});

describe('string', function() {
  describe('camelcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{camelcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in camelcase', function() {
      var fn = hbs.compile('{{camelcase "foo bar baz qux"}}');
      assert.equal(fn(), 'fooBarBazQux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{camelcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{camelcase "A"}}')(), 'a');
    });
  });

  describe('capitalize', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{capitalize}}');
      assert.equal(fn(), '');
    });
    it('should capitalize a word.', function() {
      var fn = hbs.compile('{{capitalize "foo"}}');
      assert.equal(fn(), 'Foo');
    });
  });

  describe('capitalizeAll', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{capitalizeAll}}');
      assert.equal(fn(), '');
    });
    it('should return the string with the every word capitalized.', function() {
      var fn = hbs.compile('{{capitalizeAll "bender should not bE allowed on tV"}}');
      assert.equal(fn(), 'Bender Should Not BE Allowed On TV');
    });
  });

  describe('center', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{center}}');
      assert.equal(fn(), '');
    });
    it('should return the string centered by using non-breaking spaces.', function() {
      var fn = hbs.compile('{{center "Bender should not be allowed on tv." 2}}');
      assert.equal(fn(), '&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });

  describe('chop', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{chop}}');
      assert.equal(fn(), '');
    });
    it('should remove non-word characters from start of string', function() {
      var fn = hbs.compile('{{chop "- foo bar baz"}}');
      assert.equal(fn(), 'foo bar baz');
    });
    it('should remove non-word characters from end of string', function() {
      var fn = hbs.compile('{{chop "foo bar baz _- "}}');
      assert.equal(fn(), 'foo bar baz');
    });
  });

  describe('dashcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{dashcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in dashcase', function() {
      var fn = hbs.compile('{{dashcase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo-bar-baz-qux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{dashcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{dashcase "A"}}')(), 'a');
    });
  });

  describe('dotcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{dotcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in dotcase', function() {
      var fn = hbs.compile('{{dotcase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo.bar.baz.qux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{dotcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{dotcase "A"}}')(), 'a');
    });
  });

  describe('hyphenate', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{hyphenate}}');
      assert.equal(fn(), '');
    });
    it('should return the string with spaces replaced with hyphens.', function() {
      var fn = hbs.compile('{{hyphenate "Bender should not be allowed on tv."}}');
      assert.equal(fn(), 'Bender-should-not-be-allowed-on-tv.');
    });
  });

  describe('lowercase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{lowercase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in lowercase', function() {
      var fn = hbs.compile('{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}');
      assert.equal(fn(), 'bender should not be allowed on tv');
    });
  });

  describe('occurrences', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{occurrences}}');
      assert.equal(fn(), '');
    });
    it('should return the number of occurrences of a string, within a string.', function() {
      var fn = hbs.compile('{{occurrences "Death by Snu-Snu" "Snu"}}');
      assert.equal(fn(), '2');
    });
  });

  describe('pascalcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{pascalcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in pascalcase', function() {
      var fn = hbs.compile('{{pascalcase "foo bar baz qux"}}');
      assert.equal(fn(), 'FooBarBazQux');
    });
    it('should uppercase a single character', function() {
      assert.equal(hbs.compile('{{pascalcase "f"}}')(), 'F');
      assert.equal(hbs.compile('{{pascalcase "A"}}')(), 'A');
    });
  });

  describe('pathcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{pathcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in pathcase', function() {
      var fn = hbs.compile('{{pathcase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo/bar/baz/qux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{pathcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{pathcase "A"}}')(), 'a');
    });
  });

  describe('plusify', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{plusify}}');
      assert.equal(fn(), '');
    });
    it('should return the empty string with no change.', function() {
      var fn = hbs.compile('{{plusify ""}}');
      assert.equal(fn(), '');
    });
    it('should return the string with no change.', function() {
      var fn = hbs.compile('{{plusify "BenderShouldNotBeAllowedOnTv."}}');
      assert.equal(fn(), 'BenderShouldNotBeAllowedOnTv.');
    });
    it('should return the string with spaces replaced with pluses.', function() {
      var fn = hbs.compile('{{plusify "Bender should not be allowed on tv."}}');
      assert.equal(fn(), 'Bender+should+not+be+allowed+on+tv.');
    });
  });

  describe('replace', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{replace}}');
      assert.equal(fn(), '');
    });
    it('should replace occurrences of string "A" with string "B"', function() {
      var fn = hbs.compile('{{replace "Bender Bending Rodriguez" "B" "M"}}');
      assert.equal(fn(), 'Mender Mending Rodriguez');
    });
    it('should return the string if `a` is undefined', function() {
      var fn = hbs.compile('{{replace "a b c"}}');
      assert.equal(fn(), 'a b c');
    });
    it('should replace the string with `""` if `b` is undefined', function() {
      var fn = hbs.compile('{{replace "a b c" "a"}}');
      assert.equal(fn(), ' b c');
    });
  });

  describe('reverse', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{reverse}}');
      assert.equal(fn(), '');
    });
    it('should return the string in reverse.', function() {
      var fn = hbs.compile('{{reverse "bender should NOT be allowed on TV."}}');
      assert.equal(fn(), '.VT no dewolla eb TON dluohs redneb');
    });
  });

  describe('sentence', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{sentence}}');
      assert.equal(fn(), '');
    });
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      var fn = hbs.compile('{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}');
      assert.equal(fn(), 'Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });

  describe('snakecase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{snakecase}}');
      assert.equal(fn(), '');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{snakecase "a"}}')(), 'a');
      assert.equal(hbs.compile('{{snakecase "A"}}')(), 'a');
    });
    it('should return the string in snakecase', function() {
      var fn = hbs.compile('{{snakecase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo_bar_baz_qux');
    });
  });

  describe('split', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{split}}');
      assert.equal(fn(), '');
    });
    it('should split the string with the default character', function() {
      var fn = hbs.compile('{{#each (split "a,b,c")}}<{{.}}>{{/each}}');
      assert.equal(fn(), '<a><b><c>');
    });
    it('should split the string on the given character', function() {
      var fn = hbs.compile('{{#each (split "a|b|c" "|")}}<{{.}}>{{/each}}');
      assert.equal(fn(), '<a><b><c>');
    });
  });

  describe('titleize', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{titleize}}');
      assert.equal(fn(), '');
    });
    it('should return the string in title case.', function() {
      var fn = hbs.compile('{{titleize "Bender-should-Not-be-allowed_on_Tv"}}');
      assert.equal(fn(), 'Bender Should Not Be Allowed On Tv');
    });
  });

  describe('trim', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{trim}}');
      assert.equal(fn(), '');
    });
    it('should trim leading whitespace', function() {
      var fn = hbs.compile('{{trim "    foo"}}');
      assert.equal(fn(), 'foo');
    });
    it('should trim trailing whitespace', function() {
      var fn = hbs.compile('{{trim "foo   "}}');
      assert.equal(fn(), 'foo');
    });
  });

  describe('startsWith', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{startsWith}}');
      assert.equal(fn(), '');
    });
    it('should render "Yes he is", from inside the block.', function() {
      var fn = hbs.compile('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}');
      assert.equal(fn(), "Yes he is");
    });
    it('should render the Inverse block.', function() {
      var fn = hbs.compile('{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}');
      assert.equal(fn(), 'Bro, do you even hello world?');
    });
    it("should render the Inverse block.", function() {
      var fn = hbs.compile('{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}');
      assert.equal(fn(), 'inverse block');
    });
  });

  describe('uppercase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{uppercase}}');
      assert.equal(fn(), '');
    });

    it('should return the string in uppercase', function() {
      var fn = hbs.compile('{{uppercase "bender should not be allowed on tv"}}');
      assert.equal(fn(), 'BENDER SHOULD NOT BE ALLOWED ON TV');
    });

    it('should work as a block helper', function() {
      var fn = hbs.compile('{{#uppercase}}bender should not be allowed on tv{{/uppercase}}');
      assert.equal(fn(), 'BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });

  describe('nl2br', function() {
    it('should return an HTML line break inserted string', function() {
      var context = {str: '<span>Line1.</span>\nLine2.\r\nLine3.\rLine4.\n\rLine5.'}
      var fn = hbs.compile('{{nl2br str}}');
      assert.equal(fn(context), '&lt;span&gt;Line1.&lt;/span&gt;<br>\nLine2.<br>\r\nLine3.<br>\rLine4.<br>\n\rLine5.');
    });

    it('should return an HTML line break replaced string', function() {
      var context = {str: '<span>Line1.</span>\nLine2.\r\nLine3.\rLine4.\n\rLine5.'}
      var fn = hbs.compile('{{nl2br str replace=true}}');
      assert.equal(fn(context), '&lt;span&gt;Line1.&lt;/span&gt;<br>Line2.<br>Line3.<br>Line4.<br>Line5.');
    });

    it('should return an XHTML line break inserted string', function() {
      var context = {str: 'Line1.\nLine2.\r\nLine3.\rLine4.\n\rLine5.'}
      var fn = hbs.compile('{{nl2br str isXhtml=true}}');
      assert.equal(fn(context), 'Line1.<br />\nLine2.<br />\r\nLine3.<br />\rLine4.<br />\n\rLine5.');
    });

    it('should return an XHTML line break replaced string', function() {
      var context = {str: 'Line1.\nLine2.\r\nLine3.\rLine4.\n\rLine5.'}
      var fn = hbs.compile('{{nl2br str isXhtml=true replace=true}}');
      assert.equal(fn(context), 'Line1.<br />Line2.<br />Line3.<br />Line4.<br />Line5.');
    });
  });
});
