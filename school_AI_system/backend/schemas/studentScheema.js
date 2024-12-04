import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: { type: String, default: "student"},
  studentClass: { type: String, required: true },
  grade: { type: Number, required: true },
})

export default model("student", StudentSchema)