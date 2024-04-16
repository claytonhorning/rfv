'use strict';

/**
 * rec service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rec.rec');
