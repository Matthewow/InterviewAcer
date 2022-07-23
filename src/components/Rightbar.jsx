import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { postHeader } from "../utils/fetchData";

const random = () => Math.floor(Math.random() * 255);
  
  const Rightbar = () => {
    const [people, setPeople] = React.useState([]);
    
    useEffect(() => {
      axios.get(`http://120.77.98.16:8080/get_alumni/`, {
          headers: postHeader
          })
      .then(res => {
          if (res.status === 200 && res.data.code === "00") {
              console.log("-----",res.data.data)
              setPeople(res.data.data)
          }
      })
      
  }, []);

    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Find Your Alumni or Colleague
          </Typography>
          <AvatarGroup max={7}>
            {people?.map((item) => (
                <Avatar key = {item.email} sx={{ bgcolor: `rgb(${random()}, ${random()}, ${random()})` }} aria-label="recipe">
                {item.name.substring(0,3)}
              </Avatar>
            ))}
          </AvatarGroup>

          <Typography variant="h6" fontWeight={100} mt={2}>
            Get in Touch with Them!
          </Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {people?.map((item) => (
              <Box key = {item.email}>
                <ListItem alignItems="flex-start" button style={{ textDecoration: 'none'}} component="a" href={`mailto:${item.email}`}>
                <ListItemAvatar>
                <Avatar sx={{ bgcolor: `rgb(${random()}, ${random()}, ${random()})` }} aria-label="recipe">
                  {item.name.substring(0,3)}
                </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body2"
                        color="text.primary"
                      >
                        {item.school}
                      </Typography>
                      
                    </React.Fragment>
                  }
                />
                </ListItem>
                <Divider variant="inset" component="li" />
                </Box>
                  
              ))}
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;
  