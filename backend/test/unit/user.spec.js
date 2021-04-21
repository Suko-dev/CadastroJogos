'use strict'
const Factory = use('Factory')

const { test, trait } = use('Test/Suite')('Usuario')

trait('Test/ApiClient')

test('cadastrar usuario', async ({ client }) => {

    const response = await client.post('/users/cadastrar').send({

        "username": "Vinicius",
        "email": "vinicius@email.com",
        "password": "mudar123"

    }).end()
    response.assertStatus(201)
    response.assertJSONSubset({
        "username": "Vinicius",
        "email": "vinicius@email.com",
    })
})


test('logar usuario', async ({ client, assert }) => {

    await client.post('/users/cadastrar').send({

        "username": "Suko",
        "email": "suko@email.com",
        "password": "mudar123"

    }).end()
    const response = await client.post('/users/login').send({

        "email": "suko@email.com",
        "password": "mudar123"

    }).end()
    response.assertStatus(200)
    assert.isNotNull(response.token)
})
