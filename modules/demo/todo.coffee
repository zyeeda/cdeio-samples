Colorvest = require 'colorvest'
Todo = require 'widgets/todo'
Text = require 'widgets/text'
Button = require 'widgets/button'

hello = ->
	console.log 'hello colorvest'

app = window.app = new Colorvest.StackApp
	regions: [
        region: 'first', height: 200, content: <Todo />,
		region: 'second', height: 100, content: <Text id='name' name='name' text='姓名' color='has-success' placeholder='请填写姓名' defaultValue='123' help='i need some help' />,
        region: 'thrid', height: 200, content: <Button id='btn' label='按钮' size='large' hidden='false'/>    
    ]

	routes:
        "help":                 "help"
        "search/:query":        "search"
        "search/:query/p:page": "search"
        "hello":                hello

    help: ->
        console.log 'help'

    search: (query, page) ->
        console.log query, page

app.route 'test', ->
	console.log 'hello test'

app.start()
