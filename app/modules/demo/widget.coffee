Colorvest = require 'colorvest'
React = require 'react'
$ = require 'jquery'
Text = require '../../widgets/text'
Label = require '../../widgets/label'
Button = require '../../widgets/button'
Link = require '../../widgets/link'
Textarea = require '../../widgets/textarea'

Form = React.createClass
    render: ->
        <form ref='form' className='form-horizontal' >
            {@props.children}
        </form>

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {
            region: 'text'
            height: 50
            content: <Text
                name='zs'
                placeholder='text - sample' 
                color='info'
                heightSize='small'
                columnSize='4'
                readOnly=false
                required=false
                hidden
                />
        }
        {
            region: 'password'
            height: 50
            content: ''}
        {
            region: 'label'
            height: 50
            content: <Label
                text= 'text in label1'
                color= 'info' 
                heightSize= 'small' 
                columnSize= '3'
                />
        }
        {
            region: 'button'
            height: 100
            content: ''
        }
        {
            region: 'link'
            height: 100
            content: ''
        }
        {
            region: 'form'
            height: 100
            content: 
                <Form>
                    <Text
                        name='text'
                        placeholder='text - sample - in - form' 
                        color='info'
                        heightSize='small'
                        columnSize='4'
                        readOnly=false
                        required=false
                        hidden
                        />

                </Form>
        }
        ]

app.start()



# Password
# p = new Text 
#     name: 'zs'
#     placeholder: 'password - sample'
#     color: 'info' 
#     heightSize: 'small' 
#     columnSize: '3'
#     type: 'password'
#     onChange: ->
#         # console.log 'password value is : ', p.getValue()
#     el: $('#password').get(0)

# p.render()


# lk = new Link
# 	text: 'link'
# 	displayStyle: 'link'
# 	href: 'http://www.baidu.com' # 此设置在 displayStyle=link时 无效
# 	color: 'info'
# 	size: 'large'
# 	# disabled: true
# 	onClick: ->
# 		console.log 'link'
# 	el: $('#link').get(0)

# lk.render()
