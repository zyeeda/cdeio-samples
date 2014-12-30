React = require 'react'
Colorvest = require 'colorvest'

Password_ = React.createClass 
    mixins: [Colorvest.utils.widgetHelper]

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = 'has-' + @props.color if not _.isUndefined @props.color
        heightSize = @getHeightSize @props.heightSize if @props.heightSize?
        columnSize = @props.columnSize if @props.columnSize?
        
        columnSize = 'col-lg-' + columnSize if columnSize?

        <div className={@joinClasses 'form-group', color, heightSize, columnSize}>
            <input 
                {...@props}
                type="password"
                ref="input"
                key="input"
                className={@joinClasses 'form-control'}
                required = {'required' if @props.required is true}
                />
        </div>
module.exports = Password_