###
    label
    author: child
    date: 2014-12-26
###

React = require 'react'
Colorvest = require 'colorvest'

Label = React.createClass
    render: ->
        <label {...@props}  
            className=""
            >{@props.text}
        </label>

module.exports = Label