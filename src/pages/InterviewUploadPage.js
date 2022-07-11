import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Autocomplete, TextField, Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { companyNames, questionTypeLabels } from "../utils/labelData";
import { postHeader } from "../utils/fetchData";

export default function QuestionUploadPage() {

  const [questionData, setQuestionData] = useState({
    value: "**type your question here**",
    quetionTag: "",
    companyTag: ""
  });

  let navigate = useNavigate();

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
        "question_content": questionContent,
        "userid": "12345@qq.com",
        "company": questionData.companyTag,
        "tag": questionData.quetionTag
    };

    console.log(postData)

    axios.post(`http://120.77.98.16:8080/knowledge_service`, postData, {
      headers: postHeader
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          console.log(res.data);
          if (res.data.code === '00') {
            setQuestionContent(defaultData.value)
            navigate('/info', { state: {
                info: "success",
                content: "Successfully Uploaded",
                backto: "/question_upload"
            } });
          }
          else{
            navigate('/info', { state: {
                info: "success",
                content: "Successfully Uploaded",
                backto: "/question_upload"
            } });
          }
        }
      })
    };


const InterviewMetaData = () => {
    return (
        <>
        <Typography variant="h5" color = "primary" sx={{mt: 5}}>
            About this interview
        </Typography>

        <Stack direction='column' maxWidth='800px'>
            <Typography sx={{mt: 2}}> Title</Typography>
            <TextField
            id="standard-multiline-flexible"
            label="You can add a brief of this interview here, and get the others a quick understanding"
            maxRows={4}
            //   value={value}
            //   onChange={handleChange}
            variant="standard"
            />
            <Typography sx={{mt: 3}}> Description</Typography>
            <TextField
            id="standard-multiline-static"
            label="More detailed description here "
            multiline
            rows={4}
            variant="standard"
            />        
        </Stack> 

         <Typography variant="h5" color = "primary" sx={{mt: 3}}>
            More Labels
        </Typography> 

        <Stack direction='row' sx={{mt: 2}}>
            
            <Autocomplete 
                sx={{
                    mt: 1, 
                    ml: 1,
                    width: 200
                }}
                freeSolo
                id="combo-box-demo"
                options={questionTypeLabels}
                onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Interview Time" />}
            />

            <Autocomplete 
                sx={{
                    mt: 1, 
                    ml: 1,
                    width: 200
                }}
                freeSolo
                id="combo-box-demo"
                options={questionTypeLabels}
                onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Job/Position" />}
            />

            <Autocomplete 
                sx={{
                    mt: 1, 
                    ml: 1,
                    width: 200
                }}
                freeSolo
                id="combo-box-demo"
                options={questionTypeLabels}
                onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Job Level" />}
            />

            <Autocomplete 
                sx={{
                    mt: 1, 
                    ml: 1,
                    width: 200
                }}
                freeSolo
                id="combo-box-demo"
                options={questionTypeLabels}
                onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Location" />}
            />

            <Autocomplete 
                sx={{
                    mt: 1, 
                    ml: 1,
                    width: 200
                }}
                freeSolo
                id="combo-box-demo"
                options={questionTypeLabels}
                onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Company"/>}
            />


        </Stack></>
    )
}

const QuestionAddingPart = () => {

    return (
        <>

        <Typography variant="h5" color = "primary" sx={{mt: 3}} >
            Add Questions
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
            freeSolo
            id="combo-box-demo"
            options={questionTypeLabels}
            onChange={(e, thisTag) =>
                setQuestionData({ ...questionData, quetionTag: thisTag.label })
              }
            renderInput={(params) => <TextField {...params} label="Question Type" />}
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
            add
        </Button>
        </>
    )

}

const InterviewRenderingPart = () => {
    return (
        <>


        <Button variant="contained">submit interview</Button>
        
        </>
    )

}

  return (
    <>
    <Box 
        sx={{
            m:8
        }}
        >

        <Typography variant="h4" color = "gray">
            Upload an Interview
        </Typography>

        <InterviewMetaData /> 

        <Divider sx={{mt: 3}}/>

        <QuestionAddingPart /> 

        <Divider sx={{my: 3}}/>

        <InterviewRenderingPart />
        
        
    </Box>
    
    <Box>


    </Box>

    </>
    

  );

}

