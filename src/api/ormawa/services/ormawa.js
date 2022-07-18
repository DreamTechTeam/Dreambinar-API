'use strict';

/**
 * ormawa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ormawa.ormawa');
