'use strict'
const User = use("App/Models/User")

const { test, trait } = use('Test/Suite')('Jogo')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')


test('cadastrar jogo', async ({ client }) => {
    await client.post('/users/cadastrar').send({

        "username": "Marcos",
        "email": "Marcos@email.com",
        "password": "mudar123"

    }).end()
    const user = await User.find(1)

    const response = await client.post('/jogos').send({
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    }).loginVia(user).end()
    response.assertStatus(201)
    response.assertJSONSubset({
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    })
})

test('procurar jogo', async ({ client }) => {


    await client.post('/users/cadastrar').send({

        "username": "Marcelo",
        "email": "Marcelo@email.com",
        "password": "mudar123"

    }).end()
    const user = await User.find(1)

    await client.post('/jogos').send({
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    }).loginVia(user).end()

    const response = await client.get('/jogos/1').send().loginVia(user).end()

    response.assertStatus(200)
    response.assertJSONSubset({
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    })
})

test('listar jogos', async ({ client }) => {


    await client.post('/users/cadastrar').send({

        "username": "Marcelo",
        "email": "Marcelo@email.com",
        "password": "mudar123"

    }).end()
    const user = await User.find(1)

    await client.post('/jogos').send({
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    }).loginVia(user).end()

    const response = await client.get('/jogos/').send().loginVia(user).end()

    response.assertStatus(200)
    response.assertJSONSubset([{
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    }])

    const filteredResponse = await client.get('/jogos/?genero=corrida&limit=1').send().loginVia(user).end()
    filteredResponse.assertStatus(200)
    filteredResponse.assertJSONSubset([{
        "nome": "Forza horizon",
        "genero": "corrida",
        "console": "xbox"
    }])
})