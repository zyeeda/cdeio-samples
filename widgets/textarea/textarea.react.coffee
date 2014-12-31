React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Textarea_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        rows: '4'
        color: 'info'

    getValue: ->
        @refs.textarea.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if not _.isUndefined @props.color 
        heightSize = @getHeightSize @props.heightSize if not _.isUndefined @props.heightSize
        columnSize = @props.columnSize if not _.isUndefined @props.columnSize

        columnSize = 'col-lg-' + columnSize if columnSize?

        <div className = {@joinClasses 'form-group', color, heightSize, columnSize}>
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