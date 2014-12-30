###
    表单文本框
    author: child
    date: 2014-12-22
###
React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Text_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if not _.isUndefined @props.color
        heightSize = @getHeightSize @props.heightSize if not _.isUndefined @props.heightSize
        columnSize = @props.columnSize if not _.isUndefined @props.columnSize

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
