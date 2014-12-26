###
    label
    author: child
    date: 2014-12-26
###

React = require 'react'
Colorvest = require 'colorvest'

class Label extends Colorvest.Widget

    constructor: (@options) ->
        @options = options
        @el = options.el
    render: ->
        # console.log 'text in label is :', @props.text
        @rc = React.render(
            <label {...@options}   >
                {@options.text}
            </label>
            , @el)

module.exports = Label