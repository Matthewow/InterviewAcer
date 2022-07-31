import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgrammingQuestionListItem } from '../components/ProgrammingQuestionListItem'
import { postHeader } from '../utils/fetchData'

const ProgrammingPage = ({token, setToken}) => {

    let navigate = useNavigate();
    useEffect(() => {
        if (token === "")
            navigate('/signin')
    }, [token]);

    const requestBody = {
        "pageFirst":1,
        "pageSizeFirst": 50,
    }
    const [questionListData, setQuestionListData] = useState([]);

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/programming_service/get_questions/`, requestBody, {
        headers: postHeader(token)
        })
        .then(res => {
            if (res.status === 200) {
            if (res.data.code === '00'){
                setQuestionListData(res.data.data.entities)
                setToken(res.data.token);
                }
            else if ((res.data.code === '97' || (res.data.code === '98')))
                navigate('/signin')
            }
        })
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