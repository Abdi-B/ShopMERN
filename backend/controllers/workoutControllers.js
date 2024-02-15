const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//GET all workouts
const getWorkouts = async (req, res) => {
//   const workouts = await Workout.find({ reps: 20})
  const workouts = await Workout.find({}).sort({createdAt: -1})
    
  res.status(200).json(workouts)
}


// GET a single workouts
const getWorkout = async (req, res) => {
    const { id } = req.params
    // console.log(req.params)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(404).json({error: 'workout ID NOT VALID'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
       return  res.status(404).json({error: 'No such workout to get it'})
    }
    
    
    res.status(200).json(workout)
    }
    

// create new workout
const createWorkout = async (req,res) => {
    const {title, load, reps} = req.body

    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    // console.log(req.params)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(404).json({error: 'workout ID NOT VALID to delete it'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
       return  res.status(404).json({error: 'No such workout ID to delete'})
    }

    res.status(200).json(workout)
}



//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    // console.log(req.params)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(404).json({error: 'workout ID NOT VALID to update it'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout) {
       return  res.status(404).json({error: 'No such workout ID to update'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}