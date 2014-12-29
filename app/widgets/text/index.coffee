###
    表单文本框
    author: child
    date: 2014-12-22
###

React = require 'react'
Colorvest = require 'colorvest'
Text_ = require './text.react'

class Text extends Colorvest.Widget

    constructor: (@options) ->
        @options = options
        @el = options.el

    getValue: ->
        @rc.getValue()
        
    render: ->
        @rc = React.render(<Text_ {...@options} />, @el)

module.exports = Text