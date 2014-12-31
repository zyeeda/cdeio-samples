###
    label
    author: child
    date: 2014-12-26
###

React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    render: ->
        className = @getClassName @props.className
        text = @props.text
        others = _.omit @props, 'className', 'text'

        <label 
            {...others}
            className={className}>
            {text}
        </label>