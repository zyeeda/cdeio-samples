React = require 'react'
Colorvest = require 'colorvest'
Textarea_ = require './textarea.react'

class Textarea extends Colorvest.Widget

    constructor: (@options) ->
        @el = options.el

    getValue: ->
        @rc.getValue()
        
    render: ->
        @rc = React.render(<Textarea_ {...@options} />, @el)

module.exports = Textarea