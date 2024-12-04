import { Schema, model } from "mongoose";

const TeacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isTeacher: { type: Boolean, required: true},
});

export default model("teacher", TeacherSchema)
