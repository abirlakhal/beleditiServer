const express = require('express');
const router = express.Router();

const questContr = require('../Controllers/questionController');

router.post('/', questContr.createQuest);
router.get('/:id', questContr.findOneQuest);
router.get('/', questContr.getAllQuest);
router.put('/:id' , questContr.updateQuest);
router.delete('/:id', questContr.deleteQuest);

module.exports = router;