import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

export default function KnowledgeListItem({item, setDisplayCard}) {
  return (
    <Card 
       
      onClick={() => {
        setDisplayCard(item);
        console.log(`set display to ${item.knowledgeId}`)
      }}
    >
      <CardActionArea>
        <CardContent>
          <Stack direction='row' gap='10px'>
            <Typography gutterBottom variant="h6" component="div" color='primary'>
              {item.company}
            </Typography>

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
