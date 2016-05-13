'use strict'
module.exports = plugin

const createExampleRenderer = require('./create-example-renderer')

function plugin (markdown) {
  return {
    example: createExampleRenderer(markdown),
  }
}