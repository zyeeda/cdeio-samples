React = require 'react'
Colorvest = require 'colorvest'

Textarea_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        rows: '4'
        color: 'info'

    getValue: ->
        @refs.textarea.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if @props.color?
        heightSizing = @getHeightSize @props.heightSizing if @props.heightSizing?
        columnSizing = @props.columnSizing if not @props.columnSizing?

        columnSizing = 'col-lg-' + columnSizing if columnSizing?

        <div className = {@joinClasses 'form-group', color, heightSizing, columnSizing}>
            <textarea
                {...@props}
                ref = "textarea"
                key = "textarea"
                disabled = {'disabled' if @props.disabled is true}
                readOnly = {'readOnly' if @props.readonly is true}
                className = {@joinClasses 'form-control'}
                >
            </textarea>
        </div>

module.exports = Textarea_