'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogosSchema extends Schema {
  up() {
    this.create('jogos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('nome', 80).notNullable().unique()
      table.string('genero', 20).notNullable()
      table.string('console', 20).notNullable()
      table.boolean('concluido').defaultTo(false).notNullable()
      table.date('dataTermino')
      table.timestamps()
    })
  }

  down() {
    this.drop('jogos')
  }
}

module.exports = JogosSchema
