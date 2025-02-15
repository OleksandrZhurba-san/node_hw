import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  articles: [{
    type: mongoose.Schema.ObjectId,
    ref: "Articles"
  }]
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
