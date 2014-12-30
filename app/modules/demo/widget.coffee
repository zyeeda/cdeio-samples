Colorvest = require 'colorvest'
React = require 'react'
$ = require 'jquery'
Text = require '../../widgets/text'
Label = require '../../widgets/label'
Button = require '../../widgets/button'
Link = require '../../widgets/link'
Password = require '../../widgets/password'
Textarea = require '../../widgets/textarea'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'text', height: 100, content: ""}
        {region: 'password', height: 100, content: ""}
        {region: 'label', height: 100, content: ""}
        {region: 'button', height: 100, content: ""}
        {region: 'link', height: 100, content: ""}
        {region: 'form', height: 100, content: ""}
        ]
app.react = React
app.start()

# Text
t = new Text 
    name: 'zs'
    # id: 'name'
    placeholder: "text - sample"
    color: "info" 
    heightSizing: "small" 
    columnSizing: "3"
    onChange: ->
        console.log 'text value is : ', t.getValue()
    el: $('#text').get(0)

t.render()

# Text


Form = React.createClass
    render: ->
        <form ref="form" key="form" className='form-horizontal' >
        </form>
formInstance = React.render <Form />, $('#form').get(0)

tof = new Text
    name: 'zs'
    placeholder: "text - sample - in - form"
    color: "info"
    heightSizing: "small"
    columnSizing: "4"
    onChange: ->
        console.log 'text value is : ', tof.getValue()
    el: formInstance.getDOMNode()

tof.render()

# Password
p = new Password 
    name: 'zs'
    placeholder: "password - sample"
    color: "info" 
    heightSizing: "small" 
    columnSizing: "3"
    onChange: ->
        # console.log 'password value is : ', p.getValue()
    el: $('#password').get(0)

p.render()

# Label
l = new Label 
    text: 'text in label'
    id: 'label'
    color: "info" 
    heightSizing: "small" 
    columnSizing: "3"
    onClick: ->
        console.log 'lable is clicked ...'
        console.log 'text of label is : ', l
    el: $('#label').get(0)

l.render()

lk = new Link
	text: '按钮'
	displayStyle: 'button'
	href: 'http://www.baidu.com'
	color: 'info'
	size: 'large'
	disabled: true
	onClick: ->
		console.log 'link'
	el: $('#link').get(0)

lk.render()
