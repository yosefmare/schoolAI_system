"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { addStudent } from "../../../redux/feacures/teachers/teachersAsyncTunks";
import { useAppDispatch } from "../../../redux/hooks/reduxHooks";

interface FormData {
  name: string;
  password: string;
  studentClass: string;
}

const AddStudent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
    studentClass: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, password, studentClass } = formData;
    dispatch(addStudent({ name, password, studentClass }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2,
        backgroundColor: "transparent",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "400px" },
          padding: { xs: "1.5rem", sm: "2rem" },
          boxShadow: 4,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Add Student
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Password"
            name="password"
            fullWidth
            margin="normal"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Class"
            name="studentClass"
            fullWidth
            margin="normal"
            value={formData.studentClass}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              py: 1,
              fontSize: "1rem",
            }}
          >
            Add Student
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddStudent;
