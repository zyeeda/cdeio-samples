React = require 'react'
Colorvest = require 'colorvest'

getColor = (color='') ->
    c = color
    c = 'has-' + c if c isnt ''
    c

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    getValue: ->
        selected = @refs.select.getDOMNode().options.selectedIndex
        @refs.select.getDOMNode().options[selected].label

    render: ->
        color = getColor @props.color
        className = @getClassName @props.className
        heightSize = @getHeightSize 'input', @props.heightSize 
        columnSize = @getColumnSize @props.columnSize
    
        <div className={"#{className} #{heightSize} #{columnSize} #{color}"}>
            <select
                {...@props}
                ref='select'
                className='form-control'
                >{@props.children}
            </select>
        </div>
