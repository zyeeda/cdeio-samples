React = require 'react'
Colorvest = require 'colorvest'

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    render: ->
        className = @getClassName @props.className

        <input 
            type='checkbox'
            ref='checkbox'
            {...@props}
            className={"#{className}"}
            />