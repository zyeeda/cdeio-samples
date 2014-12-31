Colorvest = require 'colorvest'
React = require 'react'
_ = require 'nodash'

Select = React.createClass
	mixins: [Colorvest.utils.widgetHelper]
	
	render: ->
		<div className="">
			<select
				{...@props}
				ref="select"
				key="select"
				className={@joinClasses 'form-control'}
				>
				

			</select>
		</div>
		