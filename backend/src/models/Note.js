import mongoose, { Schema } from "mongoose";

// 1- Schema
// 2- model

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
