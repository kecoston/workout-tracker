const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema ({
    name: {
        type: String
    },
    duartion: {
        type: Number
    },
    distance: {
        type: Number
    }
})

const Cardio = mongoose.model("Cardio", CardioSchema);
module.export = Cardio;