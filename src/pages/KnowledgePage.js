import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import QuestionDisplayCard from '../components/QuestionDisplayCard'
import { LottieCom } from '../components/SmallerComps'
import {postHeader } from '../utils/fetchData'
import axios from 'axios';
import { companyNames, questionTypeLabels } from "../utils/labelData";

const KnowledgePage = () => {

  const requestBody = {
    "pageFirst": 1,
    "pageSizeFirst": 30,
    "pageSecond": 1,
    "pageSizeSecond": 100,
    "pageThird": 1,
    "pageSizeThird": 2,
    "type": 0
}


const [questionListData, setQuestionListData] = useState([]);

useEffect(() => {
  console.log(questionListData)
}, [questionListData]);

function handleSubmit() {
  console.log('posted', postHeader);
  axios.post(`http://120.77.98.16:8080/knowledge_load/`, requestBody, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
  }
  })
  .then(res => {
    console.log(res)
    if (res.status === 200) {
      if (res.data.code === '00') 
          setQuestionListData(res.data.data.entities)
    }
  })

}

function check(){
  console.log('====================================');
  console.log(questionListData);
  console.log('====================================');
}



  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Stack direction='row'>
            <Box flex={3} sx ={{mr:5}}>
                <QuestionDisplayCard />
            </Box>

            <Box flex={3}>
                <Stack direction='column'>

                  <Stack direction='row' justifyContent="space-around">
                      <Box flex={2}>
                        <Typography fontWeight={600} color="#52a1de" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '70px' }}>
                          Question List
                        </Typography>


                      </Box>
                    <Box sx={{right:0}}>
                      <LottieCom sourceLink = "https://assets4.lottiefiles.com/packages/lf20_hz4zkrb4.json"/>
                    </Box>

                  </Stack>

                  <Box flex = {3}>

                  <Stack direction='row'>


                  <Autocomplete 
                    sx={{
                      mt: 1, 
                      ml: 1,
                      width: 200
                    }}
                    id="combo-box-demo"
                    options={questionTypeLabels}
                    // onChange={(e, thisTag) =>
                    //     setQuestionData({ ...questionData, quetionTag: thisTag.label })
                    //   }
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
                    // onChange={(e, thisTag) =>
                    //     setQuestionData({ ...questionData, companyTag: thisTag.label })
                    //   }
                    renderInput={(params) => <TextField {...params} label="Company Name" />}
                    />    
                    <Button sx={{ml:2}} onClick={handleSubmit}> Search ALL </Button>
                    <Button sx={{ml:2}} onClick={check}> ALL </Button>
                  </Stack>

                  {/* <Stack direction="row" gap="5px" alignItems="center" bgcolor='#eee'
                    sx={{
                      m: 1,
                      p: 1
                    }}>
                    <Button variant="contained" size="small" color="primary" sx={{opacity: 0.7}}>Network</Button>
                    <Button variant="contained" size="small" color="secondary" sx={{opacity: 0.7}}>Amazon</Button>
                    <Typography>dsfsadfs</Typography>
                  </Stack> */}

                  {questionListData?.map((item) => (
                    <Stack key={item.knowledgeId} direction="row" gap="5px" alignItems="center" bgcolor='#eee'
                    sx={{
                      m: 1,
                      p: 1
                    }}>
                    {item.tag? <Button variant="contained" size="small" color="primary" sx={{opacity: 0.7}}>{item.tag}</Button>: <></>}
                    {item.company?<Button variant="contained" size="small" color="secondary" sx={{opacity: 0.7}}>{item.company}</Button>:<></>}
                    {/* <Button variant="contained" size="small" color="primary" sx={{opacity: 0.7}}>{item.tag}</Button>
                    <Button variant="contained" size="small" color="secondary" sx={{opacity: 0.7}}>{item.company}</Button> */}
                    <Typography>{item.question_content}</Typography>
                  </Stack>
                  ))}



                  </Box>

                </Stack>
            </Box>

        </Stack>
    </Box>
    </>
  )
}

export default KnowledgePage