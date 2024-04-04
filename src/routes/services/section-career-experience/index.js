const express = require('express');

const controller = require('../../../controller/services/section-career-experience');

const router = express.Router();

// READ - GET
router.get('/', controller.useGetSectionCareerExperience);

module.exports = router;