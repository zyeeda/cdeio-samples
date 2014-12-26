React = require 'react'
_ = require 'lodash'

joinClasses = (className = '', others...) ->
    names = []
    names.push className if className isnt ''
    names.push name for name in others
    names.join ' '

heightMapping =
    large: 'input-lg'
    default: ''
    small: 'input-sm'
    xsmall: 'input-sm'

getHeight = (h) ->
    height = heightMapping[h]
    height = '' if _.isUndefined h
    height


Textarea = React.createClass
	getDefaultProps: ->
		rows: '4'
		color: 'info'
	render: ->
		color = 'has-' + @props.color if not _.isUndefined @props.color
		width = 'col-lg-' + @props.widthSizing if not _.isUndefined @props.widthSizing
		height = getHeight @props.heightSizing if not _.isUndefined @props.heightSizing
		console.log @props.cols
		<div className = {joinClasses 'form-group', width, color, height}>
			<textarea
				{...@props}
				readOnly = {'readOnly' if @props.readonly is 'true'}
				disabled = {'disabled' if @props.disabled is 'true'}
				className = {joinClasses 'form-control'}
				>
			</textarea>
		</div>

module.exports = Textarea