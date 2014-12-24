Colorvest = require 'colorvest'
Text = require 'widgets/text'
Button = require 'widgets/button'
Link = require 'widgets/link'
Password = require 'widgets/password'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'first', height: 500, content: <Text id='ttt' placeholder="text - sample" color="" heightSizing="small" widthSizing="3" readonly=true />}
    	{region: 'second', height: 500, content: <Button name="btn" id="btn" hidden = "false" />}
    	{region: 'third', height: 500, content: <Password id='password' color='error' heightSizing='large' widthSizing='4' placeholder="Password" />}
    	]

app.start()
