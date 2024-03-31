const express = require('express');
// const jwt = require('../../../lib/jwt');
// const response = require('../../../utils/response');
// const AuthUserHasRole = require('../../../helpers/AuthUserHasRole');

const controller = require('../../../controller/services/section-opening');
// const UpdateProfileController = require('../../../controller/services/users/updateProfile');

const router = express.Router();

// READ - GET
router.get('/', controller.useGetSectionOpening);
// router.put('/update-profile', UpdateProfileController);

module.exports = router;