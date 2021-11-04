const express = require('express');
const router = express.Router();

const formContr = require('../Controllers/formController');

router.post('/', formContr.createForm);
router.get('/:id', formContr.getOneForm);
router.get('/', formContr.getAllForm);
router.put('/:id' , formContr.updateForm);
router.delete('/:id', formContr.deleteForm);

module.exports = router;