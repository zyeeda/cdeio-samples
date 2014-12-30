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
        heightSizing = @getHeightSizing @props.heightSizing if not _.isUndefined @props.heightSizing
        columnSizing = @props.columnSizing if not _.isUndefined @props.columnSizing

        columnSizing = 'col-lg-' + columnSizing if columnSizing?
        <div className={@joinClasses @props.className, color, heightSizing, columnSizing} >
            <input type="text"
                {...@props}
                ref="input"
                key="input"
                readOnly = {'readonly' if @props.readonly is true}
                required = {'required' if @props.required is true}
                className = {@joinClasses 'form-control'}
                placeholder = {@props.placeholder}
                />
        </div>
module.exports = Text_
