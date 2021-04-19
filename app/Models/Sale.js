"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Sale extends Model {
  products() {
    return this.belongsToMany("App/Models/Product");
  }
  client() {
    return this.belongsTo("App/Models/Client");
  }
}

module.exports = Sale;
