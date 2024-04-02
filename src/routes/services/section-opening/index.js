const express = require('express');

const controller = require('../../../controller/services/section-opening');

const router = express.Router();

// READ - GET
router.get('/', controller.useGetSectionOpening);

module.exports = router;