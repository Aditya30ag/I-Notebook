const mongoose = require("mongoose");
const { Schema } = mongoose;

const Adischema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const adi=mongoose.model("Adi",Adischema);
adi.createIndexes();
module.exports=adi