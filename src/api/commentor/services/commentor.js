'use strict';

/**
 * commentor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::commentor.commentor');
