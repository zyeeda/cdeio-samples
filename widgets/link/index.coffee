React = require 'react'
Colorvest = require 'colorvest'

getColor = (color='') ->
    c = color
    c = 'btn btn-' + c if c isnt ''
    c

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    render: ->
        className = @getClassName @props.className
        color = getColor @props.color
        size = @getHeightSize 'button', @props.size

        <a  
            {...@props}
            className = {("#{className} #{color} #{size}" if @props.displayStyle is 'button') || "#{className} #{size}"}
            >{@props.text}
        </a>