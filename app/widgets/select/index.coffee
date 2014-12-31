Colorvest = require 'colorvest'
React = require 'react'

Select = React.createClass
	mixins: [Colorvest.utils.widgetHelper]
	
	render: ->
		options = @props.options
		<div className="">
			<select
				{...@props}
				ref="select"
				key="select"
				className='form-control'
				>
				options.map (op) ->
					<option value={op.value}>{op.value}</option>
			</select>
		</div>

module.exports = Select
		