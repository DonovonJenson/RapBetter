/*

Models Index

For every Model that you create, export the import here to create a centralized source of truth.

This allows us to just import the entire '../db/models' directory, and we receive the exports object with all properties we set here.


FORMAT:

                                          VVVV  MUST BE camelCase format

module.exports.ModelName = require('./pathToModel')   <--- You can omit the .js file extension since we're in Node

                  ^^^  MUST BE PascalCase format

*/

module.exports.RhymeSet = require('./rhymeSet');
module.exports.Word = require('./word');