const { Schema, model } = require("mongoose");

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: "You must have a thought!",
    minlength: 20,
    maxlength: 300,
  },
  username: {
    type: String,
    required: true,
  },
});
