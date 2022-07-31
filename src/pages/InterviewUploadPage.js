import React, { useState, useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Autocomplete, TextField, Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { companyNames, questionTypeLabels } from "../utils/labelData";
import { postHeader } from "../utils/fetchData";
import { InterviewPreviewItem } from "../components/KnowledgeListItem";
import { LottieCom } from "../components/SmallerComps";

export default function QuestionUploadPage() {

    const defaultInterViewData = {
        title: "",
        description: "",
        company: "",
        level: "",
        location: "",
        time: "",
        questions: []
    }

    const defaultQuestionData = {
        id: 0,
        question_content: '',
        tag: ''
    }

    const [questionCollection, setQuestionCollection] = useState([]);
    const [interviewData, setInterviewData] = useState(defaultInterViewData);
    const [editorValue, setEditorValue] = useState('');
    const [questionData, setQuestionData] = useState(defaultQuestionData);
    const [itemId, setItemId] = useState(0);
    const [fillStep, setFillStep] = useState(2);

    useEffect(() => {
        setQuestionData({...questionData, question_content: editorValue, id: itemId})
    }, [editorValue]);


    let navigate = useNavigate();

    const handleAddQuestion = () => {
        setQuestionCollection([...questionCollection, questionData])
        setItemId(itemId + 1)
    };




    const InterviewMetaData = () => {
        return (
            <>
    
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
    
    
    const InterviewRenderingPart = () => {
        return (
            <>
            <Typography variant="h5" color = "secondary">
                Questions Added
            </Typography>

            {questionCollection.length === 0
            ?
            <Typography align="center" fontWeight={600} color="#777" sx={{ my:2, opacity: '0.4', fontSize: '20px', p:3, background: '#eee'}}>
                No Questions Added Yet
            </Typography> 
            : 
            <>
            {questionCollection?.map((item) => (
                <InterviewPreviewItem 
                    key = {item.id}
                    item = {item}
                />
            ))}
            </>
            }
            <Button sx={{mt: 5}} variant="contained">submit interview</Button>
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
                    value={interviewData.title}
                    onChange={(e) =>{
                        setInterviewData({ ...interviewData, title: e.target.value })
                    }}
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
            </>

        {fillStep < 2 ? 
        <>
        <InterviewMetaData /> 
        </>
        :<></>}
        

        {fillStep < 1? 
        <>
        <Divider sx={{mt: 3}}/>

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
                    setQuestionData({ ...questionData, tag: thisTag.label })
                }
                renderInput={(params) => <TextField {...params} label="Question Type" />}
                />
       
            </Box>
    
            <Box sx={{my:3}}>
    
            <Typography variant="h6" color = "gray">
                Question Content
            </Typography>
    
            <MDEditor height={300}
                value={editorValue}
                onChange = {setEditorValue}
                />
    
            </Box>
    
            <Button
                variant="outlined"
                onClick={handleAddQuestion}
                >
                add
            </Button>
            <Divider sx={{my: 3}}/>
            <InterviewRenderingPart />

        </>:<></>
        }

        {fillStep !== 0?
        <>
        <Button sx={{mt:5}} variant="contained" color="success" onClick={() => {setFillStep(fillStep - 1)}}>Next</Button>
            <Box maxWidth='500px'>
            <LottieCom sourceLink = 'https://assets4.lottiefiles.com/packages/lf20_1is5t0ur.json' height = '400px' width = '400px'/>
        </Box>
        </>
        :<></>}
        
    </Box>
    
    <Box>


    </Box>

    </>
    

  );

}

