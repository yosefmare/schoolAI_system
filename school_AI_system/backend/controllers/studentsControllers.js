import expressAsyncHandler from "express-async-handler";
import signToken from "../utils/signToken.js";
import Student from "../schemas/studentScheema.js"


const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email})

  if (student) {
    if (password === student.password) {
      res.status(200).json({
        message: "Logged in successfully",
        student: {
          _id: student._id,
          name: student.name,
          role: student.role,
          studentClass: student.studentClass,
          grade: student.grade,
          token: signToken(student._id, student.role)
        }
      })
    }
  } else{
    res.status(404).json({ message: "Invalid password" });
  }
})

export {
  login
}