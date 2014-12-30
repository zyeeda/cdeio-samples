React = require 'react'
Colorvest = require 'colorvest'

Link_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        size: 'default'

    render: ->
        Component = (@props.displayStyle if @props.displayStyle is 'button') || 'a'
        color = ('btn btn-' + @props.color if @props.color?) || 'btn btn-default' if Component is 'button'
        size = @getHeigthSize 'button', @props.size if @props.size?
        hidden = 'hidden' if @props.hidden is true

        <Component
            {...@props}
            disabled = {'disabled' if @props.disabled is true}
            className = {@joinClasses color, size, hidden}
            >{@props.text}
        </Component>

module.exports = Link_