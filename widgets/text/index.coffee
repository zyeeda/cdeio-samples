###
    表单文本框
    author: child
    date: 2014-12-22
###

Widget = require 'colorvest/core/widget'
ReactText = require 'widgets/text/text.react'

class Text extends Widget

    constructor: (@options) ->
        @el = options.el
    onBlur: (e) ->
    render: ->
        @rc = React.render(<ReactText {...@options} />, @el)
        console.log 'rc is :', @rc

module.exports = Text
# module.exports = React.createFactory(Text);
# module.exports = React.createFactory(React.createClass(Text));

# TODO 如何继承