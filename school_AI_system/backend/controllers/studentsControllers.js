import expressAsyncHandler from "express-async-handler";
import signToken from "../utils/signToken";
import Student from "../schemas/studentScheema"


const login = expressAsyncHandler(async (req, res) => {
  const { password } = req.body;

  const student = await Student.findOne({ password })

  if (student) {
    res.status(200).json({
      message: "Logged in successfully",
      student: {
        _id: student._id,
        name: student.name,
        role: student.role,
        class: student.class,
        grade: student.grade,
        token: signToken(student._id, student.role)
      }
    })
  } else{
    res.status(404).json({ message: "Invalid password" });
  }
})