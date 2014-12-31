React = require 'react'
Colorvest = require 'colorvest'

Button_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        color: 'default'
        size: 'default'

    render: ->
        color = 'btn btn-' + @props.color if @props.color?
        size = @getHeightSize 'button', @props.size if @props.size?
        hidden = 'hidden' if @props.hidden is true

        <button
            {...@props}
            ref = "button"
            key = "button"
            disabled = {'disabled' if @props.disabled is true}
            className = {@joinClasses color, size, hidden}
            >{@props.label}
        </button>

module.exports = Button_