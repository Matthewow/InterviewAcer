import { Card, CardContent, Stack, Typography, Divider, CardActionArea } from '@mui/material';
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

export function ProgrammingQuestionListItem({item}) {

  const renderSwitch = (param) => {
    switch(param) {
      case 'Easy':
        return 'green';
      case 'Medium':
        return 'DarkOrange';
      case 'Hard':
        return 'red';
    }
  }

  let navigate = useNavigate();

    return (
      <Card>
          <CardActionArea onClick = {()=>{
              console.log(item)
              navigate('/programming_question', { state: item });
          }}>
          <CardContent>
            <Stack direction='row' gap='10px' sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Stack direction='row' spacing='8px'>
                 
                <Typography gutterBottom variant="body1" component="div">
                  {item.id}
                </Typography>

                <Divider orientation="vertical" flexItem/>

                <Typography variant="body1" color = {renderSwitch(item.level)} sx={{ml:1}}>
                  {item.level}
                </Typography>

                <Divider orientation="vertical" flexItem/>
                
                <Typography variant="body1" color="text.secondary" sx={{ml:1}}>
                  {item.title}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
          </CardActionArea>
      </Card>
    );
  }