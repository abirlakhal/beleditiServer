const express = require('express');
const router = express.Router();

const userContr = require('../Controllers/userController');

router.post('/', userContr.createUser);
router.get('/', userContr.getAllUser);
router.get('/:id', userContr.findOneUser);
router.put('/:id', userContr.updateUser);
router.delete('/:id', userContr.deleteUser);

module.exports = router;