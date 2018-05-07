/*

Schemas Index

For every Schema that you create, export the import here to create a centralized source of truth.

This allows us to just import the entire '../db/schemas' directory, and we receive the exports object with all properties we set here.


FORMAT:

                                          VVVV  MUST BE camelCase format

module.exports.schemaName = require('./pathToModel')   <--- You can omit the .js file extension since we're in Node

                  ^^^  MUST BE camelCase format

*/

module.exports.rhymeSetSchema = require('./rhymeSetSchema');
module.exports.wordSchema = require('./wordSchema')