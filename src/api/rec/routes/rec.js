'use strict';

/**
 * rec router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rec.rec');
