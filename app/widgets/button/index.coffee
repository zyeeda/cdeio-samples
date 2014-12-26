
React = require 'react'
Colorvest = require 'colorvest'
Button_ = require './button.react'

class Button extends Colorvest.Widget

    constructor: (@options) ->
        @el = options.el
    render: ->
        @rc = React.render(<Button_ {...@options} />, @el)

module.exports = Button