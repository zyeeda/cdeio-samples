Colorvest = require 'colorvest'
React = require 'react'
$ = require 'jquery'
Text = require '../../widgets/text'
Label = require '../../widgets/label'
Button = require '../../widgets/button'
Link = require '../../widgets/link'
Textarea = require '../../widgets/textarea'
Form = require '../../widgets/form'
Select = require '../../widgets/select'

app = window.app = new Colorvest.StackApp
    layout: 'stack'
    regions: [
        {
            region: 'select'
            height: 50
            content: <Select
                columnSize='4'
                defaultValue='b'
                    >
                    <option value="a">aaa</option>
                    <option value="b">bbb</option>
                    <option value="c">ccc</option>
                </Select>
        }
        {
            region: 'text'
            height: 50
            content: <Text
                name='zs'
                placeholder='text - sample' 
                heightSize='small'
                columnSize='4'
                readOnly=false
                required=false
                hidden
                title='title'
                />
        }
        {
            region: 'textarea'
            height: 50
            content: <Textarea
                placeholder='textarea'
                heightSize='large'
                columnSize='5'
                />
        }
        {
            region: 'label'
            height: 50
            content: <Label
                text= 'text in label'
                color= 'info' 
                heightSize= 'small' 
                columnSize= '3'
                hidden
                />
        }
        {
            region: 'button'
            height: 50
            content: ''
            content: <Button
                label='button'
                />
        }
        {
            region: 'link'
            height: 100
            content: <Link 
                displayStyle='button'
                text='link'
                />
        }
        {
            region: 'form'
            height: 50
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
