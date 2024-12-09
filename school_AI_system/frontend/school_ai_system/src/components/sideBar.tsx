"use client"

import React, { useState } from "react";
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BasicModal from "./ui/modals/AddStudent";
import { useAppDispatch } from "@/app/redux/hooks/reduxHooks";
import { toggleStudentCard } from "@/app/redux/feacures/students/stutentSlice";
const drawerWidth = 240;

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
  const dispatch = useAppDispatch()

  const toggleTeacherMenu = () => {
    setIsTeacherMenuOpen(!isTeacherMenuOpen);
  };

  return (
    <Drawer
      variant="persistent"
      open={isOpen}
      sx={{
        width: drawerWidth,
        position: "fixed",
        zIndex: 1200,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          position: "fixed",
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleTeacherMenu}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Teacher" />
            {isTeacherMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isTeacherMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <BasicModal />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText onClick={(e) => {
dispatch(toggleStudentCard())
              }} primary="Student" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
