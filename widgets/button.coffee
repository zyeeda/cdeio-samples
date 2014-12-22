colorData = [
	{name: 'default', value: 'btn-default'}
	{name: 'primary', value: 'btn-primary'}
	{name: 'success', value: 'btn-success'}
	{name: 'info', value: 'btn-info'}
	{name: 'warning', value: 'btn-warning'}
	{name: 'danger', value: 'btn-danger'}
]

sizeData = [
	{name: 'large', value: 'btn-lg'}
	{name: 'small', value: 'btn-sm'}
	{name: 'xsmall', value: 'btn-xs'}
]

setColor = (color) ->
	for data in colorData
		color = data.value if color is data.name 
	color='btn-default' unless color?
	color

setSize = (size) ->
	for data in sizeData
		size = data.value if size is data.name
	size

joinClasses = (color, size, hidden) ->
    names = []
    names.push 'hidden' if hidden is 'true'
    names.push 'btn'
    names.push color
    names.push size
    names.join ' '

Button = React.createClass
	getDefaultProps: ->
		color: 'default'

	render: ->
		<button
			{...@props}
			id = {@props.id}
			className = {joinClasses (setColor @props.color), (setSize @props.size), @props.hidden}
			onClick = {@props.onClick}
			>{@props.label}
		</button>


module.exports = Button