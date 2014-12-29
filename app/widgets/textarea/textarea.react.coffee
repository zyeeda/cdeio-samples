React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Textarea_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        rows: '4'
        color: 'info'

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if not _.isUndefined @props.color 
        heightSizing = @getHeightSizing @props.heightSizing if not _.isUndefined @props.heightSizing
        columnSizing = @props.columnSizing if not _.isUndefined @props.columnSizing

        columnSizing = 'col-lg-' + columnSizing if columnSizing?

        <div className = {@joinClasses 'form-group', color, heightSizing, columnSizing}>
            <textarea
                {...@props}
                ref = "input"
                readOnly = {'readOnly' if @props.readonly is true}
                className = {@joinClasses 'form-control'}
                >
            </textarea>
        </div>

module.exports = Textarea_