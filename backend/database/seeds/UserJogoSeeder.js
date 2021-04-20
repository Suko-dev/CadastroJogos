'use strict'

/*
|--------------------------------------------------------------------------
| UserJogoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserJogoSeeder {
  async run () {
    await Factory.model("App/Models/User").create()
    await Factory.model("App/Models/Jogo").createMany(5)
  }
}

module.exports = UserJogoSeeder
