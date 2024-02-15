const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

//GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// GET a single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workouts'})
  })

// post
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }

    // res.json({mssg: 'POST all workouts'})
  })

//delete
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE A SINGLE workouts'})
  })

// update
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE A SINGLE  workouts'})
  })

module.exports = router