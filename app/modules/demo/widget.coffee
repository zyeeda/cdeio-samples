Colorvest = require 'colorvest'
$ = require 'jquery'
Text = require '../../widgets/text'
# Button = require '../../widgets/button'
# Link = require '../../widgets/link'

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
	el: $('#first').get(0)

t.render()

