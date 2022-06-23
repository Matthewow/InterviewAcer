import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Autocomplete, TextField, Button } from "@mui/material";
import Navbar from "./Navbar";
import QuestionCard from "./QuestionCard";
import axios from 'axios';

export default function Upload() {
  // https://uiwjs.github.io/react-md-editor/

  const [questionData, setQuestionData] = useState({
    value: "**type your question here**",
    quetionTag: "",
    companyTag: ""
  });

  const [questionContent, setQuestionContent] = useState(questionData.value);

  const defaultData = {
    value: "**type your question here**",
    quetionTag: "",
    companyTag: ""
  }

  const handleSubmit = () => {
    console.log(questionData);
    postQuestion();

  };

  const postQuestion = () => {
    const postData = {
        "question_content": questionData.value,
        "userid": "12345@qq.com",
        "company": questionData.companyTag,
        "tag": questionData.quetionTag
    };

    axios.post(`http://120.77.98.16:8080/knowledge_service`, postData)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          console.log(res.data);
          if (res.data.code === '00') {
            console.log(questionContent)
            setQuestionContent(defaultData.value)
            console.log(questionContent)
          }
          else{
            //   setErrorAlert("block")
            //   setAlertContext(res.data.description)
          }
        }
      })
    };


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
            onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
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
            onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, companyTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Company Name" />}
        />          
        </Box>

        <Box sx={{my:3}}>

        <Typography variant="h6" color = "gray">
            Question Content
        </Typography>

        <MDEditor height={300}
            value={questionContent}
            onChange = {setQuestionContent}
        />

        </Box>

        <Button
            variant="outlined"
            onClick={handleSubmit}
        >
            Upload
        </Button>
        
    </Box>
    
    <Box>


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