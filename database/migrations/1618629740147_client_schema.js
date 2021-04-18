'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name',100).notNullable()
      table.string('cpf',15).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
