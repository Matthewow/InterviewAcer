import { Button, Paper, Stack, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { KnowledgeListItem } from '../components/KnowledgeListItem';
import QuestionDisplayCard from '../components/QuestionDisplayCard';
import { postHeader } from '../utils/fetchData';

const SingleInterviewPage = ({token, setToken}) => {
    const interviewId = useLocation().state;
    const [interviewData, setInterviewData] = useState();
    const [displayCard, setDisplayCard] = useState();
    const [isLiked, setIsLiked] = React.useState(false);
    let navigate = useNavigate();


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/interview_service/query?interviewId=${interviewId}`, {
                headers: postHeader(token)
            })
        .then(res => {
            if (res.status === 200) {
                if (res.data.code === "00"){
                    setInterviewData(res.data.data)
                    setDisplayCard(res.data.data.questions.entities[0])
                    setIsLiked(res.data.data.interview.isLiked === 0? false: true)
                }
                else if ((res.data.code === '97' || (res.data.code === '98')))
                    navigate('/signin')
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

                    <Box boxShadow={2}>

                        <Typography gutterBottom variant="h4" component="div" color="text.secondary">
                            {interviewData.interview.title}
                        </Typography>

                        <Typography gutterBottom variant="body1" component="div" color="text.secondary">
                            {`Upload Time: ${interviewData.interview.uploadTime.substring(0, 10)} by ${interviewData.interview.userName}`}
                        </Typography>

                        <Typography gutterBottom variant="body1" component="div" color="text.secondary" sx={{maxWidth: "600px"}}>
                            {interviewData.interview.description}
                        </Typography>


                        <Stack direction='row' spacing={4}>
                            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight={800}>
                                {`Company:`}
                            </Typography>
                            <Button variant='text'> {interviewData.interview.company}</Button>
                        </Stack>

                        <Stack direction='row' spacing={4}>
                            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight={800}>
                                {`Position :`}
                            </Typography>
                            <Button variant='text'> {interviewData.interview.position}</Button>
                        </Stack>

                        <Stack direction='row' spacing={4}>
                            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight={800}>
                                {`Job Level:`}
                            </Typography>
                            <Button variant='text'> {interviewData.interview.level}</Button>
                        </Stack>

                        <Stack direction='row' spacing={4}>
                            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight={800}>
                                {`Company:`}
                            </Typography>
                            <Button variant='text'> {interviewData.interview.company}</Button>
                        </Stack>

                        {/* <IconButton aria-label="add to favorites">
                        <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                            checked = {isLiked}
                            onChange = {handleLiked}
                        />
                        </IconButton> */}

                    </Box>
                    
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{mt: 5}}>
                        Questions
                    </Typography>

                    <Stack spacing={2}>
                        {interviewData.questions.entities?.map((item) => (
                            <KnowledgeListItem 
                            key = {item.knowledgeId}
                            item = {item}
                            setDisplayCard = {setDisplayCard}
                            />
                        ))}
                    </Stack>


                    </Box>
                </Box>

                <Box p={2} height="100vh" display="flex" flexDirection="column" width="600px">
                    {displayCard === undefined ? <></>
                    :
                    <QuestionDisplayCard questioncard={displayCard} setDisplayCard = {setDisplayCard} token = {token}/>
                    }
                </Box>

            </Stack>
            </>
        )
}

export default SingleInterviewPage