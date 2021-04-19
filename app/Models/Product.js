"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  sales() {
    return this.belongsToMany("App/Models/Sale");
  }
}

module.exports = Product;
