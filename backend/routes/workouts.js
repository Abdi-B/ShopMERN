const express = require('express')
const Workout = require('../models/workoutModel')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
}  = require('../controllers/workoutControllers')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

// GET a single workouts
router.get('/:id', getWorkout)

// post
router.post('/', createWorkout)

//delete
router.delete('/:id', deleteWorkout)

// update
router.patch('/:id', updateWorkout)

module.exports = router