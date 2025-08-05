import userData from '../fixtures/users/user-data.json'
import Subscribe from '../pages/subscribe'

const subscribe = new Subscribe()
//Load Chance
const Chance = require('chance')
//Instanciate Chance
var chance = new Chance()

describe('realworld-app Tests', ()=>{
  it('New user subscribe - Success', ()=>{
    subscribe.accessSubscribe()
  })
})