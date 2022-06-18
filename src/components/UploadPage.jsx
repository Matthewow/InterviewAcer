import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Autocomplete, TextField, Button } from "@mui/material";
import Navbar from "./Navbar";
import QuestionCard from "./QuestionCard";

export default function Upload() {
  // https://uiwjs.github.io/react-md-editor/
  const [value, setValue] = React.useState("**eg. What is p2p connection?**");

  return (
    <>
    <Navbar/>
    <Box 
        sx={{
            m:8
        }}
    >
    
        <Typography variant="h4" color = "gray">
            Upload an Interview Question
        </Typography>

        <Box
        sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'row'
        }}
        >
            <Autocomplete 
            sx={{
                mt: 1, 
                ml: 1,
                width: 200
            }}
            id="combo-box-demo"
            options={questionTypeLabels}
            renderInput={(params) => <TextField {...params} label="Question Type" />}
            />

            <Autocomplete 
            sx={{
                mt: 1, 
                ml: 1,
                width: 200
            }}

            id="combo-box-demo"
            options={companyNames}
            renderInput={(params) => <TextField {...params} label="Company Name" />}
        />          
        </Box>

        <Box sx={{my:3}}>

        <Typography variant="h6" color = "gray">
            Question Content
        </Typography>

            <MDEditor height={300}
                value={value}
                onChange={setValue}
            />
        </Box>

        <Button
            variant="outlined"
        >
            Upload
        </Button>
        
    </Box>
    </>
    

  );

}

const questionTypeLabels = [
    {label: 'Network'},
    {label: 'Operating System'},
    {label: 'Database'},
    {label: 'Data Structures'}
]

const companyNames = [
    {label: 'Amazon'},
    {label: 'Tencent'},
    {label: 'Google'},
    {label: 'Alibaba'}
]