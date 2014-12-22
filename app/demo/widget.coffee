Colorvest = require 'colorvest'
Text = require 'widgets/text'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'first', height: 500, content: <Text placeholder="text - sample" color="info" heightSizing="small" widthSizing="3" />}
    ]

app.start()
