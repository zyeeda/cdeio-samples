###
    表单文本框
    author: child
    date: 2014-12-22
###
React = require 'react'
Colorvest = require 'colorvest'

Text_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if @props.color?
        heightSize = @getHeightSize 'input',@props.heightSize if @props.heightSize?
        columnSize = @props.columnSize if @props.columnSize?

        columnSize = 'col-lg-' + columnSize if columnSize?
        <div className={@joinClasses @props.className, color, heightSize, columnSize} >
            <input type="text"
                {...@props}
                ref="input"
                key="input"
                readOnly = {'readonly' if @props.readonly is true}
                required = {'required' if @props.required is true}
                className = {@joinClasses 'form-control'}
                />
        </div>
module.exports = Text_
