
import React from "react";
import {
  Box,
  CssBaseline,
} from "@mui/material";
import Sidebar from "../../components/sideBar";
import { useAppSelector } from "../redux/hooks/reduxHooks";
import AppBar from "@/components/AppBar";
import BoardContent from "@/components/BoardContent";



const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", position: "relative", height: "100vh" }}>
      <CssBaseline />
      <AppBar/>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoardContent/>
      </Box>
    </Box>
  );
};

export default Dashboard;
