React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

Link_ = React.createClass
	mixins: [Colorvest.utils.widgetHelper]
	getDefaultProps: ->
		size: 'default'

	render: ->
		Component = (@props.displayStyle if @props.displayStyle is 'button') || 'a'
		color = ('btn btn-' + @props.color if not _.isUndefined @props.color) || 'btn btn-default' if Component is 'button'
		size = @getSize @props.size if not _.isUndefined @props.size
		hidden = 'hidden' if @props.hidden is 'true'

		<Component
			{...@props}
			className = {@joinClasses color, size, hidden}
			>{@props.text}
		</Component>

module.exports = Link_