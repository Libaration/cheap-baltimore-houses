'use strict';

/**
 * mailing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mailing.mailing');
