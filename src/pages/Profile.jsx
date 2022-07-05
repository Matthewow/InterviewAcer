import { Box, Stack, Button,InputLabel, MenuItem, 
    Grid, TextField,
    Skeleton, Typography, Autocomplete } from "@mui/material";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { topUniversities } from "../utils/labelData";

const Profile = () => {
    const [buttonText, setButtonText] = useState("Edit");
    const [contentEditing, setContentEditing] = useState(false);
    var personalInfo = {
            email: "matthewwang@gmail.com",
            username: "matthewwang",
            identity: "Student",
            school: "The University of Hong Kong",
            grduationYear: "2022",
            graduationMonth: "08",
            company: "Amazon", 
            YoE: "2 years"
        };

    const [userIdentity, setUserIdentity] = useState(personalInfo.identity);

    const handleIdentityChange = (event) => {
        setUserIdentity(event.target.value);
      };


    const handleChange = (event) => {
        event.preventDefault();
        if(contentEditing === false) {
            setButtonText("Save");
            setContentEditing(true);
            
        }
        else{
            setButtonText("Edit");
            setContentEditing(false);
        }

        
    };

  return (
    <Box fullHeight flex={7} p={{ xs: 0, md: 2 }} sx={{ml:20}}>
        <Box margin={5} 
            sx = {{
                display: 'flex',
                flexDirection: 'column'
            }}>

            <Box spacing={2}
                sx = {{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                <Typography variant="h4" fontWeight={100}>
                    Profile Setting
                </Typography>
                <Button onClick = {handleChange} variant="outlined" size="small" sx = {{ml: 4}}>
                    {buttonText}
                </Button>
                
            </Box>

            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Typography variant="h6">
                            Email Address
                        </Typography>
                        <TextField
                            disabled
                            fullWidth
                            id="email"
                            label= {personalInfo.email}
                            name="email"
                        />
                    </Grid>

                <Grid item xs={7}>
                    <Typography variant="h6">
                        Username
                    </Typography>
                    <TextField
                        disabled = {!contentEditing}
                        fullWidth
                        id="username"
                        label = {personalInfo.username}
                        name="username"
                    />
                </Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={4}>
                    <Typography variant="h6">
                        Identity
                    </Typography>

                    <Select
                        labelId="identity"
                        id ="identity"
                        fullWidth
                        value = {userIdentity}
                        label ="identity"
                        disabled = {!contentEditing}
                        onChange={handleIdentityChange}
                    >
                        <MenuItem value = {"Student"}>Student</MenuItem>
                        <MenuItem value = {"Graduated"}>Graduated</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={8}></Grid>


                <Grid item xs={5}>
                    <Typography variant="h6">
                        Education
                    </Typography>
                    <Autocomplete 
                        disabled = {!contentEditing}
                        id="combo-box-demo"
                        options={topUniversities}
                        renderInput={(params) => <TextField {...params} label="University" />}
                    />
                    
                </Grid>

                <Grid item xs={2}>
                    <Typography variant="h6">
                        Graduation Year
                    </Typography>

                    <TextField
                        disabled = {!contentEditing}
                        fullWidth
                        id="username"
                        label= {personalInfo.grduationYear + "/" + personalInfo.graduationMonth}
                        name="username"
                    />
                </Grid>
                <Grid item xs={5}> </Grid>

                <Grid item xs={5}>
                    <Typography variant="h6">
                        Experience
                    </Typography>

                    <TextField
                        disabled = {!contentEditing}
                        fullWidth
                        id="username"
                        label={personalInfo.company}
                        name="username"
                    />
                </Grid>

                <Grid item xs={2}>
                    <Typography variant="h6">
                        YoE
                    </Typography>

                    <TextField
                        disabled = {!contentEditing}
                        fullWidth
                        id="username"
                        label={personalInfo.YoE}
                        name="username"
                    />
                </Grid>
                </Grid>
                
                
            </Box>
            



        </Box>

    </Box>
  );
};



export default Profile;
