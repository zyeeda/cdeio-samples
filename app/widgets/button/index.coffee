React = require 'react'
Colorvest = require 'colorvest'

Button = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        color: 'default'
        size: 'default'

    render: ->
        color = 'btn btn-' + @props.color if @props.color?
        size = @getHeightSize 'button', @props.size if @props.size?

        <button
            {...@props}
            className = "#{color} #{size}"
            >{@props.label}
        </button>

module.exports = Button