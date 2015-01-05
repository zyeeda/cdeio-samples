###
    label
    author: child
    date: 2014-12-26
###

React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

getColor = (color='') ->
    c = color
    c = 'text-' + c if c isnt ''
    c

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    render: ->
        className = @getClassName @props.className
        text = @props.text
        color = getColor @props.color
        others = _.omit @props, 'className', 'text'

        <label 
            {...others}
            className="#{className} #{color}">
            {text}
        </label>