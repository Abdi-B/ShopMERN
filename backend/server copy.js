require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

// const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json())

app.use((req,res,next) => {
//   console.log(req.path, req.method)
  next()
})

//routes 1

// app.get('/', (req,res) => {
//   res.json({msg: 'Welcome to the app'})
// })

//routes 2
app.use('/api/workouts', workoutRoutes)

//connect to db
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         //listen for req
//         app.listen(process.env.PORT, () => {
//             console.log('connected to db & listening on the port', process.env.PORT)
//           })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// app.listen(process.env.PORT, () => {
//   console.log('listening on the port', process.env.PORT)
// })