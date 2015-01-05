React = require 'react'
Colorvest = require 'colorvest'

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    getChecked: ->
        console.log @refs.radio.getDOMNode()

    handleClick: ->
    	console.log @refs.radio.getDOMNode().value

    render: ->
        className = @getClassName @props.className

        <input 
            type='radio'
            ref='radio'
            {...@props}
            className={"#{className}"}
            onClick={@handleClick}
            />