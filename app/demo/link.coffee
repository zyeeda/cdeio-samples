Colorvest = require 'colorvest'
Link = require 'widgets/link'
Textarea = require 'widgets/textarea'

app = window.app = new Colorvest.StackApp
	layout: 'stack'
	regions: [
		{region: 'first', height: 500, content: <Link text="Link" size="xsmall" displayStyle="button"/>}
		{region: 'sconed', height: 500, content: <Textarea placeholder="Textarea" widthSizing="5" cols="10" rows="10" heightSizing="small"/>}
	]

app.start()