React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Password_ = React.createClass 
    mixins: [Colorvest.utils.widgetHelper]

    getValue: ->
        @refs.input.getDOMNode().value

    render: ->
        color = 'has-' + @props.color if not _.isUndefined @props.color
        heightSizing = @getHeightSize @props.heightSizing if not _.isUndefined @props.heightSizing
        columnSizing = @props.columnSizing if not _.isUndefined @props.columnSizing
        
        columnSizing = 'col-lg-' + columnSizing if columnSizing?

        <div className={@joinClasses 'form-group', color, heightSizing, columnSizing}>
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