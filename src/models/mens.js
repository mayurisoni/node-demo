const mongoose = require("mongoose");
const MensSchema = mongoose.Schema({
  Ranking: {
    type: Number,
    unique: true,
    require:true
  },
  Name: {
    type: String,
    require: true,
    trim: true,
  },
  Dob: {
    type: Date,
    //require: true,
    trim: true,
  },
  Country: {
    type: String,
   require:true,
    trim: true,
  },
  Score: {
    type: Number,
   require:true,
    trim: true,
  },
  Event: {
    type: String,
    default: "100m",
  },
});
module.exports = mongoose.model("MensRanking", MensSchema);
