"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSaleSchema extends Schema {
  up() {
    this.create("product_sale", (table) => {
      table.increments();
      table
        .integer("product_id")
        .unsigned()
        .references("products.id")
        .onDelete("CASCADE")
        .index("post_id");

      table
        .integer("sale_id")
        .unsigned()
        .references("sales.id")
        .onDelete("CASCADE")
        .index("sale_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("product_sale");
  }
}

module.exports = ProductSaleSchema;
