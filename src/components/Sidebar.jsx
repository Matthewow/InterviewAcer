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
  import { Player, Controls } from '@lottiefiles/react-lottie-player';
  
  const Sidebar = ({mode,setMode,setPage}) => {
    return (
      <Box flex={1} p={2} sx={{display: { xs: "none", sm: "block"}}}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home"
              onClick = {
                e => {
                  setPage("homepage")
                }
              }>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#interviews"
              onClick = {
                e => {
                  setPage("interview")
                }
              }>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Interviews" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#knowledge"
              onClick = {
                e => {
                  setPage("knowledge")
                }
              }>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Knowledge" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#programming" 
                onClick = {
                  e => {
                    setPage("programming")
                  }
                }>
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
                <Switch onChange={
                  e=>{setMode(mode === "light" ? "dark" : "light");
                  }}/>
              </ListItemButton>
            </ListItem>
          </List>
          <Box sx={{mt: 10}}>
            <Player
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_wczpanc1.json"
              style={{ height: '200px', width: '200px' }}
              >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;
  