import { List, ListItem, ListItemButton, Stack, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { LottieCom } from '../components/SmallerComps';
import { QuestionCard } from '../components/QuestionCard';
import QuestionDisplayCard from '../components/QuestionDisplayCard';
import { postHeader } from '../utils/fetchData';
import axios from 'axios';
import { KnowledgeListItem } from '../components/KnowledgeListItem';
import InterviewMainPageTable from '../components/InterviewMainPageTable';


const MyCollectionPage = () => {
    const [select, setSelect] = useState('knowledge');
    const [MyCollectionData, setMyCollectionData] = useState();
    const [displayCard, setDisplayCard] = useState();

    useEffect(() => {
        axios.get(`http://120.77.98.16:8080/users_like`, {
        headers: postHeader
        })
        .then(res => {
        if (res.status === 200) {
            if (res.data.code === '00') 
                setMyCollectionData(res.data.data.entities)
            }
        })
        
    }, []);

    useEffect(() => {
        console.log('====================================');
        console.log(MyCollectionData);
        console.log('====================================');
        if (MyCollectionData!== undefined && MyCollectionData.knowledge.entities.length > 0)
            setDisplayCard(MyCollectionData.knowledge.entities[0])
    }, [MyCollectionData]);


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
{/* 
                <ListItem disablePadding>
                <ListItemButton component="a" >
                    <ListItemIcon>
                        <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Discussion(tbd)" />
                </ListItemButton>
                </ListItem> */}
                
            </List>
            
            </Box>
        </Box>
        </>
        
        {MyCollectionData && displayCard?
        <>

        {select === "knowledge"?
        <>
            <Box flex={3} p={2} sx={{}}>
                {MyCollectionData.knowledge.entities?.map((item) => (
                    <KnowledgeListItem 
                      key = {item.knowledgeId}
                      item = {item}
                      setDisplayCard = {setDisplayCard}
                    />
                ))}
                
            </Box>

            <Box flex={4} p={2} sx={{}}>
{/* 
            <QuestionDisplayCard  questioncard={displayCard} setDisplayCard = {setDisplayCard}/> */}
               
            </Box>
        
        </>
        :
        <>
            <Box flex={7} p={2} sx={{}}>
            
                <InterviewMainPageTable data = {MyCollectionData.interviews.entities}/>

            </Box>
        
        </>
        }       
        
        
        </>:<></>
        }

        

            
        </Stack>
        </>
    );
}

export default MyCollectionPage