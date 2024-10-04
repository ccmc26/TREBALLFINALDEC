const express = require('express');
const userAPIController = require('../controllers/userAPI.js');

let router = express.Router();

router.get('/',userAPIController.getUsers);
router.get('/:username', userAPIController.getUserBySurname);

module.exports = router;