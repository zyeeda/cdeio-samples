React = require 'react'
Todo = require '../../widgets/todo'
Colorvest = require 'colorvest'
# hello = ->
# 	console.log 'hello colorvest'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {region: 'first', height: 500, content: <Todo />}
    ]

# 	routes:
#         "help":                 "help"
#         "search/:query":        "search"
#         "search/:query/p:page": "search"
#         "hello":                hello

#     help: ->
#         console.log 'help'

#     search: (query, page) ->
#         console.log query, page

# app.route 'test', ->
# 	console.log 'hello test'

app.start()
