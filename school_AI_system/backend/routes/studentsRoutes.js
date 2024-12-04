import { Router } from "express";
import { protect, isTeacher } from "../middleware/authMiddleware.js"
import { registerStudent } from "../controllers/teachersControllers.js";
import { login } from "../controllers/studentsControllers.js";
const router = Router();

router.route("/register").post(protect, isTeacher).post(registerStudent)
router.route("/login").post(login)

export default router;