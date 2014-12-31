React = require 'react'
Colorvest = require 'colorvest'

Textarea = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        rows: '4'
        color: 'info'

    getValue: ->
        @refs.textarea.getDOMNode().value

    render: ->
        color = 'has-'+@props.color if @props.color? 
        heightSize = @getHeightSize @props.heightSize if @props.heightSize?
        columnSize = @props.columnSize if @props.columnSize?

        columnSize = 'col-lg-' + columnSize if columnSize?

        <div className = "'form-group' #{className} #{color} #{heightSize} #{columnSize}">
            <textarea
                {...@props}
                ref = 'textarea'
                readOnly = {'readonly' if @props.readOnly is true}
                className = 'form-control'
                >
            </textarea>
        </div>

module.exports = Textarea