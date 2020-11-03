const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema ({
    name: {
        type: String
    },
    duartion: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
})

const Resistance = mongoose.model("Resistance", Resistance);
module.export = Resistance;