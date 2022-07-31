import { List, ListItem, ListItemButton, Stack, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { postHeader } from '../utils/fetchData';
import axios from 'axios';
import { KnowledgeListItem } from '../components/KnowledgeListItem';
import InterviewMainPageTable from '../components/InterviewMainPageTable';
import { useNavigate } from 'react-router-dom';
import QuestionDisplayCard from '../components/QuestionDisplayCard';


const MyPostPage = ({token, setToken}) => {

    let navigate = useNavigate();
    useEffect(() => {
        if (token === "")
        navigate('/signin')
    }, [token]);

    const [select, setSelect] = useState('knowledge');
    const [myPostData, setMyPostData] = useState();
    const [displayCard, setDisplayCard] = useState();


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/my_posts`, {
        headers: postHeader(token)
        })
        .then(res => {
        if (res.status === 200) {
            if (res.data.code === '00') 
                setMyPostData(res.data.data)
            }
        })
        
    }, []);

    useEffect(() => {
        if (myPostData!== undefined)
       setDisplayCard(myPostData.questions.entities[0])
    }, [myPostData]);


    return (
        <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <>

        <Box flex={1} p={2} bgcolor='#eee' >
            <Box position="fixed">
                
            <List>
                <ListItem disablePadding>
                <ListItemButton component="a" onClick={()=>{setSelect('knowledge')}}>
                    <ListItemIcon>
                        <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Knowledge" />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton component="a" onClick={()=>{setSelect('interview')}}>
                    <ListItemIcon>
                        <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Interview" />
                </ListItemButton>
                </ListItem>
            </List>
            
            </Box>
        </Box>
        </>
        
        {myPostData && displayCard?
        <>

        {select === "knowledge"?
        <>
            <Box flex={3} p={2} sx={{}}>
                {myPostData.questions.entities?.map((item) => (
                    <KnowledgeListItem 
                      key = {item.knowledgeId}
                      item = {item}
                      setDisplayCard = {setDisplayCard}
                    />
                ))}
                
            </Box>

            <Box flex={4} p={2} sx={{}}>
                <QuestionDisplayCard  questioncard={displayCard} setDisplayCard = {setDisplayCard} token = {token}/>
            </Box>
        
        </>
        :
        <>
            <Box flex={7} p={2} sx={{}}>
            
                <InterviewMainPageTable data = {myPostData.interviews.entities}/>

            </Box>
        
        </>
        }       
        
        
        </>:<></>
        }

        

            
        </Stack>
        </>
    );
}

export default MyPostPage