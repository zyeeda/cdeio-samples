common = require 'widgets/common/common'

Button = React.createClass
	mixins: [common]
	getDefaultProps: ->
		color: 'default'
		size: 'default'

	render: ->
		color = @getColor @props.color if not _.isUndefined @props.color
		size = @getSize @props.size if not _.isUndefined @props.size
		hidden = 'hidden' if @props.hidden is 'true'

		<button
			{...@props}
			className = {@joinClasses color, size, hidden}
			>{@props.label}
		</button>

module.exports = Button