Colorvest = require 'colorvest'
React = require 'react'
$ = require 'jquery'
Text = require '../../widgets/text'
Label = require '../../widgets/label'
Button = require '../../widgets/button'
Link = require '../../widgets/link'
Textarea = require '../../widgets/textarea'
Select = require '../../widgets/select'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'text', height: 100, content: <Link text="Link" displayStyle="button" size="large" href="http://www.baidu.com"/> }
        {region: 'password', height: 100, content: <Select />}
        {region: 'label', height: 100, content: ""}
        {region: 'button', height: 100, content: ""}
        {region: 'link', height: 100, content: ""}
        {region: 'form', height: 100, content: ""}
        ]
app.react = React
app.start()