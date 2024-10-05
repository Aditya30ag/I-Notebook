const mongoose = require("mongoose");
const { Schema } = mongoose;

const Notesschema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    default: "general",
  },
});
const notes = mongoose.model("Notes", Notesschema);
module.exports = notes;
