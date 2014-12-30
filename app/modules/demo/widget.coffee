Colorvest = require 'colorvest'
$ = require 'jquery'
Text = require '../../widgets/text'
Label = require '../../widgets/label'
# Button = require '../../widgets/button'
Link = require '../../widgets/link'
# Textarea = require '../../widgets/textarea'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'first', height: 100, content: ""}
    	{region: 'second', height: 100, content: ""}
    	{region: 'third', height: 100, content: ""}
    	{region: 'fourth', height: 100, content: ""}
    	]

app.start()

t = new Text 
	name: 'zs'
	id: 'name'
	placeholder: "text - sample"
	color: "info" 
	heightSizing: "small" 
	columnSizing: "3"
	onChange: ->
		console.log 'text value is : ', t.getValue()
	el: $('#first').get(0)

t.render()

l = new Label 
	text: 'text in label'
	id: 'label'
	color: "info" 
	heightSizing: "small" 
	columnSizing: "3"
	onClick: ->
		console.log 'lable is clicked ...'
	el: $('#second').get(0)

l.render()

b = new Link
	text: '按钮'
	displayStyle: 'button'
	href: 'http://www.baidu.com'
	disabled: true
	color: 'info'
	size: 'large'
	disabled: true
	onClick: ->
		console.log 'link'
	el: $('#third').get(0)

b.render()
