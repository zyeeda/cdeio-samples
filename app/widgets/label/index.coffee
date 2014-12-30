###
    label
    author: child
    date: 2014-12-26
###

React = require 'react'
Colorvest = require 'colorvest'
widgetHelper = Colorvest.utils.widgetHelper

class Label extends Colorvest.Widget

    constructor: (@options) ->
        @options = options
        @el = options.el
    render: ->
        if @options.hidden is true
            visiable = 'sr-only'
        else 
            visiable = ''

        @rc = React.render(
            <label {...@options}  
                key="label" 
                className={widgetHelper.joinClasses @options.className, visiable }>
                {@options.text}
            </label>
            , @el)

module.exports = Label