import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ProgrammingQuestionListItem } from '../components/ProgrammingQuestionListItem'

const ProgrammingPage = () => {

    const requestBody = {
        "pageFirst":1,
        "pageSizeFirst": 50,
    }
    const [questionListData, setQuestionListData] = useState([]);

    useEffect(() => {
        axios.post(`http://120.77.98.16:8080/programming_service/get_questions/`, requestBody, {
        headers: {
            'Content-Type': 'application/json',
            'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
        }
        })
        .then(res => {
            if (res.status === 200) {
            if (res.data.code === '00') 
                setQuestionListData(res.data.data.entities)
            }
        })

        console.log(questionListData);
    }, []);



  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Box flex={6}>
            <Typography fontWeight={600} color="#52a1de" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '70px' }}>
                Programming Question List
            </Typography>
        </Box>
        
        <Box sx={{p:5}}>
            <Stack direction='column' spacing='5px' >
                {questionListData?.map((item) => (
                    <ProgrammingQuestionListItem 
                        key = {item.id}
                        item = {item}
                    />
                ))}

            </Stack>
        </Box>

    </Box>
    </>
  )
}

export default ProgrammingPage