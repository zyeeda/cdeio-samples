
heightMapping =
    large: 'input-lg'
    default: ''
    small: 'input-sm'
    xsmall: 'input-sm'

getHeight = (h) ->
    height = heightMapping[h]
    height = '' if _.isUndefined h
    height

joinClasses = (className = '', others...) ->
    names = []
    names.push className if className isnt ''
    names.push name for name in others
    names.join ' '

Password = React.createClass

	render: ->
		color = 'has-' + @props.color if not _.isUndefined @props.color
		height = getHeight @props.heightSizing if not _.isUndefined @props.heightSizing
		width = 'col-lg-' + @props.widthSizing if not _.isUndefined @props.widthSizing

		<div className={joinClasses 'form-group', color, height, width}>
			<input 
				{...@props}
				type="password"
				ref="input"
                key="input"
                className={joinClasses 'form-control'}
                readOnly = {'readonly' if @props.readonly is true}
				/>
		</div>

module.exports = Password