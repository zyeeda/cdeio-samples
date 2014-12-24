Colorvest = require 'colorvest'
Text = require 'widgets/text'
Button = require 'widgets/button'
Link = require 'widgets/link'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'first', height: 500, content: <Text id='ttt' placeholder="text - sample" color="info" heightSizing="small" widthSizing="3" readonly=true />}
    	{region: 'second', height: 500, content: <Button name="btn" id="btn" hidden = "false" />}
    	]

app.start()
