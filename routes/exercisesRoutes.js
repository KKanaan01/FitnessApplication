const express = require('express');
const router = express.Router();
const exercisesContoller = require('../controllers/exercisesController');

router.route('/')
    .get(exercisesContoller.fetchAllExercies);

router.route('/exercisesPerMuscle/:muscle')
    .get(exercisesContoller.fetchExercisesPerMuscleGroup);

module.exports = router;