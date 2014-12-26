###
    表单文本框
    author: child
    date: 2014-12-22
###
React = require 'react'
Colorvest = require 'colorvest'
_ = require 'lodash'

# 高度列表
heightMapping =
    large: 'input-lg'
    default: ''
    small: 'input-sm'
    xsmall: 'input-sm'

# 获取高度
getHeight = (h) ->
    height = heightMapping[h]
    height = '' if _.isUndefined h
    height

Text_ = React.createClass   
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

        <div className={@joinClasses 'form-group', color, height, width}>
            <input type="text"
                ref="input"
                key="input"
                {...@props}
                readOnly = {'readonly' if @props.readonly is true}
                required = {'required' if @props.required is true}
                className = {@joinClasses 'form-control'}
                placeholder = {@props.placeholder}
                />
            {@renderHelp()}
        </div>
module.exports = Text_
# module.exports = React.createFactory(Text);
# module.exports = React.createFactory(React.createClass(Text));
