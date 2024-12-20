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
    <Paper
      elevation={6}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: "bold", mb: 2 }}>
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
        />
        <TextField
          label="Class"
          name="studentClass"
          fullWidth
          margin="normal"
          value={formData.studentClass}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, py: 1 }}
        >
          Add Student
        </Button>
      </form>
    </Paper>
  );
};

export default AddStudent;
