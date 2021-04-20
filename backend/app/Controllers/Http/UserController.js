'use strict'

const User = use("App/Models/User")

class UserController {


    async store({ request, response }) {
        const data = request.only(['username', 'email', 'password'])
        const newUser = User.create(data)
        return newUser
    }

    async login({ request, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token;
    }

}

module.exports = UserController
