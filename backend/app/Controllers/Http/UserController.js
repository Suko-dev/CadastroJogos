'use strict'

const User = use("App/Models/User")

class UserController {


    async store({ request, response }) {
        const data = request.only(['username', 'email', 'password'])
        const newUser = await User.create(data)
        return response.status(201).json(newUser)
    }

    async login({ request, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token;
    }

}

module.exports = UserController
