React = require 'react'
Colorvest = require 'colorvest'

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    render: ->
        className = @getClassName @props.className
        size = @getHeightSize 'input', @props.heightSize

        <div className={"#{className} #{size}"}>
            <input type='file' {...@props}/>
        </div>
