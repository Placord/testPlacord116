const router = require('express').Router();
const testController = require('../controller/controller.js');

router.post('/api/test', testController.createTest);
router.get('/api/test', testController.getTests);
router.get('/api/test/:id', testController.getTest);
router.delete('/api/test/:id', testController.deleteTest);
router.put('/api/test', testController.updateTest);

module.exports = router;