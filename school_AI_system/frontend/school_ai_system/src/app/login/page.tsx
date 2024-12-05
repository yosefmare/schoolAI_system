'use client';
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/reduxHooks";
import { teacherLogin } from "../redux/feacures/teachers/teachersAsyncTunks";
import { studentLogin } from "../redux/feacures/students/studentsAsyncTunks";
import {useRouter} from "next/navigation";

type UserType = "student" | "authorized";

const Login: React.FC = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>("student");
  const [formData, setFormData] = useState({ email: "", password: "" }); // Manage form data
  const dispatch = useAppDispatch();
  const studentState = useAppSelector((state) => state.studentReducer.value)
  const teacherState = useAppSelector((state) => state.teacherReducer.value)

useEffect(() => {
  if (studentState?.token || teacherState?.token) {
    router.push("/dashboard");
  }
}, [
  studentState?.token,
  teacherState?.token,
])

  const handleUserTypeChange = (_: React.SyntheticEvent, newValue: UserType) => {
    setUserType(newValue);

    // Clear inputs when toggling tabs
    setFormData({ email: "", password: "" });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = formData;

    if (email && password) {
      dispatch(teacherLogin({ email, password }));
    } else if (password) {
      dispatch(studentLogin({ role: "student", password }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          position: "relative",
        }}
      >
        <Tabs
          value={userType}
          onChange={handleUserTypeChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          sx={{ marginBottom: "1.5rem" }}
        >
          <Tab label="Student" value="student" />
          <Tab label="Authorized People" value="authorized" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          {userType === "authorized" && (
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              type="email"
              required={userType === "authorized"} // Only required for authorized users
              value={formData.email}
              onChange={handleChange}
            />
          )}
          <TextField
            label="Password"
            name="password"
            fullWidth
            margin="normal"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
