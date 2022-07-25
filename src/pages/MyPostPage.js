import { List, ListItem, ListItemButton, Stack, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { LottieCom } from '../components/SmallerComps';
import { QuestionCard } from '../components/QuestionCard';
import QuestionDisplayCard from '../components/QuestionDisplayCard';


const PageSideBar = () => {
  return (
    <>
    <Box flex={1} p={2} bgcolor='#eee' >
            <Box position="fixed">
                
            <List>
                <ListItem disablePadding>
                <ListItemButton component="a" >
                    <ListItemIcon>
                        <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Knowledge" />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton component="a" >
                    <ListItemIcon>
                        <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Interview" />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton component="a" >
                    <ListItemIcon>
                        <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Discussion(tbd)" />
                </ListItemButton>
                </ListItem>
                
            </List>
            
            </Box>
        </Box>
        </>
  )
}

const MyPostPage = () => {
    const [select, setSelect] = useState(false);
    return (
        <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            
            <PageSideBar />
            <Box flex={3} p={2} sx={{}} bgcolor='#888'>
                Question list
            </Box>

            <Box flex={4} p={2} sx={{}}>
               {select 
               ? 
               <>
                <QuestionDisplayCard />
               </>:
               <>
                <LottieCom sourceLink = 'https://assets3.lottiefiles.com/private_files/lf30_ipvphpwo.json' height = '800px' width = '400px'/>
               </>
               }
            </Box>
        </Stack>
        </>
    );
}

export default MyPostPage