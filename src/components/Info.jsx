import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Alert, TextField, Button, Stack } from "@mui/material";
import Navbar from "./Navbar";
import axios from 'axios';
import { AddBox } from "@mui/icons-material";

export default function Info() {

  return (
    <>
    <Navbar/>

    <Box>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    </Box>
    </>

  );

}