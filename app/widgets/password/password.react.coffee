React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Password_ = React.createClass
    mixins: [Colorvest.utils.widgetHelper]

	render: ->
		color = 'has-' + @props.color if not _.isUndefined @props.color
		heightSizing = @getHeightSizing @props.heightSizing if not _.isUndefined @props.heightSizing
        columnSizing = @props.columnSizing if not _.isUndefined @props.columnSizing

        columnSizing = 'col-lg-' + columnSizing if columnSizing?

		<div className={@joinClasses 'form-group', color, heightSizing, columnSizing}>
			<input 
				{...@props}
				type="password"
				ref="input"
                key="input"
                className={joinClasses 'form-control'}
                readOnly = {'readonly' if @props.readonly is true}
                required = {'required' if @props.required is true}
				/>
		</div>

module.exports = Password_