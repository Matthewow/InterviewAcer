import { Mail, Notifications, Pets, Home } from "@mui/icons-material";
import { Link } from 'react-router-dom';
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
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LogoutIcon from '@mui/icons-material/Logout';

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
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack direction = "row" spacing={1}>
        <Link to="/">
        <IconButton size="small"  aria-label="home">
          <Home />
        </IconButton>
        </Link>
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
        <Link to='/profile' style={{ textDecoration: 'none', color:"#222"}} onClick={(e) => setOpen(false)}>
          <MenuItem >
            <PersonIcon color = "grey" sx={{mr:1}}/>
            Profile
          </MenuItem>
        </Link>

        <Link to='/mypost' style={{ textDecoration: 'none', color:"#222"}} onClick={(e) => setOpen(false)}>
          <MenuItem >
            <ArticleIcon color = "grey" sx={{mr:1}}/>
            My Post
          </MenuItem>
        </Link>

        <Link to='/profile' style={{ textDecoration: 'none', color:"#222"}} onClick={(e) => setOpen(false)}>
          <MenuItem >
            <StarBorderIcon color = "grey" sx={{mr:1}}/>
            My Collecton
          </MenuItem>
        </Link>

        <Link to='/profile' style={{ textDecoration: 'none', color:"#222"}}>
          <MenuItem >
            <LogoutIcon color = "grey" sx={{mr:1}}/>
            Logout
          </MenuItem>
        </Link>

      </Menu>
    </AppBar>
  );
};

export default Navbar;
