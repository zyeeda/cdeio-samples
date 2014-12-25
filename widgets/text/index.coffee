# Widget = require 'colorvest/core/widget'

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

Text = React.createClass
    onBlur: (e) ->
    renderHelp: ->
        (
            <span className="help-block" key="help">
                {@props.help}
            </span>
        ) if @props.help?

    render: ->

        color = 'has-'+@props.color if not _.isUndefined @props.color 
        height = getHeight @props.heightSizing if not _.isUndefined @props.heightSizing
        width = @props.widthSizing if not _.isUndefined @props.widthSizing

        width = 'col-lg-' + width if width?

        <div className={joinClasses 'form-group', color, height, width}>
            <input type="text"
                ref="input"
                key="input"
                readOnly = {'readonly' if @props.readonly is true}
                className = {joinClasses 'form-control'}
                placeholder = {@props.placeholder}
                />
            {@renderHelp()}
        </div>

module.exports = Text
