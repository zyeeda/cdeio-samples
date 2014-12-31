###
    表单文本框
    author: child
    date: 2014-12-22
###

React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

getColor = (color='') ->
    c = color
    c = 'has-' + c if c isnt ''
    c

module.exports = React.createClass
    mixins: [Colorvest.utils.widgetUtil]

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = getColor @props.color
        className = @getClassName @props.className
        heightSize = @getHeightSize 'input', @props.heightSize 
        columnSize = @getColumnSize @props.columnSize
        
        exclusions = [
            'className'
            'color'
            'heightSize'
            'columnSize'
        ]
        others = _.omit @props, exclusions

        <div className={"#{className} #{color} #{heightSize} #{columnSize}"} >
            <input type="text"
                {...others}
                ref="input"
                className = {"form-control"}
                />
        </div>
