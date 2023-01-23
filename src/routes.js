import { Router } from"express"
import { v4 } from 'uuid'

import User from './apps/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {

    const user = await User.create({
        id: v4(),
        name: 'Vagner',
        email: 'vagner.devs@hotmail.com',
        password_hash: '1928hjqbahbavatavtacah',
        
    })
    return response.json(user)
})

export default  routes

