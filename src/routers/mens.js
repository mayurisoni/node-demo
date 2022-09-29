const express = require('express');
const router = express.Router();
const MensController = require('../controllers/mensController')

router.post('/',MensController.post_man_details);
router.get('/',MensController.get_man_list);
router.get('/:mensid',MensController.get_specific_man_detail);
router.patch('/:mensid',MensController.update_specific_man_detail)
router.delete('/:mensid',MensController.delete_specific_man_detail);
module.exports =router