###
    表单文本框
    author: child
    date: 2014-12-22
###

React = require 'react'
Colorvest = require 'colorvest'

Text = React.createClass
    mixins: [Colorvest.utils.widgetHelper]

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if @props.color?
        heightSize = @getHeightSize 'input',@props.heightSize if @props.heightSize?
        columnSize = @props.columnSize if @props.columnSize?

        columnSize = 'col-lg-' + columnSize if columnSize?
        <div className='#{className} #{color} #{heightSize} #{columnSize}' >
            <input type='text'
                {...@props}
                ref='input'
                readOnly = {'readonly' if @props.readOnly is true}
                className = 'form-control'
                />
        </div>
module.exports = Text