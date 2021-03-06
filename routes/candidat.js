var express = require('express');
var router = express.Router();
const candidatController = require('../controllers/candidatController')

router.get('/',candidatController.getAll);
router.get('/:id', candidatController.getById )
router.put('/:id/update', candidatController.update)
router.delete('/:id/delete', candidatController.delete)

module.exports = router