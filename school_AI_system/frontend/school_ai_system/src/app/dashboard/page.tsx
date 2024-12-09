"use client";

import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../components/sideBar";

const drawerWidth = 240;

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex", position: "relative", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar isOpen={isDrawerOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Offset for the AppBar height
          display: "flex",
          justifyContent: "center", // Horizontally center content
          alignItems: "center",     // Vertically center content
          height: "calc(100vh - 64px)", // Full height minus AppBar height (64px)
          textAlign: "center",      // Center-align the text
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Welcome to the Dashboard
          </Typography>
          <Typography paragraph>
            This is the main content area. Use the sidebar to navigate.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
