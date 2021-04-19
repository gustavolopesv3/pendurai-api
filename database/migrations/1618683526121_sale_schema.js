"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SaleSchema extends Schema {
  up() {
    this.create("sales", (table) => {
      table.increments();
      table
        .integer("client_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("clients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.boolean("status");

      // table.json('products')

      table.timestamps();
    });
  }

  down() {
    this.drop("sales");
  }
}

module.exports = SaleSchema;
