import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Alert, TextField, Button, Stack } from "@mui/material";
import {useLocation, useNavigate} from 'react-router-dom';

export default function Info() {
    let information = useLocation();
    let navigate = useNavigate();
    const backpath = "" + information.state.backto;
    const handleSubmit = () => {
        navigate(backpath, { replace: true })
    }

  return (
    <>

    <Box sx={{m: 4}}>
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={information.state.info}>{information.state.content}</Alert>
        </Stack>

        <Button 
            sx = {{marginY: 2}}
            variant = 'outlined'
            onClick={handleSubmit}
        >
            back
        </Button>

        
    </Box>
    </>

  );

}