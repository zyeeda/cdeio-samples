
React = require 'react'
Colorvest = require 'colorvest'

module.exports = React.createClass
    render: ->
        <form ref='form' className='form-horizontal' >
            {@props.children}
        </form>