const express = require('express');
const VerifyJWT = require('../middlewares/VerifyJWT')
const { AuthorizeUser } = require('../controllers/authorization/authorizeUser');
const router = express.Router();

router.get('/', VerifyJWT,AuthorizeUser)

module.exports = router