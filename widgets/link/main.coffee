common = require 'widgets/common/common'

Link = React.createClass
	mixins: [common]
	getDefaultProps: ->
		size: 'default'

	render: ->
		Component = (@props.displayStyle if @props.displayStyle is 'button') || 'a'
		color = 'btn btn-default' if Component is 'button'
		color = @getColor @props.color if not _.isUndefined @props.color
		size = @getSize @props.size if not _.isUndefined @props.size
		hidden = 'hidden' if @props.hidden is 'true'

		<Component
			{...@props}
			className = {@joinClasses color, size, hidden}
			onClick = {@props.onClick}
			>{@props.text}
		</Component>

module.exports = Link