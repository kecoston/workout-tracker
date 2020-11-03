const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: {
        type: Schema.Types.ObjectId,
        ref: ["Cardio", "Resistance"]
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.export = Workout;