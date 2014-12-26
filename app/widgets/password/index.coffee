React = require 'react'
Colorvest = require 'colorvest'
Password_ = require './password.react'

class Password extends Colorvest.Widget

    constructor: (@options) ->
        @el = options.el
    onBlur: (e) ->
    render: ->
        @rc = React.render(<Password_ {...@options} />, @el)

module.exports = Password