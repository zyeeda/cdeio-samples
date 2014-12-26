React = require 'react'
Colorvest = require 'colorvest'
Textraea_ = require './textarea.react'

class Textarea extends Colorvest.Widget

    constructor: (@options) ->
        @el = options.el
    onBlur: (e) ->
    render: ->
        @rc = React.render(<Textraea_ {...@options} />, @el)

module.exports = Textarea