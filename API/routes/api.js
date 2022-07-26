const express = require('express');
const router = express();
const api = require('./api/controllers/indexcontroller.js');

router.get('/', api.index);