const Router = require("express").Router()
const Workout = require("../models/workout")

Router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

Router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body)
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercise: req.body}},  {new: true} )
  .then((dbWorkout) => {
      res.json(dbWorkout);
  })
  .catch((err) => {
      res.json(err);
  });
});


Router.post("/api/workouts", (req, res) => {
  console.log(req.body)
  Workout.create({})
    
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

Router.get("/api/workouts/range", (req,res) => {
Workout.find({})
.then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})


module.exports = Router 