React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Button_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]
    getDefaultProps: ->
        color: 'default'
        size: 'default'

    render: ->
        color = 'btn btn-' + @props.color if not _.isUndefined @props.color
        size = @getSize @props.size if not _.isUndefined @props.size
        hidden = 'hidden' if @props.hidden is 'true'

        <button
            {...@props}
            className = {@joinClasses color, size, hidden}
            >{@props.label}
        </button>

module.exports = Button_