const knex = require("knex");
const knexConfig = require("../knexfile.js");

// Ask about these two lines of code
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexConfig[environment]);
