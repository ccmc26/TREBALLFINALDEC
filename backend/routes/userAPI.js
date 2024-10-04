const express = require('express');
const userAPIController = require('../controllers/userAPI.js');

let router = express.Router();

router.get('/', userAPIController.getUsers);
router.get('/:username', userAPIController.getUserBySurname);
router.get('/email/:email', userAPIController.getUsersByEmail);

router.post('/', userAPIController.postUser);

module.exports = router;