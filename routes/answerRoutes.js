const express = require('express');
const router = express.Router();

const answerContr = require('../Controllers/answerController');

router.post('/', answerContr.createAnswer);
router.get('/', answerContr.getAllAnswer );
//router.get('/:id', answerContr.findOneAnswer );
//router.put('/:id', answerContr. );
router.delete('/:id', answerContr.deleteAnswer);

module.exports = router;