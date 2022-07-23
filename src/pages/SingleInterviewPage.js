import { Stack, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import QuestionDisplayCard from '../components/QuestionDisplayCard';
import { postHeader } from '../utils/fetchData';

const SingleInterviewPage = () => {
    const interviewId = useLocation().state;
    const [interviewData, setInterviewData] = useState();
    const [displayCard, setDisplayCard] = useState();


    useEffect(() => {
        axios.get(`http://120.77.98.16:8080/interview_service/query?interviewId=${interviewId}`, {
            headers: postHeader
            })
        .then(res => {
            if (res.status === 200 && res.data.code === "00") {
                console.log("-----",res.data.data)
                setInterviewData(res.data.data)
                setDisplayCard(res.data.data.questions[0])
            }
        })
        
    }, [interviewId]);

    if (interviewData === undefined){
        return(<></>)
    }
    else
        return (
            <>
            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{mx: 5}}>
                <Box p={2} height="100vh" display="flex" flexDirection="column">
                    <Box sx={{m:3}}>
                    <Typography fontWeight={800} color="#d9534a" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '70px' }}>
                        About the Interview
                    </Typography>

                    <Typography gutterBottom variant="h4" component="div" color="text.secondary">
                        {interviewData.interview.title}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        {`Upload Time: ${interviewData.interview.uploadTime.substring(0, 10)}`}
                    </Typography>

                    <Typography gutterBottom variant="body1" component="div" color="text.secondary">
                        {interviewData.interview.description}
                    </Typography>




                    </Box>
                </Box>

                <Box p={2} height="100vh" display="flex" flexDirection="column">
                    {/* <QuestionDisplayCard  questioncard={displayCard} setDisplayCard = {setDisplayCard}/> */}
                    
                </Box>

            </Stack>
            </>
        )
}

export default SingleInterviewPage