import { Autocomplete, Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import QuestionDisplayCard from '../components/QuestionDisplayCard'
import {LoadingAnimation, LottieCom } from '../components/SmallerComps'
import {postHeader } from '../utils/fetchData'
import axios from 'axios';
import { companyNames, questionTypeLabels } from "../utils/labelData";
import {KnowledgeListItem } from '../components/KnowledgeListItem'
import { useNavigate } from 'react-router-dom'

const KnowledgePage = ({token, setToken}) => {

  let navigate = useNavigate();

  useEffect(() => {
    if (token === "")
      navigate('/signin')
  }, [token]);

  const requestBody = {
    "pageFirst": 1,
    "pageSizeFirst": 30,
    "pageSecond": 1,
    "pageSizeSecond": 10,
    "pageThird": 1,
    "pageSizeThird": 10,
    "type": 0
}

const [questionListData, setQuestionListData] = useState([]);
const [displayCard, setDisplayCard] = useState(undefined);
const [questionSelectedType, setQuestionSelectedType] = useState(0);
const [companySelected, setCompanySelected] = useState(0);

useEffect(() => {
  handleSubmit();
}, []);

useEffect(() => {
  if (questionListData.length !== 0){
    setDisplayCard(questionListData[0])
  }
}, [questionListData]);


function handleSubmit() {

  const requestBody = {
    "pageFirst": 1,
    "pageSizeFirst": 30,
    "pageSecond": 1,
    "pageSizeSecond": 20,
    "pageThird": 1,
    "pageSizeThird": 20,
    "type": 0,
    "tag1": companySelected ? companySelected.label:"",
    "tag2": questionSelectedType? questionSelectedType.label: ""
}

  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/knowledge_load/`, requestBody, {
    headers: postHeader(token)
  })
  .then(res => {
    if (res.status === 200) {
      if (res.data.code === '00') {
          setQuestionListData(res.data.data.entities);
          setToken(res.data.token);
      }
      else if ((res.data.code === '97' || (res.data.code === '98')))
          navigate('/signin')
    }
  })
}


  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Stack direction='row' sx ={{mr:5}}>
            <Box flex={3} sx ={{mr:5, width : '100%'}}>
                <Box >
                  {displayCard === undefined ? <LoadingAnimation/>: <><QuestionDisplayCard  questioncard={displayCard} setDisplayCard = {setDisplayCard} token = {token}/></>}
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
                    onChange={(event, value) => setQuestionSelectedType(value)}
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
                    onChange={(event, value) => setCompanySelected(value)}
                    renderInput={(params) => <TextField {...params} label="Company Name" />}
                    />    

                    <Button sx={{ml:2}} onClick={handleSubmit}> Search</Button>
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