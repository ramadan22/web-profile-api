const express = require('express');

const controller = require('../../../controller/services/section-educational');

const router = express.Router();

// READ - GET
router.get('/', controller.useGetSectionEducational);

module.exports = router;