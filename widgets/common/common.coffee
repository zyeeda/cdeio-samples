data = require './data'
common = 
	getColor: (c) ->
		color = data.colorMapping[c]
		color = '' if _.isUndefined c
		color

	getSize: (s) ->
		size = data.sizeMapping[s]
		size = '' if _.isUndefined s
		size

	joinClasses: (className = '', others...) ->
	    names = []
	    names.push className if className isnt ''
	    names.push name for name in others
	    names.join ' '

module.exports = common