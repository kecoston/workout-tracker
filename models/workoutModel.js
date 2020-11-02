const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
day: {
    type: Date,
    default: Date.now
},
exercise:{
    type:String,
    required: "Name is required"
},
type:{
    type: String
},
name:{
    type: String
},
duration:{
    type: String

},
weight:{
    type: String
},
reps:{
    type: String
},
sets:{
    type: String
}

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.export = Workout