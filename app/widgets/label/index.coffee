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
        if @options.hidden is true
            visiable = 'sr-only'
        else 
            visiable = ''

        # console.log 'label onClick is : ', @options.onClick
        @rc = React.render(
            <label {...@options} className={Colorvest.utils.widgetHelper.joinClasses visiable }>
                {@options.text}
            </label>
            , @el)

module.exports = Label