'use strict'

const User = use("App/Models/User")

class UserController {


    async store({ request, response, auth }) {
        const { username, email, password } = request.all()
        const newUser = await User.create({ username, email, password })
        const token = await auth.attempt(email, password)
        
        return response.status(201).json({...newUser.$attributes, ...token})

    }

    async login({ request, auth, response }) {
        try {
            const { email, password } = request.all()
            const token = await auth.attempt(email, password)
            return token;

        } catch (error) {
            return response.status(401).json({ "erro": error });
        }
    }

}

module.exports = UserController
