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
        @el = options.el
    onBlur: (e) ->
    render: ->
        @rc = React.render(<Text_ {...@options} />, @el)
        console.log 'rc is :', @rc

module.exports = Text