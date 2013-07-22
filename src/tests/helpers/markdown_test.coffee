require "should"
path = require("path")
grunt = require("grunt")
Handlebars = require("handlebars")
require("../../lib/helpers/helpers-markdown").register Handlebars, 
  marked:
    gfm: true

pkg = grunt.file.readJSON('package.json')


simple = "{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}"
simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n"
describe "markdown", ->
  describe "should convert a block of markdown to HTML", ->
    it "{{#markdown}}", (done) ->
      template = Handlebars.compile(simple)
      template().should.equal simpleExpected
      done()

  describe "md", ->
    describe "should convert an imported markdown file to HTML", ->
      it "{{md simple1.md}}", (done) ->
        filename = path.join(__dirname, "../files/simple1.md")
        source = "{{md filename}}"
        template = Handlebars.compile(source)
        template(filename: filename).should.equal simpleExpected
        done()

describe "markdown options", ->
  it "langPrefix", (done) ->
    require("../../lib/helpers/helpers-markdown").register Handlebars, 
      marked:
        gfm: true
        langPrefix: 'language-'

    codeExample = "{{#markdown}}\n## Some Markdown\n\n```js\nvar foo='bar';\n```{{/markdown}}"
    codeExampleExpected = "<h2>Some Markdown</h2>\n<pre><code class=\"language-js\"><span class=\"keyword\">var</span> foo=<span class=\"string\">'bar'</span>;</code></pre>\n"
    template = Handlebars.compile(codeExample)
    template().should.equal codeExampleExpected
    done()

