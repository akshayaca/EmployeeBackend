
const EmployeeController = require('../controllers/employeeController');
const empCont = new EmployeeController();
const express = require('express');
const router = express.Router();

router.get('/employees',empCont.getEmployee);
router.get('/employees/:id',empCont.getEmployeeById);
router.post('/employees',empCont.addEmployee);
router.put('/employees/:id',empCont.updateEmployee);
router.delete('/employees/:id',empCont.deleteEmployee);

module.exports = router;