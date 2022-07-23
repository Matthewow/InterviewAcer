import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Stack } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export function KnowledgeListItem({item, setDisplayCard}) {
  return (
    <Card 
       
      onClick={() => {
        setDisplayCard(item);
        console.log(`set display to }`);
        console.log(item);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Stack direction='row' gap='10px'>
            {item.company?
            <Typography gutterBottom variant="h6" component="div" color='primary'>
            {item.company}
          </Typography>:<></>}
            

            <Typography gutterBottom variant="h6" component="div" color='secondary'>
              {item.tag}
            </Typography>
          </Stack>
          

          <Typography variant="body2" color="text.secondary">
            {item.question_content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



export  function KnowledgeCommentItem({data}) {
  return (
    <List sx={{  bgcolor: 'background.paper' }}>
      {data?.map((item) => (
        <Box key = {item.knowledgeCommentId} maxWidth='400px'>
          <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar aria-label="recipe">
              {item.userName[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.userName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline'}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`${item.lastModifiedTime.substring(0, 10)} ${item.lastModifiedTime.substring(11, 16)} \n`}
                </Typography>

                <Typography component="span" style={{ wordWrap: "break-word" }}>{item.content}</Typography>
                
              </React.Fragment>
        }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </Box>
      ))}
      
    </List>
  );
}

export function InterviewPreviewItem({item}) {
  return (
    <Card>
        <CardContent>
          <Stack direction='row' gap='10px' sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Stack direction='row'>
              <Typography gutterBottom variant="body1" component="div" color='secondary'>
                {item.tag}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ml:1}}>
                {item.question_content}
              </Typography>
            </Stack>

            <Stack direction='row'>
              <Button variant='contained'>edit</Button>
              <Button variant='contained' color='error' sx={{ml:1}}>delete</Button>
            </Stack>
          </Stack>
        </CardContent>
    </Card>
  );
}

export function ProgrammingHistoryItem({item}) {
  return (
    <Card>
        <CardContent>
          <Stack direction='row' gap='10px' sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="body1" color = {item.status === 'Accepted' ? 'green' : "red"}>
                  {`${item.status}` }
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ml:1}}>
                {`${item.uploadTime.substring(0, 10)} ${item.uploadTime.substring(11, 16)}`}
              </Typography>

          </Stack>
        </CardContent>
    </Card>
  );
}