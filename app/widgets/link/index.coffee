React = require 'react'
Colorvest = require 'colorvest'

Link = React.createClass
    # mixins: [Colorvest.utils.widgetHelper]

    sizeMapping:
        large: 'lg'
        default: ''
        small: 'sm'
        xsmall: 'xs'

    typeMapping:
        button: 'btn'
        input: 'input'

    getDefaultProps: ->
        size: 'default'

    getHeightSize: (type="input", size="default") ->
        sz = @sizeMapping[size]
        tp = @typeMapping[type]

        heightSize = tp + "-" + sz if sz? and tp?
        heightSize

    render: ->
        color = ('btn btn-' + @props.color if @props.color?) || 'btn btn-default'
        size = @getHeightSize 'button', @props.size if @props.size?
        className = ("#{color} #{size}" if @props.displayStyle is 'button') || "#{size}"

        <a  
            {...@props}
            className = "#{className}"
            >{@props.text}
        </a>

module.exports = Link