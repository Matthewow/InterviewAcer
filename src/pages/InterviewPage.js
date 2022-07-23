import { Box, Typography, Stack, Card, CardActions, CardMedia, CardContent,Button } from '@mui/material'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import InterviewMainPageTable from '../components/InterviewMainPageTable';
import { LottieCom } from '../components/SmallerComps';
import { postHeader } from '../utils/fetchData';

const InterviewPage = () => {

  const [interviewList, setInterviewList] = useState([]);
  const [interviewNewest, setInterviewNewest] = useState("");

  const requestBody = {
        "pageFirst": 1,
        "pageSizeFirst": 10
    }

  useEffect(() => {
    axios.post(`http://120.77.98.16:8080/interview_service/load/`, requestBody, {headers: postHeader})
    .then(res => {
    if (res.status === 200) {
      if (res.data.code === '00') 
          setInterviewList(res.data.data.entities);
          setInterviewNewest(res.data.data.entities[0])
    }
  })
  }, []);

  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Box flex={6}>
            <Typography fontWeight={600} color="#d9534a" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '70px' }}>
                Check the Latest Interviews Out!
            </Typography>
        </Box>

        <Box flex={6}>
          {interviewNewest !== ""?
          <>
          <Stack direction='row'>
          <Card sx={{ maxWidth: 600, mt:8}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color = "red">
                Newest!
              </Typography>

              <Typography variant="h6" color="primary">
                {interviewNewest.title}
              </Typography>

              <Typography variant="h6" color="secondary">
                {`Questions asked: ${interviewNewest.questions.queryInfo.totalRecord}`}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {interviewNewest.description}
              </Typography>


            </CardContent>
            <CardActions>
              <Button size="small" variant='contained'>{interviewNewest.company}</Button>
              <Button size="small" variant='contained'>{interviewNewest.position}</Button>
              <Button size="small" variant='contained'>{interviewNewest.level}</Button>
              <Button size="small" variant='contained'>{interviewNewest.location}</Button>
            </CardActions>
          </Card>
          <Box sx={{ml:8}}>
          <LottieCom sourceLink = "https://assets4.lottiefiles.com/packages/lf20_DMgKk1.json" height = '300px'></LottieCom>
          </Box>
          </Stack>
          </>
          :<></>
          }
        </Box>



        <Box flex={6} sx={{mt:5, mr:20}}>
        {interviewList.length !== 0?
          <InterviewMainPageTable data = {{interviewList}}/>
          :
          <></>
        }
        </Box>
        

    </Box>
    </>
  )
}

export default InterviewPage