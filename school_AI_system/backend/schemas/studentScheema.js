import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  role: { type: String, required: true},
  studentClass: { type: String, required: true },
  grade: { type: Number, required: true },
})

export default model("student", StudentSchema)