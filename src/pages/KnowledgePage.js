import { Autocomplete, Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import QuestionDisplayCard from '../components/QuestionDisplayCard'
import {LoadingAnimation, LottieCom } from '../components/SmallerComps'
import {postHeader } from '../utils/fetchData'
import axios from 'axios';
import { companyNames, questionTypeLabels } from "../utils/labelData";
import KnowledgeListItem from '../components/KnowledgeListItem'

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
const [displayCard, setDisplayCard] = useState(undefined);

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
  console.log(displayCard);
  console.log('====================================');
}

  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Stack direction='row'>
            <Box flex={3} sx ={{mr:5}}>
                <Box position = 'fixed'>
                  {displayCard === undefined ? <LoadingAnimation/>: <><QuestionDisplayCard  questioncard={displayCard}/></>}
                </Box>
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


                  {questionListData?.map((item) => (
                    <KnowledgeListItem 
                      key = {item.knowledgeId}
                      item = {item}
                      setDisplayCard = {setDisplayCard}
                    />
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