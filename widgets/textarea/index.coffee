React = require 'react'
Colorvest = require 'colorvest'

getColor = (color='') ->
    c = color
    c = 'has-' + c if c isnt ''
    c

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    getValue: ->
        @refs.textarea.getDOMNode().value

    render: ->
        className = @getClassName @props.className
        color = getColor @props.color
        heightSize = @getHeightSize 'input', @props.heightSize
        columnSize = @getColumnSize @props.columnSize

        <div className = "#{className} #{color} #{heightSize} #{columnSize}">
            <textarea
                {...@props}
                ref = 'textarea'
                className = 'form-control'
                >
            </textarea>
        </div>