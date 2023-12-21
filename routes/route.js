const express = require('express');
const { sendmail, sendgmail } = require('../controller/appController.js');

const router = express.Router();

router.post('/sendmail', sendmail);
router.post('/sendgmail', sendgmail);

module.exports = router;
