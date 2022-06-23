import { Mail, Notifications, Pets, Home } from "@mui/icons-material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Stack,
  Menu,
  IconButton,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack direction = "row" spacing={1}>
        <IconButton onClick={handleSubmit} size="small"  aria-label="home">
          <Home />
        </IconButton>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          CodeAcer
        </Typography>
        </Stack>
        
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="WANG Zhao" 
            src="/static/images/avatar/2.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="WANG Zhao" 
            src="/static/images/avatar/2.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Posts</MenuItem>
        <MenuItem>My Collectons</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
