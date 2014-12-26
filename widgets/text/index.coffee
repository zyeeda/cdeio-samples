###
    表单文本框
    author: child
    date: 2014-12-22
###

React = require 'react'
Widget = require 'colorvest/dist/core/widget'
Text_ = require './text.react'

class Text extends Widget

    constructor: (@options) ->
        @el = options.el
    onBlur: (e) ->
    render: ->
        @rc = React.render(<Text_ {...@options} />, @el)
        console.log 'rc is :', @rc

module.exports = Text