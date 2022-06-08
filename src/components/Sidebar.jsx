import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  
  const Sidebar = ({mode,setMode}) => {
    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#interviews">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Interviews" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#knowledge">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Knowledge" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#programming">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Programming" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;
  