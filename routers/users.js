import Router from 'koa-router'

import {models} from 'cdeio/lib/server/models'

const router = new Router()

router.get('/', function* getAll() {
  const users = yield models.Account.findAll({
    attributes: ['id', 'name', 'mobile', 'password', 'account_name']
  })

  this.body =  users
})

router.get('/test', function* getAllUsers() {
  this.body = [{
    id: '1',
    username: 'tom',
    name: 'Tom',
    age: '19',
    gender: 'M'
  }, {
    id: '2',
    username: 'mary',
    name: 'Many',
    age: '21',
    gender: 'F'
  }]
})

export default router
