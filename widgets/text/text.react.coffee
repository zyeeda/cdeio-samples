###
    表单文本框
    author: child
    date: 2014-12-22
###
Colorvest = require 'colorvest'

# 合并样式
# joinClasses = (className = '', others...) ->
#     names = []
#     names.push className if className isnt ''
#     names.push name for name in others
#     names.join ' '

# 高度列表
heightMapping =
    large: 'input-lg'
    default: ''
    small: 'input-sm'
    xsmall: 'input-sm'

Utils = 
    fn: ->
        console.log 'fn is execute ...'

# 获取高度
getHeight = (h) ->
    height = heightMapping[h]
    height = '' if _.isUndefined h
    height

ReactText = React.createClass   
    mixins: [Colorvest.utils]
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
                {...@props}
                readOnly = {'readonly' if @props.readonly is true}
                required = {'required' if @props.required is true}
                className = {joinClasses 'form-control'}
                placeholder = {@props.placeholder}
                />
            {@renderHelp()}
        </div>
module.exports = ReactText
# module.exports = React.createFactory(Text);
# module.exports = React.createFactory(React.createClass(Text));
