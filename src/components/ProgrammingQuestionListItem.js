import { Card, CardContent, Stack, Typography, Divider } from '@mui/material';
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

    return (
      <Card>
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
  
              {/* <Stack direction='row'>
                <Button variant='contained'>edit</Button>
                <Button variant='contained' color='error' sx={{ml:1}}>delete</Button>
              </Stack> */}
            </Stack>
          </CardContent>
      </Card>
    );
  }