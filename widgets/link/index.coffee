React = require 'react'
Colorvest = require 'colorvest'
Link_ = require './link.react'

class Link extends Colorvest.Widget

    constructor: (@options) ->
        @el = options.el
    render: ->
        @rc = React.render(<Link_ {...@options} />, @el)

module.exports = Link