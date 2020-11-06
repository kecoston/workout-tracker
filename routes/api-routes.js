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
  Workout.updateOne(
      {_id: req.params.id},
      {type: req.body.type }
      )
  .then((dbWorkout) => {
      res.json(dbWorkout);
  })
  .catch((err) => {
      res.json(err);
  });
});


Router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
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