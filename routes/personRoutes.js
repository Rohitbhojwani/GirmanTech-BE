const express = require('express');
const { searchPeople } = require('../controllers/personController');

const router = express.Router();

router.get('/search', searchPeople);

module.exports = router;
