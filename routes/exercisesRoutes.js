const express = require('express');
const router = express.Router();
const exercisesContoller = require('../controllers/exercisesController');

router.route('/')
    .get(exercisesContoller.fetchAllExercies);

module.exports = router;