"use client"


import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from "@/app/redux/reducers/sidebarreducers";
import { useAppDispatch } from "@/app/redux/hooks/reduxHooks";
export default function NavBar() {
const dispatch = useAppDispatch()

  return (
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
          onClick={() => {
            dispatch(toggleSidebar())
          }}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
