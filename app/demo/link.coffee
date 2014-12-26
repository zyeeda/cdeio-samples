Link = require 'widgets/link'

app = window.app = new Colorvest.StackApp
	layout: 'stack'
	regions: [
		region: 'first', height: 500, content: <Link text="Link" size="xsmall" displayStyle="button"/>
	]

app.start()